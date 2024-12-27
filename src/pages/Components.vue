<script setup>
import { IconChevronRight } from '@tabler/icons-vue';

const links = [
    {
        title: 'Button',
        link: '/components/button',
    },
    {
        title: 'Card',
        link: '/components/card',
    },
    {
        title: 'Table',
        link: '/components/table',
    },
    {
        title: 'Input',
        link: '/components/input',
    },
];

</script>
<template>
    <div class="p-10">
        <div class="grid grid-cols-2 gap-10">
            <ax-card v-for="(link, k) in links" :key="k" class="col-span-2 md:col-span-1 cursor-pointer" @click="$router.push({ path: link.link })">
                <div class="flex items-center">
                    <div class="grow">{{ link.title }}</div>
                    <IconChevronRight height="20px"/>
                </div>
            </ax-card>
        </div>
    </div>
</template>