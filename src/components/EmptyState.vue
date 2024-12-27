<script setup>
import { useSlots } from 'vue';

defineProps({
    image: String,
    imageProps: Object,
    heading: String,
    title: String,
    text: String
})

let slots = useSlots();

</script>
<template>
    <div class="flex flex-col items-center p-8">

        <slot v-if="slots.media" name="media"></slot>
        <img class="mb-2" v-bind="imageProps" v-else-if="image" :src="image">

        <div v-if="slots.heading || heading">
            <slot v-if="slots.heading" name="heading"></slot>
            <div class="text-5xl font-medium" v-else-if="heading">{{ heading  }}</div>
        </div>

        <div v-if="slots.title || title">
            <slot v-if="slots.title" name="title"></slot>
            <div class="text-2xl font-bold" v-else-if="title">{{ title  }}</div>
        </div>

        <div v-if="slots.text || text">
            <slot v-if="slots.text" name="text"></slot>
            <div v-else-if="text">{{ text  }}</div>
        </div>

        
    </div>
</template>