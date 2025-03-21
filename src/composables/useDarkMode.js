import { ref, watch, onMounted } from 'vue';

export function useDarkMode() {
  const darkMode = ref(
    localStorage.getItem('styleSortTheme') === 'dark' ||
      (!localStorage.getItem('styleSortTheme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  const applyTheme = () => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode.value ? 'dark' : 'light'
    );
  };

  const toggleTheme = () => {
    darkMode.value = !darkMode.value;
  };

  watch(darkMode, (newValue) => {
    localStorage.setItem('styleSortTheme', newValue ? 'dark' : 'light');
    applyTheme();
  });

  onMounted(() => {
    applyTheme();
  });

  return { darkMode, toggleTheme };
}
