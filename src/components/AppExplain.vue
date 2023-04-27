<script>
export default {
    props: {
        explainCard: Array
    },
    data() {
        return {
            name: "AppExplain"
        }
    }
}
</script>

<template>
    <div class="content-container d-flex justify-content-center align-items-center ">
        <div class="text justify-content-center align-items-center d-flex text-center">

            <h2 class="my-5">Specialists In Modern Construnction</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eos, nemo laborum maiores fugiat
                consequuntur vitae amet sed. Iusto accusantium debitis totam. Dolorem voluptas repellat
            </p>
        </div>
        <div class="card-container d-flex justify-content-center align-items-center text-center ">

            <div v-for="explain, index in  explainCard " :key="index"
                class="cards d-flex justify-content-center align-items-center mx-3">
                <i class="fa-solid " :class="`fa-${explain.cardImg}`"></i>
                <h3>{{ explain.cardTitle }}</h3>
                <p>{{ explain.cardText }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content-container {
    margin: 0 auto;
    margin-top: 150px;
    width: 80%;
    flex-direction: column;

    .text {
        width: 70%;
        flex-direction: column;
        margin-bottom: 100px;

        h2 {
            font-weight: 200;
            font-size: 2.5rem;
            position: relative;

        }

        h2::after {
            content: "";
            margin-top: 30px;
            width: 270px;
            display: block;
            height: 2px;
            background-color: #FED03D;
            color: black;
            position: absolute;
            right: 170px;
        }
    }

    .card-container {
        color: #747474;
        margin-bottom: 100px;

        .cards {
            background-color: #F5F5F5;
            flex-direction: column;
            height: 250px;

            h3 {
                color: black;
                font-size: 2rem;
                font-weight: 200;
            }

            .fa-solid {
                border: 1px solid #747474;
                padding: 20px;
                border-radius: 60%;
                font-size: 1.7rem;
            }
        }
    }
}
</style>