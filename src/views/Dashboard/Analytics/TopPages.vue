<script setup>

    const headers = [
        {
            key: 'page',
            title: 'Page'
        },
        {
            key: 'views',
            title: 'Views'
        }
    ];
    const items = [
        {
            page: '/themesbrand/skote-25867',
            views: '100'
        },
        {
            page: '/dashonic/chat-24518',
            views: '80'
        },
        {
            page: '/skote/timeline-27391',
            views: '50'
        }
    ];


</script>
<template>
    <ax-card title="Top Pages">
        <ax-table class="mt-4" :headers="headers" :items="items"></ax-table>
    </ax-card>    
</template>
