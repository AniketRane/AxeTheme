import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import router from "./router";

// import Navbar from "@/components/Navbar.vue"
import SectionTitle from "@/components/SectionTitle.vue"
import Title from "@/components/Title.vue"
import Subtitle from "@/components/Subtitle.vue"
import GridCols from "@/components/GridCols.vue"
import Col from "@/components/Col.vue"
import Card from "@/components/Card.vue"
import Input from "@/components/Input.vue"
import Button from "@/components/Button.vue"
import Spinner from "@/components/Spinner2.vue"
import Form from "@/components/Form.vue"
import Input2 from "@/components/Input2.vue"
import Pagination from "@/components/Pagination.vue"
import Table from "@/components/Table/Table.vue"
import Toggle from "@/components/Toggle.vue"
import EmptyState from "@/components/EmptyState.vue"
import ButtonGroup from "@/components/ButtonGroup.vue"
import OTPInput from "@/components/OTPInput.vue"
import Modal from "@/components/Modal.vue"
import CodeBlock from "@/components/CodeBlock/CodeBlock.vue"

import Sidebar from "@/components/Sidebar/Sidebar.vue"

import Progress from "@/components/Progress.vue"

import * as components from 'flowbite-vue'

import { VCodeBlock } from '@wdns/vue-code-block';

import VueApexCharts from "vue3-apexcharts";


const pinia = createPinia()

let app = createApp(App);

let keys = Object.keys(components)
for (const key of keys) {
    app.component(key, components[key])
}

// app.component("navbar", Navbar);
app.component("sidebar", Sidebar);
app.component("section-title", SectionTitle);
app.component("ax-title", Title);
app.component("ax-subtitle", Subtitle);
app.component("ax-grid-cols", GridCols);
app.component("ax-col", Col);
app.component("ax-card", Card);
app.component("ax-input", Input);
app.component("ax-button", Button);
app.component("ax-spinner", Spinner);
app.component("ax-form", Form);
app.component("ax-input-2", Input2);
app.component("ax-pagination", Pagination);
app.component("ax-button-group", ButtonGroup);
app.component("ax-table", Table);
app.component("ax-toggle", Toggle);
app.component("ax-empty-state", EmptyState);
app.component("ax-otp-input", OTPInput);
app.component("ax-modal", Modal);
app.component("ax-progress", Progress);

app.component("ax-sidebar", Sidebar);

app.component("VCodeBlock", VCodeBlock);
app.component("CodeBlock", CodeBlock);

app.use(pinia)
app.use(router);

app.use(VueApexCharts)

app.mount('#app')