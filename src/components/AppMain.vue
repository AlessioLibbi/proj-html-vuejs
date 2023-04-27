<script>
import AppQuote from './AppQuote.vue';
import AppExplain from './AppExplain.vue';
import { store } from "../store"
export default {
    components: {
        AppQuote,
        AppExplain
    },
    data() {
        return {
            name: "AppMain",
            store
        }
    }
}
</script>

<template>
    <AppQuote />
    <AppExplain :explainCard="store.explainCard" />
</template>


<style scoped lang="scss"></style>