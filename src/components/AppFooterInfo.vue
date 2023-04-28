<script>
export default {
    props: {
        infoData: Array
    },
    data() {
        return {
            name: "AppFooterInfo"
        }
    }
}
</script>

<template>
    <div class="line"></div>
    <div class="footer-content">
        <div class="row row-cols-4 d-flex">
            <div class=" first-col">
                <img src="../assets/img/footer-logo.png" alt="">
                <p>We are specialists in the costrunction of unique and exclusive properties. Our work ispires. We pride
                    ourselves on delivering outstanding quality and desing for leading clients across the world.
                </p>
                <h3><a href="">LEARN MORE</a></h3>
            </div>
            <div class="secon-col col d-flex flex-column">
                <h4>LATEST TWEETS</h4>
                <img class="logos" src="../assets/img/3a74ce3d0532b7773b174c45ca3bd05a_bigger.png" alt="">
                <i class="fa-brands fa-twitter"></i>
                <div class="text">
                    <h6>ThemeFusion</h6>
                    <p>@Theme_Fusion</p>
                    <p>Do you need sublime WorlPress hosting for you next website? take advantage of exclusive partner
                        offers that we have secured just for you, & launch your site in seconds with <a class="links"
                            href="">#avada</a>
                        on WP Engine hosting & get 30% Off this Black Friday <a class="links" href="">bit.ly/3kjLLE2
                            #BlackFriday2020</a>
                    </p>
                </div>
                <div class="second-col-right col">
                    <img class="" src="../assets/img/En2TRxLW4AEiWUN.jpeg" alt="">
                    <i class="fa-regular fa-heart "></i>
                    <i class="fa-solid fa-person-walking-arrow-right"></i>
                    <p class="hour">22h</p>
                </div>
            </div>
            <div class="thir-col col">
                <h4>CONTACT US TODAY</h4>
                <ul>
                    <li class="d-flex" v-for="info, index in   infoData  ">
                        <i :class=info.infoIcon></i>
                        <a href="">{{ info.infoText }}</a>
                    </li>
                </ul>
            </div>
            <div class="four-col col">
                <h4>FIND US</h4>
                <img src="../assets/img/construction_map_pin.png" alt="">
            </div>
        </div>
    </div>
    <div class="last-footer d-flex justify-content-between">
        <div class="left-last">
            <p>COPYRIGHT 2012 -2015 AVADA THEME BY THEME FUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</p>
        </div>
        <div class="right-last">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
.line {
    height: 10px;
    background-color: #3F3F3F;
}

.footer-content {
    background-color: #1E1E1E;

    .row {
        margin: 0 auto;
        padding-top: 100px;
        width: 90%;


        .first-col {


            img {
                margin-bottom: 30px;
            }

            p {
                margin-bottom: 30px;
                color: #6B6B6B;
            }

            a {
                text-decoration: none;
                color: inherit;
                display: block;
            }

            h3 {
                font-size: 1rem;
                margin-bottom: 30px;
                padding: 10px 30px;
                background-color: #333333;
                font-weight: 200;
                width: 160px;
                color: white;

            }

            h3:hover {
                background-color: #FED03D;
                color: black;
                font-weight: 200;
            }
        }

        .secon-col {
            position: relative;
            color: white;


            .fa-brands {
                position: absolute;
                right: 20px;
                top: 70px;
                color: #667580;
            }

            .fa-regular {
                margin-right: 20px;
                margin-top: 10px;
                color: #667580;
            }

            .fa-solid {
                color: #667580;
            }

            .hour {
                position: absolute;
                right: 10px;
                bottom: -15px;
                color: #667580;
            }

            h4 {
                color: #FED03D;
                margin-bottom: 30px;
                font-size: 1rem;
            }

            .text {
                font-size: 1rem;
                margin-left: 50px;
            }

            .logos {
                position: absolute;
                border-radius: 50%;
                width: 40xp;
                height: 40px;
                left: 10px;
                top: 60px;
            }

            .discount {
                width: 300px;
                height: 300px;
            }

            .links {
                text-decoration: none;
                color: inherit;
                color: #FED03D;
            }

            .links:hover {
                text-decoration: underline;
            }
        }

        .thir-col {
            position: relative;

            h4 {
                color: #FED03D;
                font-size: 1rem;
            }

            ul {
                list-style-type: none;
                font-size: 0.9rem;

                i {
                    position: absolute;
                    left: 10px;
                    font-size: 1rem;

                }

                li {
                    color: #717171;
                    padding: 10px;

                    a {
                        color: inherit;
                        text-decoration: none;
                    }

                }

                li:hover {
                    color: #FED03D;
                }
            }
        }

        .four-col {
            h4 {
                color: #FED03D;
                font-size: 1rem;
            }
        }

        h4 {
            margin-bottom: 20px;
        }
    }
}

.last-footer {
    background-color: #111111;
    height: 80px;
    line-height: 80px;
    color: #545454;
    font-size: 1rem;

    .left-last {
        margin-left: 80px;
    }

    .right-last {
        margin-right: 40px;

        i {
            padding: 20px;
        }
    }
}
</style>