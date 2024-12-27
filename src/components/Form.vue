<script setup>
import { useSlots } from 'vue';

let slots = useSlots();

console.log(slots)

</script>
<template>
    <form>
        <slot></slot>
    </form>
</template>