<template>
  <div>
    <div>
      <input ref="inputRef" type="text" />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const inputRef = ref(null);
    return {inputRef};
  }
})
</script>