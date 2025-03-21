<script setup>
import { defineEmits, defineProps } from 'vue';
import { addIcons } from 'oh-vue-icons';
import Button from './Button.vue';
import {
  GiFairyWand,
  MdLightmodeOutlined,
  MdDarkmodeOutlined,
} from 'oh-vue-icons/icons';
addIcons(GiFairyWand, MdLightmodeOutlined, MdDarkmodeOutlined);

const emit = defineEmits(['toggleTheme', 'formatCSS']);
const props = defineProps({
  darkMode: Boolean,
});
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <div class="header__title">sTYlesoRT</div>
      <div class="header__subtitle">let your CSS flow in order</div>
    </div>

    <Button
      icon="gi-fairy-wand"
      aria-label="Format your CSS code"
      @click="emit('formatCSS')"
      variant="primary"
      animationType="spin"
    />

    <Button
      :icon="darkMode ? 'md-darkmode-outlined' : 'md-lightmode-outlined'"
      :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="emit('toggleTheme')"
      animationType="shake"
    />
  </header>
</template>

<style scoped>
.header {
  align-items: center;
  background-color: var(--background);
  border-bottom: 2px solid var(--border-color);
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr auto auto;
  height: 8rem;
  margin-bottom: 2rem;
  padding: 0 10vw;
  position: sticky;
  top: 0;
  z-index: 1;
}

.header__logo {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
}

.header__title {
  font-size: 1.25rem;
  font-weight: 700;
}

.header__subtitle {
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
}

@media (min-width: 32rem) {
  .header__logo {
    margin-right: 0;
  }

  .header__title {
    font-size: 1.5rem;
  }

  .header__subtitle {
    font-size: 0.875rem;
  }
}

@media (min-width: 40rem) {
  .header__title {
    font-size: 1.625rem;
  }

  .header__subtitle {
    font-size: 1rem;
  }
}
</style>
