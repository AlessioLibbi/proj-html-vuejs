<script>
export default {
    data() {
        return {
            name: "AppQuote"
        }
    }
}
</script>

<template>
    <div class="quote-container d-flex justify-content-center align-items-center">
        <h2>Do You Have A Construction Project We Can Help With?</h2>
        <h3><a href="">GET A FREE QUOTE</a></h3>
    </div>
</template>

<style scoped lang="scss">
.quote-container {
    height: 150px;
    background-color: #FED03D;
    position: relative;

    h2 {
        font-weight: 100;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 100;
        background-color: #333333;
        padding: 10px 30px;
        border: 2px solid white;
        color: white;
        position: absolute;
        bottom: -30px;

        a {
            text-decoration: none;
            color: inherit;
        }

        &:hover {
            background-color: #FED03D;
            color: black;
        }
    }

}
</style>