<script setup>

import DefaultInput from "./DefaultInput.vue";
import DefaultInputCode from "./DefaultInput.vue?raw";

</script>
<template>
    <div class="content">

        <section-title>
            <template #title>
                <h3 class="text-3xl font-bold dark:text-white">Input</h3>
            </template>
            <template #aside></template>
        </section-title>

        <div>
            
            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Default Input</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">

                        <ax-card>
                            <DefaultInput/>
                        </ax-card>

                        
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :code="DefaultInputCode"/>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>