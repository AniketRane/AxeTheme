<script setup>
import { computed, ref } from "vue";


const sidebarWidth = ref('256px');
const navbarHeight = ref('64px');

const style = computed(() => {
    return {
        '--ax-navbar-height': navbarHeight.value,
        '--ax-sidebar-width': sidebarWidth.value,
    }
})

</script>
<template>
    <div class="application-wrap">
        <div class="header bg-yellow-100" :style="style">
            <div class="h-full">Header</div>
        </div>
        <div class="drawer bg-red-200" :style="style">Drawer</div>
        <div class="main" :style="style">
            <router-view/>
        </div>
    </div>
</template>
<style>
.application-wrap {
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    max-width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    position: relative;
}
.header {
    top: 0px;
    z-index: 1006;
    transform: translateY(0px);
    position: fixed;
    left: 0px;
    width: calc(100% + 0px);
    height: var(--ax-navbar-height);
}
.drawer {
    left: 0px;
    z-index: 1004;
    transform: translateX(0px);
    position: fixed;
    height: calc(100% - var(--ax-navbar-height));
    top: var(--ax-navbar-height);
    bottom: 0px;
    width: var(--ax-sidebar-width);
}
.main {
    flex: 1 0 auto;
    max-width: 100%;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    padding-left: var(--ax-sidebar-width);
    padding-right: 0px;
    padding-top: var(--ax-navbar-height);
    padding-bottom: 0px;
}
</style>