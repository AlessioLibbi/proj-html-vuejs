<script>
export default {
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
}
</style>