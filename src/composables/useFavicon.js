import { onMounted } from 'vue';

export function useFavicon() {
  const updateFavicon = () => {
    const favicon = document.getElementById('favicon');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    favicon.href = prefersDark ? '/favicon-dark.svg' : '/favicon-light.svg';
  };

  onMounted(() => {
    updateFavicon();
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', updateFavicon);
  });
}
