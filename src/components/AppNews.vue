<script>
export default {
    props: {
        newsData: Array
    },
    data() {
        return {
            name: "AppNews"
        }
    },
    methods: {
        GetImagePath(index) {

            return new URL(this.newsData[index].newsImg, import.meta.url).href

        },
    }
}
</script>

<template>
    <div class="news-cont">
        <div class="news-text text-center">

            <h2>Latest News</h2>
            <p>Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua, Ut enim ed minim venim, quis nostrud exercitation ullamco.
            </p>
        </div>
        <div class="row row-cols-4 d-flex justify-content-center">
            <div v-for="news, index in newsData" class="col">
                <div class="card">
                    <img :src="GetImagePath(index)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ news.newsTitle }}</h5>
                        <p class="card-text"><small class="text-body-secondary">{{ news.newsDate }}</small></p>
                        <p class="card-text">
                            {{ news.newsText }}
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div class="news-foot mt-5 mb-5 d-flex justify-content-center">
            <h4 class="m-5">VIEW ALL ARTICLES</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
.news-cont {
    margin-top: 95px;
    background-color: #F5F5F5;

    .news-text {
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

    .row {
        width: 80%;
        margin: 0 auto;

        .card {
            height: 600px;

            .card-img-top {
                width: 400px;
                height: 200px;

            }

            h5 {
                font-weight: 200;
                font-size: 1.8rem;

            }

            p {
                color: #666665;
                line-height: 40px;
            }

            .text-body-secondary::after {
                content: "";
                margin-top: 10px;
                width: 90%;
                display: block;
                height: 1px;
                background-color: #BCBCBC;

                position: absolute;
                right: px;
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

    .news-foot {
        h4 {
            font-weight: 200;
            font-size: 1rem;
        }
    }

    .news-foot::before {
        content: "";
        width: 450px;
        background-color: white;
        height: 2px;
        margin: 2rem;
        display: block;
    }

    .news-foot::after {
        content: "";
        width: 450px;
        background-color: white;
        margin: 2rem;
        height: 2px;
        display: block;
    }
}
</style>