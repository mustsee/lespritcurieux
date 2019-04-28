<template>
    <section class="gronkowski">
        <h1>Collection Gronkowski</h1>
        <p>
            Par testament daté du 1er décembre 1947, Camille Gronkowski lègue à la Société Historique et Littéraire
            Polonaise (SHLP) sa collection artistique.
        </p>
        <p>
            Elle est composée de 108 tableaux de maîtres, d'une grande collection de livres
            précieux ainsi que de nombreux souvenirs historiques - tel qu'un coffret de Talleyrand
            ou un buste de la Reine Marie Leszczynska.
        </p>
        <p>
            Une grande partie de cette collection sera présentée dans deux salles au deuxième étage de
            la Bibliothèque Polonaise.
        </p>
        <h2>Biographie</h2>
        <div class="portrait">
            <img src="/camille_gronkowski.png" alt="Portrait de Camille Gronkowski" />
        </div>
        <p>
            Camille Gronkowski nait à Paris en 1873. Il fait ses études à Paris et devient docteur en droit.
            Il entre dans l'administration en 1902 et, huit ans plus tard, est attaché au Palais des Beaux-Arts.
        </p>
        <p>
            Gronkowski devient ensuite conservateur du Petit Palais et président de la SHLP à partir de 1946 jusqu'à
            sa mort le 14 août 1949.
        </p>
        <p>
            Personnage d'une grande ouverture d'esprit, expert de Rembrandt, Murillo, et fin connaisseur de
            l'Histoire de l'art, il parvient à rassembler une collection d'oeuvres remarquable avec
            une prédilection pour les XVIIIème et XIXème siècles.
        </p>
        <p>
            Meubles, objets d'art, peintures à l'huile, dessins, aquarelles et objets exotiques emplissaient
            sont appartement et son bureau au Petit Palais.
        </p>
        <p>
            Parmi les oeuvres de sa collection, on compte des dessins de François Boucher, Charles Nicolas Cochin,
            François Granet, Jean-Baptiste Greuze, Paul Huet, Augustin Pajou, Pierre Wille, ainsi qu'un dessin
            à la plume réalisé par Eugène Delacroix.
        </p>
    </section>
</template>

<style lang="scss" scoped>
    .gronkowski {
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
        .portrait {
            text-align: center;
            padding-top: 10px;
            margin-bottom: 10px;
            @media (min-width: 991px) {
                margin-bottom: 15px;
            }
        }
    }
</style>