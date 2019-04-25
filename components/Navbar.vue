<template>
    <div class="navbar">
        <div class="menu">
            <div class="li">Accueil</div>
            <div class="li">Gronkowski</div>
            <div class="li">Contact</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .navbar {
        // > 1200 px : 1010px
        // > 991 px : 940px
        // > 768 px : 720px
        // under : max height - mettre les icônes à ce moment là !
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
            background-color: blueviolet;
            border-top: solid 1px #ebebeb;
            border-bottom: solid 1px #ebebeb;
            padding: 13px 0; // Je peux monter à 17px, pour que ce soit à 53px total
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 2px;
            font-family: 'Lato', 'sans-serif';
            list-style: none;
            display: flex;
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
