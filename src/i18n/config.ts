export const defaultLocale = 'zh-CN' as const;

export const locales = [defaultLocale, 'en'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  'zh-CN': '简体中文',
  en: 'English'
};

export const localePathPrefixes: Record<Locale, string> = {
  'zh-CN': '/',
  en: '/en/'
};

export const localeMeta: Record<Locale, { ogLocale: string; direction: 'ltr' }> = {
  'zh-CN': {
    ogLocale: 'zh_CN',
    direction: 'ltr'
  },
  en: {
    ogLocale: 'en_US',
    direction: 'ltr'
  }
};
