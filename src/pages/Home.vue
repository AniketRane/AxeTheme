<script setup>

    import { IconToggleRight, IconHome, IconDashboard } from '@tabler/icons-vue';

    const cols = ['Make', 'Model', 'Year', 'Color'];
    const rows = [
        ['Ford', 'Fusion', '2011', 'Silver'],
        ['Chevrolet', 'Cruz', '2018', 'White']
    ]

</script>
<template>

    <div class="p-10">

        <div class="grid grid-cols-2 gap-10">

            <ax-card class="col-span-2 md:col-span-1 cursor-pointer" @click="$router.push({ path: '/dashboard' })">

                <IconDashboard class="text-blue-500" height="60px"/>

                View Dashboards

            </ax-card>

            <ax-card class="col-span-2 md:col-span-1 cursor-pointer" @click="$router.push({ path: '/components' })">
                
                <IconToggleRight class="text-purple-500" height="60px"/>

                View Components

            </ax-card>

        </div>

    </div>

    

    

    


</template>