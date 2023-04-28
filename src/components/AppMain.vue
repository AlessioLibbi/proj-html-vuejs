<script>
import AppQuote from './AppQuote.vue';
import AppExplain from './AppExplain.vue';
import AppNumbers from './AppNumbers.vue';
import AppWorks from './AppWorks.vue';
import AppValues from './AppValues.vue';
import AppSlider from './AppSlider.vue';
import AppNews from './AppNews.vue';
import AppPartners from './AppPartners.vue';
import { store } from "../store"
export default {
    components: {
        AppQuote,
        AppExplain,
        AppNumbers,
        AppWorks,
        AppValues,
        AppSlider,
        AppNews,
        AppPartners
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
    <AppValues :valueData="store.valueData" />
    <AppSlider :sliderData="store.sliderData" />
    <AppNews :newsData="store.newsData" />
    <AppPartners :partnersData="store.partnersData" />
</template>


<style scoped lang="scss"></style>