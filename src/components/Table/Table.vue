<script setup>
import { computed, useSlots, onMounted, ref } from 'vue';
import empty from "@/assets/empty.svg";

const slots = useSlots();

const table = ref();

const props = defineProps({
    headers: Array,
    items: Array,
    pagination: Boolean,
    paginationProps: {
        type: Object,
        default: {
            totalPages: 1
        }
    }
});


const currentPage = ref(1);

onMounted(() => {
  
})

</script>
<template>
    <div class="relative">
        <table ref="table" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead v-if="headers" class="bg-gray-100 text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr v-if="headers">
                    <th  v-for="(header, i) in headers" :key="i" scope="col" class="px-6 py-3">
                        <slot v-if="slots[`header.${ header.key }`]" :name="`header.${ header.key }`" :data="header"></slot>
                        <template v-else>{{ header.title }}</template>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="items && items.length <= 0">
                    <td class="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700 p-10 text-center" :colspan="headers.length">
                        
                        <ax-empty-state text="No data">
                            <template #media>
                                <empty class="mb-4"/>
                            </template>
                        </ax-empty-state>

                    </td>
                </tr>
                <tr v-else-if="items && items.length > 0" v-for="(item, i) in items" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4" v-for="(header, j) in headers" :key="j">
                        <slot v-if="slots[`item.${ header.key }`]" :name="`item.${ header.key }`" :data="item"></slot>
                        <template v-else>{{ item[header.key] }}</template>
                    </td>
                </tr>
                
            </tbody>
        </table>

        <ax-pagination class="mt-5" v-if="pagination" v-model="currentPage" v-bind="paginationProps"></ax-pagination>

    </div>
    
</template>