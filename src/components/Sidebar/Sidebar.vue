<template>
  <div class="w-64 h-full text-gray-800 dark:text-gray-400">
    <ul>
      <SidebarItem v-for="item in items" :key="item.name" :item="item" :expanded-items="expandedItems" />
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import SidebarItem from './SidebarItem.vue';

const route = useRoute();

const props = defineProps({
  items: {
    type: Array,
    default: []
  }
})
const expandedItems = ref(new Set());

const expandParentItems = () => {
  const expandRecursively = (items) => {
    items.forEach((item) => {
      if (item.children) {
        item.children.forEach((subItem) => {
          if (route.path.startsWith(subItem.path)) {
            expandedItems.value.add(item.name);
            expandRecursively([subItem]);
          }
        });
      }
    });
  };
  expandRecursively(props.items);
};

watch(route, expandParentItems, { immediate: true });
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
