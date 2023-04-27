<script>
export default {
    data() {
        return {
            name: "AppWorks"
        }
    }
}
</script>

<template>
    <div class="works-container text-center">
        <div class="works-text d-flex flex-column">
            <h2 class="my-5">Explore Recent Work</h2>
            <p class="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eos, nemo laborum maiores
                fugiat
                consequuntur vitae amet sed. Iusto accusantium debitis totam. Dolorem voluptas repellat
            </p>
        </div>
        <div class="works-img d-flex justify-content-center ">
            <img src="../assets/img/project2-featured-15013609-400x400.jpg" alt="">
            <img src="../assets/img/project1-featured-294276386-400x400.jpg" alt="">
            <img src="../assets/img/project3-featured-189023420-400x400.jpg" alt="">
        </div>
        <div class="works-foot mt-5 mb-5 d-flex justify-content-center">
            <h4 class="m-5">VIEW ALL PROJECTS</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
.works-container {
    margin-top: 200px;

    .works-text {
        margin: 0 auto;
        width: 50%;
        font-weight: 200;
    }

    .works-img {
        img {
            margin-right: 30px;
        }
    }

    .works-foot {
        h4 {
            font-weight: 200;
            font-size: 1.3rem;
        }
    }

    .works-foot::before {
        content: "";
        width: 450px;
        background-color: #BCBCBC;
        height: 2px;
        margin: 2rem;
        display: block;
    }

    .works-foot::after {
        content: "";
        width: 450px;
        background-color: #BCBCBC;
        margin: 2rem;
        height: 2px;
        display: block;
    }
}

h2::after {
    content: "";
    margin-top: 30px;
    width: 200px;
    display: block;
    height: 2px;
    background-color: #FED03D;
    color: black;
    position: absolute;
    right: 850px;
}
</style>