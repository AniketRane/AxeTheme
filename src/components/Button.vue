<script setup>
import { computed, useAttrs, useSlots } from 'vue';
import { twMerge } from 'tailwind-merge';

const props = defineProps({
    
    primary: Boolean,
    success: Boolean,
    danger: Boolean,
    warning: Boolean,

    loading: Boolean,
    disabled: Boolean,
    outlined: Boolean,

    variant: {
        type: String,
        default: "default"
    },
    size: {
        type: String,
        default: "md"
    }
});
const slots = useSlots();
const attrs = useAttrs();

const classComputed = computed(() => {

    let variant = props.variant;

    if(props.primary) variant = "primary";
    if(props.success) variant = "green";
    if(props.danger) variant = "red";
    if(props.warning) variant = "yellow";

    let buttonClasses = {
        default: {
            default: 'text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700',
            primary: 'text-white bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg dark:bg-primary-600 focus:outline-none dark:focus:ring-primary-800',
            alternative: 'font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600',
            dark: 'text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700',
            light: 'text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700',
            green: 'focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800',
            red: 'focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:focus:ring-red-900',
            yellow: 'focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900',
            purple: 'focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900',
            pink: 'focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900',
        },
        hover: {
            default: 'hover:bg-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-700',
            primary: 'hover:bg-primary-800 dark:hover:bg-primary-700',
            alternative: 'hover:bg-gray-100 hover:text-primary-700 dark:hover:text-white dark:hover:bg-gray-700',
            dark: 'hover:bg-gray-900 dark:hover:bg-gray-700',
            light: 'hover:bg-gray-100 dark:hover:border-gray-600',
            green: 'hover:bg-green-800 dark:hover:bg-green-700',
            red: 'hover:bg-red-800 dark:hover:bg-red-700',
            yellow: 'hover:bg-yellow-500',
            purple: 'hover:bg-purple-800 dark:hover:bg-purple-700',
            pink: 'hover:bg-pink-800 dark:hover:bg-pink-700',
        },
    };

    let buttonOutlinedClasses = {
        default: {
            default: 'text-gray-900 bg-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
            dark: 'text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-800',
            primary: 'text-primary-700 border border-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:border-primary-500 dark:text-primary-500 dark:focus:ring-primary-800',
            green: 'text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800',
            purple: 'text-purple-700 border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:border-purple-400 dark:text-purple-400 dark:focus:ring-purple-900',
            pink: 'text-pink-700 border border-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm text-center dark:border-pink-400 dark:text-pink-400 dark:focus:ring-pink-900',
            red: 'text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900',
            yellow: 'text-yellow-400 border border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:border-yellow-300 dark:text-yellow-300 dark:focus:ring-yellow-900',
        },
        hover: {
            default: 'hover:bg-gray-100 dark:hover:bg-gray-700',
            dark: 'hover:text-white hover:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-600',
            primary: 'hover:text-white hover:bg-primary-800 dark:hover:text-white dark:hover:bg-primary-600',
            green: 'hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600',
            purple: 'hover:text-white hover:bg-purple-800 dark:hover:text-white dark:hover:bg-purple-500',
            pink: 'hover:text-white hover:bg-pink-800 dark:hover:text-white dark:hover:bg-pink-500',
            red: 'hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600',
            yellow: 'hover:text-white hover:bg-yellow-500 dark:hover:text-white dark:hover:bg-yellow-400',
        },
    }

    const sizeClasses = {
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-3 py-1.5',
        md: 'text-sm px-4 py-2',
        lg: 'text-base px-5 py-2.5',
        xl: 'text-base px-6 py-3'
    }

    return [
        props.outlined ? [
            buttonOutlinedClasses.default[variant],
            buttonOutlinedClasses.hover[variant],
        ] : [
            buttonClasses.default[variant],
            buttonClasses.hover[variant],
        ],
        sizeClasses[props.size],
        props.disabled && 'cursor-not-allowed opacity-50',
        'inline-flex items-center'
    ];
});


</script>

<template>



    <button v-bind="attrs" :class="classComputed">
        
        <ax-spinner v-if="loading" class="me-2" width="20" height="20"></ax-spinner>

        <span v-if="slots.append">
            <slot name="append"/>
        </span>
        <slot/>
        <span v-if="slots.prepend">
            <slot name="prepend"/>
        </span>
    </button>

</template>