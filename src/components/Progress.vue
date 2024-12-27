<script setup>
import { computed } from "vue";

const progress = defineModel({
    default: 50
});

const props = defineProps({
    height: {
        type: String,
        default: '.3rem'
    },
    colorClass: {
        type: String,
        default: null
    },
    success: Boolean,
    danger: Boolean,
    warning: Boolean,
});

const progressStyle = computed(() => {
    return {
        width: `${ progress.value }%`,
        height: props.height
    }
})

const bgStyle = computed(() => {
    return {
        height: props.height
    }
})

const getBackgroundClass = (variant) => {
    if(props.colorClass) return props.colorClass;
    switch(variant) {
        case "default":
            return "bg-primary-600 shadow-primary-500/30";
        case "green":
            return "bg-green-600 shadow-green-500/30";
        case "red":
            return "bg-red-600 shadow-red-500/30";
        case "yellow":
            return "bg-yellow-600 shadow-yellow-500/30";
    }
}

const progressClass = computed(() => {
    let variant = 'default';
    if(props.success) variant = "green";
    else if(props.danger) variant = "red";
    else if(props.warning) variant = "yellow";
    
    let baseClass = "shadow-[0_.125rem_.375rem_0_rgba(0,0,0)] rounded-full";
    let backgroundClass = getBackgroundClass(variant);

    return [
        baseClass,
        backgroundClass
    ];
});

</script>
<template>
    
    <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700" :style="bgStyle">
        <div :class="progressClass" :style="progressStyle"></div>
    </div>

</template>