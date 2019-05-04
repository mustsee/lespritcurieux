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
        min-height: 100vh;
    }

    .container {
        width: 1040px;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
    }

    .content {
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
            margin-top: 30px;
            @media (min-width: 991px) {
                margin-top: 45px;
            }
        }
    }

    h1 {
        margin: 0 0 10px;
        line-height: normal;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        text-align: center;
        @media (min-width: 991px) {
            margin: 0 0 15px;
        }
    }
    h2 {
        margin: 0 0 10px;
        line-height: normal;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 20px;
    }
    p {
        padding-top: 10px;
        margin-bottom: 20px;
        color: #333;
        font-weight: 300;
        @media (min-width: 991px) {
            margin-bottom: 25px;
        }
    }
</style>
