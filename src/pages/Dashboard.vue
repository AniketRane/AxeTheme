<script setup>
import { IconChevronRight } from '@tabler/icons-vue';
</script>
<template>
    <div class="p-10">
        <div class="grid grid-cols-2 gap-10">
            <ax-card class="col-span-2 md:col-span-1 cursor-pointer" @click="$router.push({ path: '/dashboard/analytics' })">
                <div class="flex items-center">
                    <div class="grow">Analytics Dashboard</div>
                    <IconChevronRight height="20px"/>
                </div>
            </ax-card>
        </div>
    </div>
</template>