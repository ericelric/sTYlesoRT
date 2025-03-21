<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { OhVueIcon } from 'oh-vue-icons';

const props = defineProps({
  icon: String,
  ariaLabel: String,
  variant: String,
  animationType: {
    type: String,
    default: 'none',
    validator: (value) => ['none', 'shake', 'spin'].includes(value),
  },
});

const emit = defineEmits(['click']);
const isClicked = ref(false);

const handleClick = () => {
  isClicked.value = true;
  emit('click');

  setTimeout(() => {
    isClicked.value = false;
  }, 500);
};
</script>

<template>
  <button
    :class="[
      'button',
      variant ? `button--${variant}` : '',
      {
        'button--shake': isClicked && animationType === 'shake',
        'button--spin': isClicked && animationType === 'spin',
      },
    ]"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="handleClick"
  >
    <OhVueIcon :name="icon" scale="1.5" />
  </button>
</template>

<style scoped>
.button {
  align-items: center;
  background: var(--highlight-secondary);
  border-radius: 0.2em;
  border: none;
  box-shadow: 0.18em 0.18em 0px 0px var(--shadow);
  color: var(--button-text);
  cursor: pointer;
  display: inline-flex;
  font-size: 1em;
  height: 3em;
  justify-content: center;
  width: 3em;
}

.button:hover {
  background: var(--hover);
  color: #121212;
}

.button--primary {
  background: var(--highlight-primary);
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(4px);
  }
  75% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.button--shake {
  animation: shake 0.5s ease;
}

.button--spin {
  animation: spin 0.5s ease;
}
</style>
