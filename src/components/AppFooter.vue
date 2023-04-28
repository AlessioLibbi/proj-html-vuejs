<script>
import { store } from "../store"
import AppFooterQuote from './AppFooterQuote.vue';
import AppFooterInfo from './AppFooterInfo.vue';
export default {
    components: {
        AppFooterQuote,
        AppFooterInfo
    },
    data() {
        return {
            name: "AppFooter",
            store
        }
    }
}
</script>

<template>
    <AppFooterQuote />
    <AppFooterInfo :infoData="store.infoData" />
</template>

<style lang="scss"></style>