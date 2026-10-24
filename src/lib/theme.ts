import { browser } from '$app/environment';

const DARK_THEME = 'voodoo-grape-dark';
const LIGHT_THEME = 'voodoo-grape-light';

const STORAGE_KEY = 'theme';

export function applyTheme(isDark: boolean) {
	if (!browser) return;

	const theme = isDark ? DARK_THEME : LIGHT_THEME;

	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem(STORAGE_KEY, theme);
}

export function getTheme(): boolean {
	if (!browser) return true;

	const saved = localStorage.getItem(STORAGE_KEY);

	if (saved === DARK_THEME) return true;
	if (saved === LIGHT_THEME) return false;

	return true;
}
