<script setup>
import { onMounted, ref, computed, nextTick } from 'vue';
import hljs from 'highlight.js/lib/core';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Formatter from './components/Formatter.vue';
import { useFavicon } from './composables/useFavicon';
import { useDarkMode } from './composables/useDarkMode';
useFavicon();

const { darkMode, toggleTheme } = useDarkMode();

const cssFormatterRef = ref(null);

const formatCSS = () => {
  if (cssFormatterRef.value) {
    cssFormatterRef.value.formatCSS();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

onMounted(() => {
  hljs.highlightAll();
});
</script>

<template>
  <Header
    :darkMode="darkMode"
    @toggleTheme="toggleTheme"
    @formatCSS="formatCSS"
  />

  <Formatter ref="cssFormatterRef" />

  <Footer />
</template>
