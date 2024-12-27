<script setup>
import SimpleCard from "./Card/SimpleCard.vue";
import SimpleCardCode from "./Card/SimpleCard.vue?raw";

import CardActions from "./Card/CardActions.vue";
import CardActionsCode from "./Card/CardActions.vue?raw";

import CardHeaderFooter from "./Card/CardHeaderFooter.vue";
import CardHeaderFooterCode from "./Card/CardHeaderFooter.vue?raw";

import CardFlat from "./Card/CardFlat.vue";
import CardFlatCode from "./Card/CardFlat.vue?raw";

import CardImage from "./Card/CardImage.vue";
import CardImageCode from "./Card/CardImage.vue?raw";

</script>
<template>
    <div class="content">
        
        <section-title>
            <template #title>
                <h3 class="text-3xl font-bold dark:text-white">Card</h3>
            </template>
            <template #aside></template>
        </section-title>

        <div>
            
            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Default card</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <SimpleCard/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :code="SimpleCardCode"/>
                    </div>
                </div>
            </div>


            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Card Actions</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <CardActions/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :collapsible="true" :code="CardActionsCode"/>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Card Header & Footer</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <CardHeaderFooter/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :collapsible="true" :code="CardHeaderFooterCode"/>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Flat Card</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <CardFlat/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :code="CardFlatCode"/>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h3 class="text-2xl dark:text-white mb-6">Card Image</h3>
                <div class="grid grid-cols-2 gap-10">
                    <div class="col-span-2 md:col-span-1">
                        <CardImage/>
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <CodeBlock :collapsible="true" :code="CardImageCode"/>
                    </div>
                </div>
            </div>
            







            

            <!-- <div class="col-span-4">
                <h3 class="text-2xl dark:text-white mb-6">Default card</h3>
                <ax-card title="Noteworthy technology acquisitions 2021">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </ax-card>
            </div>

            <div class="col-span-4">
                <h3 class="text-2xl dark:text-white mb-6">Card with actions</h3>
                <ax-card title="Noteworthy technology acquisitions 2021">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    <template #actions>
                        <ax-button class="mr-2" primary>Save</ax-button>
                        <ax-button>Cancel</ax-button>
                    </template>
                </ax-card>
            </div>
            
            <div class="col-span-4">
                <h3 class="text-2xl dark:text-white mb-6">Card with header & footer</h3>
                <ax-card title="Noteworthy technology acquisitions 2021">
                    <template #header>
                        Card header
                    </template>
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    <template #footer>
                        Card footer
                    </template>
                </ax-card>
            </div>

            <div class="col-span-4">
                <h3 class="text-2xl dark:text-white mb-6">Card with image</h3>
                <ax-card 
                    image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                    title="Noteworthy technology acquisitions 2021">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    <template #actions>
                        <ax-button class="mr-2" primary>Save</ax-button>
                        <ax-button>Cancel</ax-button>
                    </template>
                    <template #footer>
                        <div class="text-xs">
                            21st January 2024, 8:30 AM
                        </div>
                    </template>
                </ax-card>
            </div>

            <div class="col-span-4">
                <h3 class="text-2xl dark:text-white mb-6">Flat card</h3>
                <ax-card flat title="Noteworthy technology acquisitions 2021">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </ax-card>
            </div> -->

        </div>

        

    </div>
</template>