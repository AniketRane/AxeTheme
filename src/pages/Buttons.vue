<script setup>
import DefaultButton from "./Button/DefaultButton.vue";
import DefaultButtonCode from "./Button/DefaultButton.vue?raw";

import ButtonOutlined from "./Button/ButtonOutlined.vue";
import ButtonOutlinedCode from "./Button/ButtonOutlined.vue?raw";

import ButtonLoading from "./Button/ButtonLoading.vue";
import ButtonLoadingCode from "./Button/ButtonLoading.vue?raw";

</script>
<template>
    <div class="content">

        <section-title>
            <template #title>
                <h3 class="text-3xl font-bold dark:text-white">Buttons</h3>
            </template>
            <template #aside></template>
        </section-title>

        <div>
            
            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Default buttons</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <DefaultButton/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :code="DefaultButtonCode" collapsible/>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Outlined buttons</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <ButtonOutlined/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :code="ButtonOutlinedCode" collapsible/>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Loading buttons</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <ButtonLoading/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :code="ButtonLoadingCode" collapsible/>
                    </div>
                </div>
            </div>

        </div>
        
        <!-- <h3 class="text-2xl dark:text-white mt-10">Default button styling</h3>

        <div class="border rounded-lg p-8 mt-6 flex gap-4">
            <ax-button>Default</ax-button>
            <ax-button primary>Primary</ax-button>
            <ax-button success>Success</ax-button>
            <ax-button danger>Danger</ax-button>
            <ax-button warning>Warning</ax-button>
        </div>

        <h3 class="text-2xl dark:text-white mt-10">Outlined button styling</h3>

        <div class="border rounded-lg p-8 mt-6 flex gap-4">
            <ax-button outlined>Default</ax-button>
            <ax-button outlined primary>Primary</ax-button>
            <ax-button outlined success>Success</ax-button>
            <ax-button outlined danger>Danger</ax-button>
            <ax-button outlined warning>Warning</ax-button>
        </div>

        <h3 class="text-2xl dark:text-white mt-10">Disabled button styling</h3>

        <div class="border rounded-lg p-8 mt-6 flex gap-4">
            <ax-button disabled>Default</ax-button>
            <ax-button disabled primary>Primary</ax-button>
            <ax-button disabled success>Success</ax-button>
            <ax-button disabled danger>Danger</ax-button>
            <ax-button disabled warning>Warning</ax-button>
        </div>

        <h3 class="text-2xl dark:text-white mt-10">Loading button styling</h3>

        <div class="border rounded-lg p-8 mt-6 flex gap-4">
            <ax-button loading>Default</ax-button>
            <ax-button loading primary>Primary</ax-button>
            <ax-button loading success>Success</ax-button>
            <ax-button loading danger>Danger</ax-button>
            <ax-button loading warning>Warning</ax-button>
        </div>

        <h3 class="text-2xl dark:text-white mt-10">Button Sizes</h3>

        <div class="border rounded-lg p-8 mt-6 flex items-center gap-4">
            <ax-button size="xs">Extra Small</ax-button>
            <ax-button size="sm">Small</ax-button>
            <ax-button size="md">Default</ax-button>
            <ax-button size="lg">Large</ax-button>
            <ax-button size="xl">Extra Large</ax-button>
            
        </div> -->


    </div>
</template>