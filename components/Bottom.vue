<template>
    <div class="footer">
        <div class="separationLine"></div>
        <div class="logo">
            <img src="/SHLP_BPP_logo.jpg"
                 height="50px"
                 alt="logo de la Société Historique et Littéraire Polonaise"
            >
            <div class="text">
                {{ $t('bottom.shlp') }}<br>{{ $t('bottom.bpp') }}
            </div>
        </div>
    </div>
</template>
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
        }
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            @media (min-width: 991px) {
                height: 110px;
            }
            .text {
                font-family: 'Lato', sans-serif;
                font-weight: 300;
                font-size: 11px;
                text-transform: uppercase;
                margin-left: 15px;
                @media (min-width: 576px) {
                    font-size: 14px;
                }
            }
        }
    }
</style>
