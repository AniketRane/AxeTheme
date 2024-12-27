import Home from "@/pages/Home.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Components from "@/pages/Components.vue";

import Buttons from "@/pages/Buttons.vue";
import Card from "@/pages/Card.vue";
import Table from "@/pages/Table/Table.vue";
import Input from "@/pages/Input/Index.vue";

import Analytics from "@/pages/Dashboard/Analytics/Index.vue";

export default [
    { path: '/', component: Home },

    { path: '/dashboard', component: Dashboard },
    { path: '/dashboard/analytics', component: Analytics },

    { path: '/components', component: Components },
    { path: '/components/button', component: Buttons },
    { path: '/components/button', component: Buttons },
    { path: '/components/card', component: Card },
    { path: '/components/table', component: Table },
    { path: '/components/input', component: Input }
];