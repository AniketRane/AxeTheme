<template>
    <div class="flex">
      <div
        :class="[
          'fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity lg:hidden',
          { 'opacity-0 pointer-events-none': !isSidebarOpen },
        ]"
        @click="toggleSidebar"
      ></div>
      <aside
        :class="[
          'fixed inset-y-0 left-0 transform lg:transform-none lg:static lg:inset-0 transition-transform duration-300 ease-in-out',
          { '-translate-x-full lg:translate-x-0': !isSidebarOpen, 'translate-x-0': isSidebarOpen },
        ]"
        class="w-64 bg-gray-800 text-white p-4"
      >
        <h2 class="text-2xl font-semibold mb-4">Sidebar</h2>
        <nav>
          <ul>
            <li class="mb-2"><a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Home</a></li>
            <li class="mb-2"><a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">About</a></li>
            <li class="mb-2"><a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Services</a></li>
            <li class="mb-2"><a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Contact</a></li>
          </ul>
        </nav>
      </aside>
      <div class="flex-1 ml-64 lg:ml-0">
        <button
          @click="toggleSidebar"
          class="p-4 lg:hidden text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <main class="p-4">
          <slot></slot>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSidebarOpen = ref(false);
  
  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
  }
  </script>
  
  <style scoped>
  @media (min-width: 1024px) {
    .lg\\:translate-x-0 {
      transform: translateX(0);
    }
  }
  </style>
  