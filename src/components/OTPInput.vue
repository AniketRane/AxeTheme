<template>
  <div class="flex gap-2">
    <ax-input-2
      v-for="(input, index) in otp"
      :key="index"
      v-model="otp[index]"
      :ref="el => inputRefs[index] = el"
      @input="onInput(index)"
      @keydown.backspace="onBackspace(index, $event)"
      type="text"
      maxlength="1"
      class="text-center"
      v-bind="inputProps"
    />
  </div>
</template>

<script setup>
  
  import { nextTick, ref, watch } from 'vue';

  const props = defineProps({
    length: {
      type: Number,
      required: true
    },
    inputProps: {
      type: Object,
      default: {}
    }
  })

  const emit = defineEmits([
    'update:otp'
  ]);

  const otp = ref(Array(props.length).fill(''));
  const inputRefs = ref([]);

  const onInput = async (index) => {
    if (otp.value[index].length > 0 && index < props.length - 1) {
      await nextTick();
      focusInput(index + 1);
    }
    emit('update:otp', otp.value.join(''));
  };

  const onBackspace = async (index, event) => {
    if (event.key === 'Backspace' && otp.value[index] === '' && index > 0) {
      await nextTick();
      focusInput(index - 1);
    }
  };

  const focusInput = (index) => {
    if (inputRefs.value[index]) {
      inputRefs.value[index].input.focus();
      inputRefs.value[index].input.select();
    }
  };

  watch(() => props.length, (newLength) => {
    otp.value = Array(newLength).fill('');
    inputRefs.value = [];
  });

</script>