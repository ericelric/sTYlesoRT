<script setup>
import { ref, computed, nextTick, onMounted, defineEmits } from 'vue';
import { addIcons } from 'oh-vue-icons';
import { PrPaperclip, MdDoneRound } from 'oh-vue-icons/icons';
import { useCopyToClipboard } from '../composables/useCopyToClipboard';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import Button from './Button.vue';

hljs.registerLanguage('css', css);
addIcons(PrPaperclip, MdDoneRound);

const inputCSS = ref('');
const outputCSS = ref('');
const { copied, copy } = useCopyToClipboard(outputCSS);
const emit = defineEmits(['copy']);

const highlightedCSS = computed(() => {
  return hljs.highlight(outputCSS.value, { language: 'css' }).value;
});

const formatCSS = () => {
  outputCSS.value = inputCSS.value.replace(
    /([^{]+)\{([^}]+)\}/g,
    (match, selector, properties) => {
      const sortedProperties = properties
        .split(';')
        .map((prop) => prop.trim())
        .filter((prop) => prop.length > 0)
        .sort((a, b) => a.localeCompare(b))
        .join(';\n  ');
      return `${selector}{\n  ${sortedProperties};\n}`;
    }
  );

  nextTick(() => hljs.highlightAll());
};

onMounted(() => {
  hljs.highlightAll();
});

defineExpose({
  formatCSS,
});
</script>

<template>
  <div class="editor__wrapper">
    <div class="editor">
      <textarea
        class="editor__input"
        v-model="inputCSS"
        placeholder="Enter your CSS here"
      ></textarea>

      <div class="editor__output">
        <div class="editor__copy">
          <Button
            :icon="copied ? 'md-done-round' : 'pr-paperclip'"
            aria-label="Copy to clipboard"
            variant=""
            @click="copy"
          />
        </div>

        <pre
          class="code-block"
        ><code class="css" v-html="highlightedCSS"></code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editor__wrapper {
  display: flex;
  justify-content: center;
}

.editor {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 80%;
  width: 100%;
}

.editor__input,
.editor__output {
  background: var(--background);
  border-radius: 5px;
  border: 2px solid var(--highlight-secondary);
  color: var(--input-text);
  field-sizing: content;
  flex: 1;
  line-height: 1.5;
  min-height: calc(40vw - 2rem);
  padding: 1rem;
  resize: none;
  text-wrap: auto;
  word-break: break-all;
}

.editor__input {
  line-height: 1.8;
}

.editor__input:focus {
  outline-color: var(--highlight-primary);
}

.editor__input::placeholder {
  color: var(--input-text);
}

.editor__output {
  overflow: hidden;
  position: relative;
}

.editor__copy {
  font-size: 0.75rem;
  position: absolute;
  right: 5px;
  top: 4px;
}

@media (min-width: 60rem) {
  .editor {
    flex-direction: row;
    gap: 4rem;
  }
}
</style>
