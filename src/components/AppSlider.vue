<script>
import { store } from "../store"
export default {
    props: {
        sliderData: Array
    },
    data() {
        return {
            name: "AppSlider",
            store
        }
    },
    methods: {
        GetImagePath(index) {

            return new URL(this.sliderData[index].sliderImg, import.meta.url).href

        },
        GetImagePpl(index) {
            return new URL(this.sliderData[index].sliderPpl, import.meta.url).href
        }
    }

}
</script>

<template>
    <div class="slider-container">
        <div class="circle-whit"></div>
        <div v-for="slider, index in  sliderData " :key="index" class="slider">
            <img :src="GetImagePath(index)" alt="">
            <div class="slider-content text-center">
                <h3>Our Home Owners Say</h3>
                <img class="circle" :src="GetImagePpl(index)" alt="">
                <p>{{ slider.sliderText }}</p>
                <h4>{{ slider.sliderName }}</h4>
                <div class="slider-inde">
                    <i class="fa-regular fa-circle"></i>
                </div>

            </div>
        </div>
        <div class="circle-whit-2"></div>
    </div>
</template>

<style scoped lang="scss">
.slider-container {
    position: relative;

    .slider {
        .circle {
            border-radius: 50%;
        }

        .slider-content {
            padding-top: 80px;
            color: white;
            position: absolute;
            width: 750px;
            height: 700px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            h3 {
                margin-bottom: 50px;
                font-size: 2.5rem;
            }

            img {
                margin-bottom: 40px;
            }

            p {
                font-size: 1.5rem;
                font-style: italic;
            }

            h4 {
                font-size: 1.3rem;
            }

            h3::after {
                content: "";
                margin-top: 30px;
                width: 200px;
                display: block;
                height: 2px;
                background-color: #FED03D;

                position: absolute;
                right: 280px;
            }
        }
    }

    .circle-whit {
        position: absolute;
        clip-path: ellipse(70% 50% at 49% 56%);
        background-color: #F5F5F5;
        height: 200px;
        width: 100%;
        top: -45px;
    }

    .circle-whit-2 {
        position: absolute;
        clip-path: ellipse(72% 51% at 50% 87%);
        background-color: #F5F5F5;
        height: 200px;
        width: 100%;
        bottom: -97px;
    }
}
</style>