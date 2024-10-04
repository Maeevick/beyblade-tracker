import { browser } from '$app/environment';
import { init, register, waitLocale } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('fr', () => import('./fr.json'));

init({
	fallbackLocale: 'fr',
	initialLocale: browser ? window.navigator.language : 'fr'
});
export const i18nReady = waitLocale();
