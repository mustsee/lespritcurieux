<template>
    <div class="top">
            <nuxt-link to="/">
                <div class="title">
                    <h1>
                        L'esprit curieux. Collectionner en Europe (de Vasari à nos jours)
                    </h1>
                </div>
            </nuxt-link>
        <div class="date">
            <h2>
                Paris, 24 et 25 octobre 2019
            </h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .top {
        background-color: white;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 991px) {
            padding: 40px;
        }
    }
    .title {
        padding-bottom: 20px;
        cursor: pointer;
        h1 {
            line-height: 1.625;
            font-weight: 300;
            font-size: 20px;
            text-transform: uppercase;
            margin: 0;
        }
    }
    .date {
        padding-top: 5px;
        h2 {
            font-weight: 700;
            line-height: 1.625;
            font-size: 10px;
            color: #595959;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-align: center;
            word-spacing: 0;
            margin: 0;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>
