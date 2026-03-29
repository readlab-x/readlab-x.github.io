export const themeBootstrapScript = String.raw`
(() => {
  const storageKey = 'readlabx-theme';
  const root = document.documentElement;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const getStoredPreference = () => {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' || value === 'system'
        ? value
        : 'system';
    } catch {
      return 'system';
    }
  };

  const resolveTheme = (preference) => {
    if (preference === 'dark') return 'dark';
    if (preference === 'light') return 'light';
    return media.matches ? 'dark' : 'light';
  };

  const syncThemeMeta = (theme) => {
    if (!themeMeta) return;
    themeMeta.setAttribute('content', theme === 'dark' ? '#051937' : '#f8fbf5');
  };

  const syncThemeButtons = (preference) => {
    document.querySelectorAll('[data-theme-choice]').forEach((button) => {
      const isActive = button instanceof HTMLElement && button.dataset.themeChoice === preference;
      if (button instanceof HTMLElement) {
        button.dataset.active = String(isActive);
        button.setAttribute('aria-pressed', String(isActive));
      }
    });

    document.querySelectorAll('[data-theme-select]').forEach((select) => {
      if (select instanceof HTMLSelectElement) {
        select.value = preference;
      }
    });
  };

  const applyTheme = (preference) => {
    const theme = resolveTheme(preference);
    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    root.style.colorScheme = theme;
    syncThemeMeta(theme);
    syncThemeButtons(preference);
  };

  const storedPreference = getStoredPreference();
  applyTheme(storedPreference);

  const handlePreferenceChange = (event) => {
    const target = event.target instanceof Element
      ? event.target.closest('[data-theme-choice]')
      : null;

    if (!(target instanceof HTMLElement)) return;

    const preference = target.dataset.themeChoice;
    if (preference !== 'light' && preference !== 'dark' && preference !== 'system') {
      return;
    }

    try {
      window.localStorage.setItem(storageKey, preference);
    } catch {
      // Ignore storage failures and keep the current session state.
    }

    applyTheme(preference);
  };

  document.addEventListener('click', handlePreferenceChange);
  window.addEventListener('readlabx:theme-change', (event) => {
    const preference = event instanceof CustomEvent ? event.detail : null;
    if (preference !== 'light' && preference !== 'dark' && preference !== 'system') {
      return;
    }

    applyTheme(preference);
  });

  const handleSystemThemeChange = () => {
    if (root.dataset.themePreference === 'system') {
      applyTheme('system');
    }
  };

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', handleSystemThemeChange);
  } else if (typeof media.addListener === 'function') {
    media.addListener(handleSystemThemeChange);
  }
})();
`;
