<template>
    <div>
        
        <div class="codeblock-holder overflow-hidden" :class="{ 'collapsible': collapsible,'collapsed': collapsed }">
            <VCodeBlock
                :code="code"
                highlightjs
                lang="javascript"
                theme="neon-bunny"/>
        </div>
        
        <button v-if="collapsible" @click="collapsed = !collapsed" class="bg-gray-300 dark:bg-[#22354e] dark:text-white text-center w-full py-2 rounded-b-lg">
            {{ collapsed ? 'Expand code' : 'Collapse code' }}
        </button>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    collapsible: {
        type: Boolean,
        default: false
    }
});
const collapsed = ref(true);
</script>
<style lang="scss">
.codeblock-holder {
    pre {
        margin-bottom: 0px !important;
    }
    &.collapsible {

        position: relative;

        pre {
            border-bottom-left-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
        }
        &.collapsed {
            height: 200px;
            &::after {
                content: "";
                position: absolute;
                width: 100%;
                background: linear-gradient(0deg, black, transparent);
                height: 60px;
                left: 0;
                bottom: 0;
                z-index: 1;
            }
        }
        
    }
}
</style>