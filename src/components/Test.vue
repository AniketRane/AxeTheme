<template>
    <div class="w-64 h-full bg-gray-800 text-white">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <div @click="toggle(item)" class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-700">
            <router-link :to="item.path" class="block">
              {{ item.name }}
            </router-link>
            <span v-if="item.children">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isExpanded(item) ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'" />
              </svg>
            </span>
          </div>
          <ul v-if="item.children && isExpanded(item)" class="pl-4">
            <li v-for="subItem in item.children" :key="subItem.name">
              <router-link :to="subItem.path" class="block px-4 py-2 hover:bg-gray-700">
                {{ subItem.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  
//   const route = useRoute();

  const route = {
    path: '/parent1/child1'
  }
  
  const menuItems = ref([
    { name: 'Home', path: '/' },
    {
      name: 'Parent 1',
      path: '/parent1',
      children: [
        { name: 'Child 1-1', path: '/parent1/child1' },
        { name: 'Child 1-2', path: '/parent1/child2' },
      ],
    },
    {
      name: 'Parent 2',
      path: '/parent2',
      children: [
        { name: 'Child 2-1', path: '/parent2/child1' },
        { name: 'Child 2-2', path: '/parent2/child2' },
      ],
    },
  ]);
  
  const expandedItems = ref(new Set());
  
  const toggle = (item) => {
    if (expandedItems.value.has(item.name)) {
      expandedItems.value.delete(item.name);
    } else {
      expandedItems.value.add(item.name);
    }
  };
  
  const isExpanded = (item) => {
    return expandedItems.value.has(item.name);
  };
  
  const expandParentItems = () => {
    menuItems.value.forEach((item) => {
      if (item.children) {
        item.children.forEach((subItem) => {
          if (route.path.startsWith(subItem.path)) {
            expandedItems.value.add(item.name);
          }
        });
      }
    });
  };
  
  watch(route, expandParentItems, { immediate: true });
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>
  