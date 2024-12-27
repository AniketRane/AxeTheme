<script setup>
    const series = [{
        name: 'Monthly Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }];
    const chartOptions = {
        theme: {
            mode: 'dark'
        },
        chart: {
          height: 350,
          type: 'bar',
          background: 'transparent',
        },
        grid: {
            show: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
          },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            axisBorder:{
                show: false,
            },
            axisTicks: {
                show: false,
            },
        }
    }
</script>
<template>

    <ax-card title="Monthly Orders">
        <apexchart :options="chartOptions" :series="series"></apexchart>
    </ax-card>

</template>