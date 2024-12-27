<script setup>
const headers = [
    {
        title: 'Col_1',
        key: 'col1'
    },
    {
        title: 'Col_2',
        key: 'col2'
    },
    {
        title: 'Col_3',
        key: 'col3'
    },
    {
        title: 'Col_4',
        key: 'col4'
    },
];
const items = [];
</script>
<template>
    <ax-table :headers="headers" :items="items"></ax-table>
</template>