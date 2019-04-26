<template>
    <section class="home">
        <h1>Présentation du colloque</h1>
        <p>
            La Société Historique et Littéraire Polonaise (SHLP) et la Bibliothèque Polonaise de Paris (BPP) organisent
            un colloque international les 24 et 25 octobre 2O19 à Paris sur le thème de la collection.
        </p>
        <h2>Objectifs</h2>
        <p>
            L'objectif du colloque "L'esprit curieux. Collectionner en Europe (de Vasari à nos jours)" est de réunir les
            représentants de trois pays (France, Italie et Pologne) pour s'interroger sur
            les liens entre la collection en tant que pratique et la construction des identités européennes.
        </p>
        <p>
            Il s'agira d'alimenter un débat sur les enjeux des interactions entre collections privées et publiques,
            leurs conjectures économiques et culturelles, ainsi que sur les questions liées aux stratégies
            patrimoniales.
        </p>
        <h2>Évènement</h2>
        <p>
            Le colloque sera également une occasion unique de présenter la plus grande collection d'œuvres léguée à la
            Société Historique et Littéraire Polonaise par Camille Gronkowski (1873-1949), conservateur du Petit Palais
            et président de la Société Historique et Littéraire Polonaise de 1946 à 1949.
        </p>
        <h2>Publications</h2>
        <p>
            A l'issue du colloque, nous publierons les actes et nous rendrons disponible les vidéos enregistrées des
            interventions et des débats sur un site dédié.
        </p>
    </section>
</template>

<style lang="scss" scoped>
    .home {
        //margin: 0 auto;
        //text-align: center;
        //background-color: aquamarine;
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
    }
</style>
