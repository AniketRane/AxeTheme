<script setup>

   import OpenOrdersCard from "@/views/Dashboard/Analytics/OpenOrdersCard.vue" 
   import MonthlyOrderCard from "@/views/Dashboard/Analytics/MonthlyOrderCard.vue" 
   import TopPages from "@/views/Dashboard/Analytics/TopPages.vue" 

    import { IconPackage, IconUsers, IconClock, IconCurrencyDollar, IconTrendingUp, IconTrendingDown } from '@tabler/icons-vue';
    
    const chartOptions = {
        chart: {
            type: 'area',
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        yaxis: {
            min: 0
        }
    }

    const series = [
        {
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
        }
    ]

    const chartOptions2 = {
        chart: {
            type: 'bar',
            stacked: true,
            stackType: '100%',
            sparkline: {
                enabled: true
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        }
    }

    const series2 = [
        {
            name: 'Marine Sprite',
            data: [44]
        },
        {
            name: 'Marine Sprite 2',
            data: [66]
        }
    ];

</script>
<template>

    <div class="content">
        <div class="grid grid-cols-4 gap-6">
            <div class="col-span-4 md:col-span-2">
                <div class="grid grid-cols-4 gap-6">
                    <div class="col-span-4 md:col-span-2">
                        <ax-card>
                            <div class="flex">
                                <div class="grow">
                                    <div>Orders</div>
                                    <div class="mt-4 text-3xl font-semibold">16k</div>
                                </div>
                                <div class="add-spirals bg-blue-500 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                    <IconPackage class="text-white" height="26px"/>
                                </div>
                            </div>
                            <div class="text-sm mt-2">
                                <span class="text-green-500 me-3 font-medium">
                                    <IconTrendingUp class="inline me-1" height="18px"/>+16.25%
                                </span>
                                <span class="text-gray-400 dark:text-gray-600">vs. previous month</span>
                            </div>
                        </ax-card>
                    </div>
                    <div class="col-span-4 md:col-span-2">
                        <ax-card>
                            <div class="flex">
                                <div class="grow">
                                    <div>Users</div>
                                    <div class="mt-4 text-3xl font-semibold">341</div>
                                </div>
                                <div class="add-spirals bg-indigo-500 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                    <IconUsers class="text-white" height="24px"/>
                                </div>
                            </div>
                            <div class="text-sm mt-2">
                                <span class="text-red-500 me-3 font-medium">
                                    <IconTrendingDown class="inline me-1" height="18px"/>-4.52%
                                </span>
                                <span class="text-gray-400 dark:text-gray-600">vs. previous month</span>
                            </div>
                        </ax-card>
                    </div>
                    <div class="col-span-4 md:col-span-2">
                        <ax-card>
                            <div class="flex">
                                <div class="grow">
                                    <div>Avg. Duration</div>
                                    <div class="mt-4 text-3xl font-semibold">3m 12sec</div>
                                </div>
                                <div class="add-spirals bg-teal-400 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                    <IconClock class="text-white" height="24px"/>
                                </div>
                            </div>
                            <div class="text-sm mt-2">
                                <span class="text-red-500 me-3 font-medium">
                                    <IconTrendingDown class="inline me-1" height="18px"/>-2.82%
                                </span>
                                <span class="text-gray-400 dark:text-gray-600">vs. previous month</span>
                            </div>
                        </ax-card>
                    </div>
                    <div class="col-span-4 md:col-span-2">
                        <ax-card>
                            <div class="flex">
                                <div class="grow">
                                    <div>Revenue</div>
                                    <div class="mt-4 text-3xl font-semibold">113k</div>
                                </div>
                                <div class="add-spirals bg-yellow-400 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                    <IconCurrencyDollar class="text-white" height="24px"/>
                                </div>
                            </div>
                            <div class="text-sm mt-2">
                                <span class="text-green-500 me-3 font-medium">
                                    <IconTrendingUp class="inline me-1" height="18px"/>+13.85%
                                </span>
                                <span class="text-gray-400 dark:text-gray-600">vs. previous month</span>
                            </div>
                        </ax-card>
                    </div>
                </div>
                
            </div>
            <div class="col-span-4 md:col-span-1">
                <ax-card>

                    <template #media>
                        <apexchart class="mt-6" type="area" height="190" :options="chartOptions" :series="series"></apexchart>
                    </template>

                    <template #title>
                        <div class="grow text-gray-500">Average Monthly Sales</div>
                    </template>
                    <div class="text-2xl font-semibold">$28,450</div>

                </ax-card>
            </div>
            <div class="col-span-4 md:col-span-1">
                <ax-card>
                    <template #title>
                        <div class="flex">
                            <div class="grow text-gray-500">Sales Overview</div>
                            <div class="text-green-500 font-bold">+18.2%</div>
                        </div>
                    </template>
                    <div class="text-2xl font-semibold">$42.5k</div>

                    <div class="flex">
                        <div class="grow">
                            <div>Order</div>
                            <div>62.2%</div>
                            <div class="text-gray-400 text-xs">6,440</div>
                        </div>
                        <div class="grow text-end">
                            <div>Visits</div>
                            <div>25.5%</div>
                            <div class="text-gray-400 text-xs">12,749</div>
                        </div>
                    </div>

                    <apexchart type="bar" height="30" :options="chartOptions2" :series="series2"></apexchart>

                </ax-card>
                
            </div>

            <div class="col-span-2 md:col-span-2">
                <MonthlyOrderCard/>
            </div>

            <div class="col-span-2 md:col-span-2">
                <!-- <OpenOrdersCard/> -->
                <TopPages/>
            </div>

        </div>


    </div>

</template>
<style lang="scss">
.add-spirals {
    position: relative;
    &::after{
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: transparent;
        border-radius: 50%;
        outline: 30px solid #3f83f8;
        opacity: .06;
    }
}
</style>