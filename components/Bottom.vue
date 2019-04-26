<template>
    <div class="footer">
        <div class="separationLine"></div>
        <div class="logo">
            <img src="/SHLP_BPP_logo.jpg"
                 height="50px"
                 alt="logo de la Société Historique et Littéraire Polonaise"
            >
            <div class="text">
                Société Historique et Littéraire Polonaise<br>Bibliothèque Polonaise de Paris
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            logoText() {
                if (window.innerWidth < 576) return 'SHLP/BPP';
                return ``
            }
        }
    }
</script>
<style lang="scss" scoped>
    .footer {
        margin-top: 8px;
        @media (min-width: 768px) {
            align-self: center;
            width: 720px;
        }
        @media (min-width: 991px) {
            align-self: center;
            width: 940px;
        }
        @media (min-width: 1200px) {
            align-self: center;
            width: 1010px;
        }
        .separationLine {
            height: 1px;
            background-color: #ebebeb;
            //background-color: green;
            margin-bottom: 15px;
        }
        .logo {
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            .text {
                font-family: 'Lato', sans-serif;
                font-weight: 300;
                font-size: 12px;
                text-transform: uppercase;
                margin-left: 15px;
                @media (min-width: 576px) {
                    font-size: 14px;
                }
            }
        }
    }
</style>
