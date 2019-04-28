<template>
    <div class="navbar">
        <div class="menu">
            <nuxt-link to="/"><div class="li">Accueil</div></nuxt-link>
            <nuxt-link to="/gronkowski"><div class="li">Gronkowski</div></nuxt-link>
            <nuxt-link to="/contact"><div class="li">Contact</div></nuxt-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .navbar {
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
        .menu {
            border-top: solid 1px #ebebeb;
            border-bottom: solid 1px #ebebeb;
            padding: 13px 0; // 17px
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 2px;
            font-family: 'Lato', 'sans-serif';
            list-style: none;
            display: flex;
            a {
                text-decoration: none;
                color: inherit;
            }
            .li {
                margin-right: 30px;
                cursor: pointer;
                &:hover {
                    color: #b49543;
                }
            }
        }
    }

</style>
