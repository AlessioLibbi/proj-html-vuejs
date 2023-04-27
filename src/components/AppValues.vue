<script>
export default {
    props: {
        valueData: Array
    },
    data() {
        return {
            name: "AppValues"
        }
    }
}
</script>

<template>
    <div class="values-container text-center pt-5">
        <div class="values-text ">
            <h2 class="my-5 ">Our Core Values</h2>
            <p class="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eos, nemo laborum maiores
                fugiat
                consequuntur vitae amet sed. Iusto accusantium debitis totam. Dolorem voluptas repellat
            </p>
        </div>
        <div class="values-type">
            <div class="row-col-3 d-flex">
                <div v-for="value, index in valueData" :key="index" class="col m-4">
                    <i class="fa-solid " :class="`fa-${value.valueImg}`"
                        :style="`background-color: ${value.valueColor}`"></i>
                    <h3>{{ value.valueTitle }}</h3>
                    <p>{{ value.valueText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.values-container {
    background-color: #F5F5F5;

    .values-text {
        margin: 0 auto;
        width: 40%;
    }

    .values-type {
        width: 60%;
        margin: 0 auto;

        .col {
            position: relative;

            i {
                color: white;
                font-size: 2.5rem;
                padding: 40px;
                border-radius: 50%;

            }

            h3 {
                font-size: 1.3rem;
                font-weight: 100;
                margin: 20px;
                margin-bottom: 40px;
            }

            h3::after {
                content: "";
                margin-top: 10px;

                width: 30px;
                display: block;
                height: 2px;
                background-color: grey;
                position: absolute;
                right: 105px;

            }
        }
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
</style>