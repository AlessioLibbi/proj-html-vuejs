<script>
import AppQuote from './AppQuote.vue';
import AppExplain from './AppExplain.vue';
import AppNumbers from './AppNumbers.vue';
import AppWorks from './AppWorks.vue';
import { store } from "../store"
export default {
    components: {
        AppQuote,
        AppExplain,
        AppNumbers,
        AppWorks
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
    <AppNumbers :numberGraph="store.numberGraph" />
    <AppWorks />
</template>


<style scoped lang="scss"></style>