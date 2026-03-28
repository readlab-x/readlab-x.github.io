import { defaultLocale, localeMeta, localePathPrefixes, type Locale, locales } from '../i18n/config';
import { enHomeMessages, type HomeMessages } from '../i18n/messages/en';
import { zhCNHomeMessages } from '../i18n/messages/zh-CN';

const homeMessagesByLocale: Record<Locale, HomeMessages> = {
  'zh-CN': zhCNHomeMessages,
  en: enHomeMessages
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : defaultLocale;
}

export function getHomeMessages(locale: Locale): HomeMessages {
  return homeMessagesByLocale[locale];
}

export function getLocalePath(locale: Locale): string {
  return localePathPrefixes[locale];
}

export function getLocalizedHref(locale: Locale, href: string): string {
  if (!href.startsWith('/')) {
    return href;
  }

  if (locale === defaultLocale) {
    return href;
  }

  const prefix = localePathPrefixes[locale].replace(/\/$/, '');
  return `${prefix}${href}`;
}

export function getLocaleMeta(locale: Locale) {
  return localeMeta[locale];
}

export function getLocalizedPath(locale: Locale, pathname: string): string {
  const relativePath = pathname.startsWith('/en') ? pathname.slice('/en'.length) || '/' : pathname;

  if (locale === defaultLocale) {
    return relativePath;
  }

  return relativePath === '/' ? localePathPrefixes[locale] : `/en${relativePath}`;
}

export function getLocaleAlternates(
  locale: Locale,
  pathname: string
): Array<{ hreflang: string; href: string }> {
  return locales.map((candidate) => ({
    hreflang: candidate === 'zh-CN' ? 'zh-CN' : 'en',
    href: getLocalizedPath(candidate, pathname)
  }));
}
