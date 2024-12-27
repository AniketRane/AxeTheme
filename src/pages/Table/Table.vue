<script setup>
import { ref } from "vue";

import SimpleTableCode from "@/pages/Table/SimpleTable.vue?raw";
import SimpleTable from "@/pages/Table/SimpleTable.vue";

import EmptyTableCode from "@/pages/Table/EmptyTable.vue?raw";
import EmptyTable from "@/pages/Table/EmptyTable.vue";

const tab1 = ref('first');

</script>
<template>
    
    <div class="content">

        <section-title>
            <template #title>
                <h3 class="text-3xl font-bold dark:text-white">Table</h3>
            </template>
            <template #aside></template>
        </section-title>
        
        <h3 class="text-2xl dark:text-white mt-10">Simple table</h3>

        <SimpleTable class="mt-6"/>

        <CodeBlock class="mt-6" :collapsible="true" :code="SimpleTableCode"/>

        <h3 class="text-2xl dark:text-white mt-10">Empty table</h3>

        <EmptyTable class="mt-6"/>

        <CodeBlock class="mt-6" :collapsible="true" :code="EmptyTableCode"/>

    </div>

</template>