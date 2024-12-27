import { IconToggleRight, IconHome, IconDashboard } from '@tabler/icons-vue';

export default [
    { path: '/', name: 'Home', icon: IconHome },
    { 
        path: '/dashboard',
        name: 'Dashboard',
        icon: IconDashboard,
        children: [
            { name: 'Analytics', path: '/dashboard/analytics' },
        ]
    },
    {
        path: '/components',
        name: 'Components',
        icon: IconToggleRight,
        children: [
            { name: 'Button', path: '/components/button' },
            { name: 'Card', path: '/components/card' },
            { name: 'Table', path: '/components/table' },
            { name: 'Input', path: '/components/input' },
        ],
    },
];