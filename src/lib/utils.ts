import { siteConfig } from "@/lib/config";
import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

const EXTERNAL_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;
const GITHUB_PAGES_HOST_SUFFIX = "github.io";

type NextData = {
  assetPrefix?: string;
};

function isExternalUrl(path: string): boolean {
  return EXTERNAL_URL_REGEX.test(path);
}

function ensureLeadingSlash(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

function normalizeBasePath(value?: string | null): string {
  if (!value) {
    return "";
  }

  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") {
    return "";
  }

  const withoutTrailingSlash = trimmed.replace(/\/+$/, "");
  const withLeadingSlash = withoutTrailingSlash.startsWith("/")
    ? withoutTrailingSlash
    : `/${withoutTrailingSlash}`;

  return withLeadingSlash === "/" ? "" : withLeadingSlash;
}

function parseUrl(value: string): URL | null {
  try {
    return new URL(value);
  } catch {
    return null;
  }
}

const configuredAssetUrl =
  parseUrl(process.env.NEXT_PUBLIC_ASSET_HOST ?? "") ??
  parseUrl(process.env.NEXT_PUBLIC_APP_URL ?? "") ??
  parseUrl(siteConfig.url) ??
  parseUrl("http://localhost:3000")!;

const configuredOrigin = configuredAssetUrl.origin;
const configuredBasePath = normalizeBasePath(configuredAssetUrl.pathname);

function getRuntimeOrigin(): string {
  if (typeof window === "undefined") {
    return configuredOrigin;
  }

  if (window.location.hostname.endsWith(GITHUB_PAGES_HOST_SUFFIX)) {
    return configuredOrigin;
  }

  return window.location.origin;
}

function getRuntimeBasePath(): string {
  if (typeof window === "undefined") {
    return configuredBasePath;
  }

  const nextData = (window as typeof window & { __NEXT_DATA__?: NextData })
    .__NEXT_DATA__;
  const assetPrefix = normalizeBasePath(nextData?.assetPrefix);
  if (assetPrefix) {
    return assetPrefix;
  }

  if (window.location.hostname.endsWith(GITHUB_PAGES_HOST_SUFFIX)) {
    return configuredBasePath;
  }

  return configuredBasePath;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  if (isExternalUrl(path)) {
    return path;
  }

  const origin = getRuntimeOrigin();
  const basePath = getRuntimeBasePath();
  return `${origin}${basePath}${ensureLeadingSlash(path)}`;
}

export function publicAssetUrl(path: string) {
  return absoluteUrl(path);
}

export function withBasePath(path: string): string {
  return absoluteUrl(path);
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = absoluteUrl("/og.png"),
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title: {
      template: "%s | " + siteConfig.name,
      default: siteConfig.name,
    },
    description: description || siteConfig.description,
    keywords: siteConfig.keywords,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    icons: "/favicon.ico",
    metadataBase: new URL(siteConfig.url),
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    ...props,
  };
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
