<script setup>
import { computed, ref, useAttrs, useSlots, watch } from "vue"
import x from "@/assets/x.svg?component";
import eye from "@/assets/eye.svg?component";
import eyeOff from "@/assets/eye-off.svg?component";

let props = defineProps({
    label: String,
    corner_hint: String,
    hint: String,
    validationStatus: String,
    outlined: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    togglePassword: Boolean,
    error: Boolean,
    errorMessages: String
})

const maskPassword = ref(true);

defineOptions({
  inheritAttrs: false
})

const slots = useSlots();
const model = defineModel();
const input = ref(null)

defineExpose({
    input
});

const clearInput = () => {
    model.value = "";
    input.value.focus()
}

watch(maskPassword, async(value) => {
    input.value.type = value ? "password" : "text";
});

const toggleInput = () => {
    maskPassword.value = !maskPassword.value;
}

const getBorderClass = (type) => {
    switch(type) {
        case "default":
            return "border border-gray-200 dark:border-gray-600 has-[:focus]:border-primary-500";
            break;
        case "error":
            return "border border-red-400 dark:border-red-700 has-[:focus]:border-red-500";
            break;
        case "success":
            break;
    }
}

const getFocusClass = (type) => {
    switch(type) {
        case "default":
            return "has-[:focus]:ring-1 has-[:focus]:ring-primary-500 dark:has-[:focus]:ring-neutral-600";
            break;
        case "error":
            return "has-[:focus]:ring-1 has-[:focus]:ring-red-500 dark:has-[:focus]:ring-red-600";
            break;
        case "success":
            break;
    }
}

const classComputed = computed(() => {

    let type = "default";
    
    if(props?.errorMessages?.length > 0) type = "error"; 

    let backgroundClass = "bg-gray-100 dark:bg-gray-700";
    let borderClass = getBorderClass(type);
    let focusClass = getFocusClass(type);
    let otherClass = "inline-flex items-center rounded-lg";

    return [
        backgroundClass, borderClass, focusClass, otherClass
    ];

});

</script>
<template>

    <div class="input-grid" :class="{ 'pointer-events-none opacity-50' : disabled }">
        
        <div v-if="label || corner_hint" class="flex justify-between items-center"  :style="{ gridArea: 'label' }">
            <label class="block text-sm font-medium mb-2 dark:text-white">{{ label }}</label>
            <span class="block mb-2 text-sm text-gray-500 dark:text-neutral-500">{{ corner_hint }}</span>
        </div>

        <span class="pt-[0.5rem] mr-3" v-if="slots.prepend" :style="{ gridArea: 'prepend' }">
            <slot name="prepend"></slot>
        </span>

        <div :class="classComputed" :style="{ gridArea: 'control' }">
            <span class="ml-3" v-if="slots.prependInner">
                <slot name="prependInner"></slot>
            </span>
            <input ref="input" v-model="model" class="bg-transparent focus:ring-0 border-0 w-full" v-bind="$attrs">
            <span class="mr-3" v-if="slots.appendInner">
                <slot name="appendInner"></slot>
            </span>
            <span class="mr-3 flex items-center" v-if="clearable">
                <button class="disabled:cursor-not-allowed disabled:opacity-50" @click.prevent="clearInput" :disabled="model && model.length == 0">
                    <x/>
                </button>
            </span>
        </div>

        <div class="pt-[0.5rem] ml-3" v-if="slots.append || togglePassword" :style="{ gridArea: 'append' }">
            <span v-if="slots.append">
                <slot name="append"></slot>
            </span>
            <button v-if="togglePassword" @click="toggleInput">
                <eye v-if="maskPassword"/>
                <eyeOff v-else/>
            </button>
        </div>

        <div :style="{ gridArea: 'messages' }">
            <p v-if="errorMessages" class="mt-2 text-sm text-red-500 dark:text-red-500" >{{ errorMessages }}</p>
            <p v-else-if="hint" class="mt-2 text-sm text-gray-500 dark:text-neutral-500" >{{ hint }}</p>
        </div>

        

    </div>


</template>
<style>
.input-grid{
    display: grid;
    grid-template-areas:
        "a label b"
        "prepend control append"
        "c messages d";
    grid-template-columns: max-content minmax(0, 1fr) max-content;
    grid-template-rows: auto auto;
}
</style>