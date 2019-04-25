<template>
    <div class="page">
        <div class="container">
            <top/>
            <navbar/>
            <nuxt/>
        </div>
    </div>
</template>

<script>
    import Top from '~/components/Top'
    import Navbar from '~/components/Navbar'

    export default {
        components: {
            Top,
            Navbar
        }
    }
</script>

<style lang="scss">
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
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
    }

    .container {
        width: 1040px;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        //background-color: orange;
        @media (min-width: 991px) {
        }
    }
</style>
