<template>
    <div class="page">
        <div class="container">
            <top/>
            <navbar/>
            <div class="content">
                <nuxt/>
                <div class="contentEnd"></div>
            </div>
            <bottom/>
        </div>
    </div>
</template>

<script>
    import Top from '~/components/Top'
    import Navbar from '~/components/Navbar'
    import Bottom from '~/components/Bottom'

    export default {
        components: {
            Top,
            Navbar,
            Bottom,
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Merriweather');

    html {
        font-family: 'Merriweather', serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        margin: 0;
        line-height: 1.625;
    }

    .page {
        display: flex;
        justify-content: center;
        //background-color: grey;
        min-height: 100vh;
    }

    .container {
        width: 1040px;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        //background-color: orange;
    }

    .content {
        //background-color: chocolate;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 30px;
        @media (min-width: 768px) {
            width: 720px;
        }
        @media (min-width: 991px) {
            width: 617px;
            padding-top: 45px;
        }
        @media (min-width: 1200px) {
            width: 663px;
            padding-top: 45px;
        }
        .contentEnd {
            height: 1px;
            background-color: #ebebeb;
            //background-color: red;
            margin-top: 30px;
            @media (min-width: 991px) {
                margin-top: 45px;
            }
        }
    }
</style>
