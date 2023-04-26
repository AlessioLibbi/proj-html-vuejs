<script>
export default {
    props: {
        links: Array
    },
    data() {
        return {
            name: "AppNavbar",
            activeIndex: 0
        }
    },
    methods: {
        activeAdd(index) {
            this.activeIndex = index
        }
    }
}
</script>

<template>
    <div class="header-nav d-flex justify-content-between align-items-center">
        <img src="../assets/img/construction_logo.png" alt="">
        <ul class="d-flex justify-content-between ">
            <li @click="activeAdd(index)" :class="index == activeIndex ? 'actived' : 'null'"
                v-for=" (link, index) in links">
                <a class="text-center" href="#">{{ link }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
div {
    width: 90%;
    margin: 0 auto;
    height: 100px;

    ul {
        list-style: none;
        margin: 0;

        .actived {
            color: #FED23F;


        }

        li {
            width: 130px;
            position: relative;



            a {
                color: inherit;
                text-decoration: none;
                width: 150px;
                line-height: 50px;
                display: block;


            }

        }

        .actived::after {
            content: '';
            position: absolute;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 15px solid white;
            left: 50%;
            bottom: -80%;
        }

        a:hover {
            background-color: #FED23F;
            color: black;

        }
    }
}
</style>