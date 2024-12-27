<script setup>

    const series = [60];
    const chartOptions = {
        chart: {
            type: 'radialBar',
            offsetY: 0
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: '#00000017'
                },
                startAngle: -135,
                endAngle: 135,
            }
        },
        fill: {
            type: 'gradient',
            colors: ['#3f83f8'],
            gradient: {
                shade: 'light',
                shadeIntensity: 0,
                type: "diagonal1",
                gradientToColors: ['#16bdca'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            },
        },
        stroke: {
            dashArray: 0,
            lineCap: 'round'
        },
        labels: [''],
    }

</script>

<template>
    <ax-card title="Tickets Tracker">
        
        <template #subtitle>
            This Month
        </template>

        <div class="mt-6">
            <div class="text-3xl font-semibold">5</div>
            <div class="text-sm">Total tickets</div>
        </div>

        <div>
            <!-- <apexchart type="radialBar" height="200" :options="chartOptions" :series="series"></apexchart> -->
        </div>

    </ax-card>
</template>