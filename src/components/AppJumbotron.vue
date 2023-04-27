<script>

export default {
    data() {
        return {
            name: "AppJumbotron"
        }
    }
}
</script>

<template>
    <div class="jumbo-back d-flex justify-content-center align-items-center text-center">
        <div class="jumbo-content">
            <h1 class="main-title">BUILDING INSPIRING SPACES</h1>
            <h4 class="second-title">We build Residential Inspiring & Commercial Spaces</h4>
            <div class="jumbo-butt d-flex text-center align-items-center justify-content-center">
                <a href="">
                    <h3 class="grey-butt">EXPLORE RECENT WORK</h3>
                </a>
                <a href="">
                    <h3 class="yell-butt">GET A QUOTE TODAY</h3>
                </a>
            </div>
        </div>
        <div class="plusbox">
            <div class="plus d-flex flex-column justify-content-center align-items-center text-center">
                <i class="fa-brands fa-dev" style="color: #4A5259;"></i>
                <p>Demos</p>
            </div>
            <div class="plus d-flex flex-column justify-content-center align-items-center text-center">
                <p class="price"><span>$</span>39</p>
                <p>On Sale</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.jumbo-back {
    background-image: url(../assets/img/home-slider-62528242.jpg);
    height: 900px;
    position: relative;

    .jumbo-content {
        .main-title {
            font-size: 4rem;
            color: white;
        }

        .second-title {
            color: #FED23F;
            margin: 40px 40px;
        }

    }

    .jumbo-butt {
        a {
            text-decoration: none;
            color: inherit;

            .grey-butt {
                font-size: 1.5rem;
                font-weight: lighter;
                color: white;
                background-color: #333333;
                padding: 15px 30px;
                margin-right: 20px;
            }

            .grey-butt:hover {
                background-color: #FED03D;
                color: black;
            }

            .yell-butt {
                background-color: #FED03D;
                font-weight: lighter;
                font-size: 1.5rem;
                padding: 15px 40px;
            }

            .yell-butt:hover {
                color: white;
                background-color: #333333;
            }
        }
    }

    .plusbox {
        position: absolute;
        right: 15px;
        top: 15px;

        .plus {
            border-radius: 5px;
            height: 70px;
            width: 70px;
            background-color: #FFFFFF;
            margin-bottom: 10px;
            font-size: 0.8rem;
            color: #4A5259;

            p {
                margin: 0;
            }

            .price {
                font-size: 2rem;
                color: #65BC7B;
                font-weight: 700;

                span {
                    font-size: 1rem;
                }
            }

            i {
                font-size: 2rem;
            }
        }
    }
}
</style>