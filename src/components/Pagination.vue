<script setup>
import { computed, defineComponent } from 'vue';
  
const emit = defineEmits(['page-change'])

const currentPage = defineModel({ default: 1 });

const props = defineProps({
  totalPages: {
    type: Number,
    default: 1
  },
  siblingCount: {
    type: Number,
    default: 1
  }
})

const visiblePages = computed(() => {
  const startPage = Math.max(1, currentPage.value - props.siblingCount);
  const endPage = Math.min(props.totalPages, currentPage.value + props.siblingCount);
  let pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  if (pages[0] !== 1) {
    pages = [1, '...', ...pages];
  }
  if (pages[pages.length - 1] !== props.totalPages) {
    pages = [...pages, '...', props.totalPages];
  }
  return pages;
});

const changePage = (page) => {
  if (page !== currentPage.value && page > 0 && page <= props.totalPages) {
    // emit('page-change', page);
    currentPage.value = page;
  }
};
</script>

<template>
  <ax-button-group>
    <ax-button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
      Previous
    </ax-button>
    <ax-button v-for="page in visiblePages" :primary="currentPage == page" :key="page" @click="changePage(page)">{{ page }}</ax-button>
    <ax-button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
      Next
    </ax-button>
  </ax-button-group>    
</template>
  
<style scoped>
.disabled\:opacity-50:disabled {
  opacity: 0.5;
}
</style>
  