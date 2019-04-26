<template>
    <div class="top">
        <div class="title">
            <h1>
                L'esprit curieux. Collectionner en Europe (de Vasari à nos jours)
            </h1>
        </div>
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
    }
    .title {
        padding-bottom: 20px;
        cursor: pointer; // onClick, go to main page
        h1 {
            font-family: 'Lato', sans-serif;
            font-weight: 300;
            font-size: 20px;
            text-transform: uppercase;
            text-align: center;
            .blueTitle:hover {
                color: dodgerblue;
            }
        }
    }
    .date {
        padding-top: 5px;
        h2 {
            font-family: 'Lato', sans-serif;
            font-size: 10px;
            color: #7e7e7e;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-align: center;
            word-spacing: 0;
        }
    }
</style>
