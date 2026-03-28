import { defaultLocale, localeMeta, type Locale } from '../i18n/config';
import { getLocaleAlternates } from './i18n';

export type SeoInput = {
  title: string;
  description: string;
  locale?: Locale;
  pathname: string;
  siteUrl: string;
};

export type SeoData = {
  canonical: string;
  alternates: Array<{ hreflang: string; href: string }>;
  ogLocale: string;
  themeColor: string;
  ogImage: string;
  jsonLd: Array<Record<string, unknown>>;
};

function toAbsoluteUrl(siteUrl: string, pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

function isProjectsPath(pathname: string) {
  return pathname === '/projects/' || pathname === '/en/projects/' || pathname.endsWith('/projects');
}

export function buildSeoData(input: SeoInput): SeoData {
  const locale = input.locale ?? defaultLocale;
  const canonical = toAbsoluteUrl(input.siteUrl, input.pathname);
  const rootUrl = toAbsoluteUrl(input.siteUrl, '/');
  const alternates = getLocaleAlternates(locale, input.pathname).map((entry) => ({
    hreflang: entry.hreflang,
    href: toAbsoluteUrl(input.siteUrl, entry.href)
  }));
  const currentMeta = localeMeta[locale];
  const organizationId = `${rootUrl}#organization`;
  const websiteId = `${rootUrl}#website`;

  const jsonLd: Array<Record<string, unknown>> = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': organizationId,
      name: 'ReadLab X',
      url: rootUrl,
      logo: toAbsoluteUrl(input.siteUrl, '/brand/logo-mark.png')
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': websiteId,
      name: 'ReadLab X',
      url: rootUrl,
      description: input.description,
      inLanguage: locale,
      publisher: { '@id': organizationId }
    }
  ];

  if (isProjectsPath(input.pathname)) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: input.title,
      description: input.description,
      url: canonical,
      inLanguage: locale,
      isPartOf: { '@id': websiteId }
    });
  }

  return {
    canonical,
    alternates,
    ogLocale: currentMeta.ogLocale,
    themeColor: '#f8fbf5',
    ogImage: toAbsoluteUrl(input.siteUrl, '/brand/logo-lockup.png'),
    jsonLd
  };
}
