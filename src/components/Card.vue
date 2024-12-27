<script setup>
import { twMerge } from 'tailwind-merge'
import { computed, ref, useSlots } from 'vue';

const slots = useSlots()

let props = defineProps({
    title: String,
    flat: Boolean,
    loading: Boolean,
    image: String,
    image_height: {
        type: Number,
        default: 200
    }
});

const cardClassComputed = computed(() => {
    let value = "relative bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
    if(!props.flat) {
        value = twMerge(value, 'shadow border border-gray-200');
    }
    return value;
});

</script>
<template>
    <div :class="cardClassComputed">

        <div v-if="loading" class="h-full w-full absolute flex items-center justify-center bg-white/50 dark:bg-black/50">
            <div class="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-primary-600 rounded-full dark:text-primary-500" role="status" aria-label="loading">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        
        

        <div v-if="slots.header" class="bg-gray-100 py-3 px-4 md:py-4 md:px-5 border-b dark:bg-gray-700 dark:border-gray-700 text-gray-500 dark:text-gray-500">
            <slot name="header"></slot>
        </div>

        <div v-if="slots.image || image">
            <slot v-if="slots.image" name="image"></slot>
            <img v-if="image" class="w-full object-cover" :src="image" :style="{ height: image_height + 'px' }">
        </div>

        <slot v-if="slots.media" name="media"></slot>        

        <div class="p-5">
            
            <slot v-if="slots.title" name="title"/>
            <div v-else-if="title" class="mb-1 text-lg font-bold text-gray-700 dark:text-gray-400">
                {{ title }}
            </div>

            <div v-if="slots.subtitle" class="mb-2 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                <slot name="subtitle"/>
            </div>
            <div class="font-normal text-gray-700 dark:text-gray-400">
                <slot />
            </div>
            <div v-if="slots.actions" class="mt-3">
                <slot name="actions"/>
            </div>
        </div>
        <div v-if="slots.footer" class="bg-gray-100 py-3 px-4 md:py-4 md:px-5 border-t dark:bg-gray-700 dark:border-gray-700 text-gray-500 dark:text-gray-500">
            <slot name="footer"></slot>
        </div>
        
    </div>
</template>
