<script setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { IoLogoGithub } from 'oh-vue-icons/icons';
addIcons(IoLogoGithub);
</script>

<template>
  <footer class="footer">
    <span class="footer__text">© 2025 by Eric Elric</span>
    <a class="footer__link" href="#" title="View this project on GitHub"
      ><OhVueIcon name="io-logo-github" scale="1"
    /></a>
  </footer>
</template>

<style scoped>
.footer {
  align-self: flex-end;
  font-family: monospace;
  justify-self: center;
  margin-bottom: 0.5rem;
}

.footer__text {
  margin-right: 0.5rem;
}

.footer__link {
  color: var(--text-color);
}

.footer__link:hover {
  color: var(--highlight-primary);
}
</style>
