export const themeBootstrapScript = String.raw`
(() => {
  const storageKey = 'readlabx-theme';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';

  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark' || stored === 'system') preference = stored;
  } catch {}

  const theme = preference === 'dark' || (preference === 'system' && media.matches) ? 'dark' : 'light';
  root.dataset.theme = theme;
  root.dataset.themePreference = preference;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
})();
`;
