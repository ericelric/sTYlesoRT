import { ref } from 'vue';

export function useCopyToClipboard(textToCopy) {
  const copied = ref(false);

  const copy = () => {
    navigator.clipboard.writeText(textToCopy.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 3000);
  };

  return {
    copied,
    copy,
  };
}
