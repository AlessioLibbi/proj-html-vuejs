<script>
import { store } from "../store";
import AppNavbar from "./AppNavbar.vue";
import AppJumbotron from "./AppJumbotron.vue";
export default {
    components: {
        AppNavbar,
        AppJumbotron,
    },
    data() {
        return {
            store,
            name: "AppHeader",

        }
    }
}
</script>

<template>
    <AppNavbar :links="store.links" />
    <AppJumbotron />
</template>

<style scoped lang="scss"></style>