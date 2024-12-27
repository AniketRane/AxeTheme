<template>
    <div
      class="ax-button-group inline-flex rounded-md shadow-sm"
      role="group"
    >
      <slot />
    </div>
  </template>
  
  <style>
  .ax-button-group > button {
    @apply rounded-none;
  }
  .ax-button-group > button:first-child {
    @apply rounded-l-lg;
    @apply border-r-0;
  }
  .ax-button-group > button:last-child {
    @apply rounded-r-lg;
  }

  .ax-button-group > button:not(:last-child):not(:first-child) {
    @apply border-r-0;
  }

  .ax-button-group > button:focus {
    z-index: 10;
  }

  </style>
  