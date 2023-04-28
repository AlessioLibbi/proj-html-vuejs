<script>
export default {
    data() {
        return {
            name: "AppFooterQuote"
        }
    }
}
</script>

<template>
    <div class="footer-quote d-flex justify-content-center align-items-center">
        <div class="footer-quote-cont d-flex justify-content-between align-items-center ">
            <div class="text d-flex flex-column ">
                <h2>Building Inspiring Spaces</h2>
                <p>Vivamus sed consectetur tellum dolor sit amet, consectetur adisciping lorem elit sadip ipsum ets filicis
                    uns
                </p>
            </div>
            <div class="but text-center">
                <h3><a href="">GET A FREE QUOTE</a></h3>
                <p>Only takes a few seconds!</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer-quote {
    background-image: url(../assets/img/about-call-to-action-57862405.jpg);
    background-position: bottom;
    height: 400px;
    color: white;

    .footer-quote-cont {
        width: 60%;
        margin: 0 auto;
    }

    .text {
        width: 500px;
        margin-right: 150px;

        h2 {
            font-size: 3rem;
            font-weight: 200;
            margin-bottom: 100px;
        }

        p {
            font-size: 1.2rem;
        }
    }

    .but {
        a {
            text-decoration: none;
            color: inherit;
        }

        h3 {
            margin-bottom: 30px;
            padding: 10px 30px;
            background-color: #333333;
            font-weight: 200;
        }

        h3:hover {
            background-color: #FED03D;
            color: black;
            font-weight: 200;
        }
    }


    h2::after {
        content: "";
        margin-top: 40px;
        width: 200px;
        display: block;
        height: 2px;
        background-color: #FED03D;

        position: absolute;
        right: 1320px;
    }
}
</style>