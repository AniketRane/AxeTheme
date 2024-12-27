<template>
    <li>
      <div class="flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
        <router-link :to="item.path" class="block grow px-4 py-2 flex">
          <component v-if="item.icon" :is="item.icon" height="26px" :stroke="1.2" class="mr-2" /> {{ item.name }}
        </router-link>
        <span class="px-3 py-2" v-if="item.children" @click.prevent="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isExpanded ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'" />
          </svg>
        </span>
      </div>
      <ul v-if="item.children && isExpanded" class="pl-4">
        <SidebarItem v-for="subItem in item.children" :key="subItem.name" :item="subItem" :expanded-items="expandedItems" />
      </ul>
    </li>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const props = defineProps({
    item: Object,
    expandedItems: Set,
  });
  
  const route = useRoute();
  
  const isExpanded = computed(() => props.expandedItems.has(props.item.name));
  
  const toggle = () => {
    if (props.expandedItems.has(props.item.name)) {
      props.expandedItems.delete(props.item.name);
    } else {
      props.expandedItems.add(props.item.name);
    }
  };
  
</script>
