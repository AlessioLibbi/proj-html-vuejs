<script>
export default {
    props: {
        partnersData: Array
    },
    data() {
        return {
            name: "AppPartners"
        }
    },
    methods: {
        GetImagePath(index) {

            return new URL(this.partnersData[index].partnersImg, import.meta.url).href

        },
    }
}
</script>

<template>
    <div class="partners-cont">
        <div class="partners-text text-center">

            <h2>Trusted Partners</h2>
            <p>Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua, Ut enim ed minim venim, quis nostrud exercitation ullamco.
            </p>
        </div>
        <div class="partners-img-cont d-flex justify-content-center">
            <div v-for="partners, index in  partnersData " class="partner-img">
                <img :src="GetImagePath(index)" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.partners-cont {
    .partners-text {
        width: 40%;
        margin: 0 auto;

        h2 {
            margin-bottom: 80px;
            font-weight: 200;
            font-size: 2.4rem;
        }

        p {
            margin-bottom: 40px;
            color: #666665;
        }
    }

    h2::after {
        content: "";
        margin-top: 30px;
        width: 200px;
        display: block;
        height: 2px;
        background-color: #FED03D;

        position: absolute;
        right: 850px;
    }

    .partners-img-cont {
        width: 60%;
        margin: 0 auto;

        .partner-img {
            width: 300px;
            height: 300px;
        }
    }
}
</style>