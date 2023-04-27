<script>
export default {
    props: {
        numberGraph: Array,
    },
    data() {
        return {
            name: "AppNumbers"
        }
    }
}
</script>

<template>
    <div class="comp-container">

        <div class="circle-white"></div>
        <div class="numbers-container d-flex justify-content-center align-items-center ">
            <div class="numbers-content d-flex text-center ">
                <div v-for="graph, index in numberGraph" :key="index" class="single-number mx-5">
                    <i class="fa-solid " :class="`fa-${graph.graphImg}`"></i>
                    <h3>{{ graph.graphNumber }}</h3>
                    <p>{{ graph.graphName }}</p>
                </div>
            </div>
        </div>
        <div class="circle-white-2"></div>
    </div>
</template>

<style scoped lang="scss">
.comp-container {
    position: relative;

    .numbers-container {
        background-image: url(../assets/img/home-244125289.jpg);
        height: 600px;

    }

    .circle-white {
        position: absolute;
        clip-path: ellipse(50% 50% at 50% 50%);
        background-color: white;
        height: 200px;
        width: 100%;
        top: -100px;
    }

    .circle-white-2 {
        position: absolute;
        clip-path: ellipse(50% 50% at 50% 50%);
        background-color: white;
        height: 200px;
        width: 100%;
        bottom: -100px;
    }

    .numbers-content {
        .single-number {


            .fa-solid {
                color: #FED03D;
                font-size: 3.4rem;
            }

            h3 {
                color: #FED03D;
                font-size: 4rem;
            }

            p {
                color: white;
                font-size: 1.2rem;
            }
        }
    }
}
</style>