<template>
  <section>
    <div class="image">
      <img class="bigger" src="/partners/senat-polski.jpg" alt="Logo du sénat Polonais" />
    </div>    
    <div class="image senat">
      <div>{{ $t('partners.senat') }}</div>
    </div> 
    <div class="image">
      <img class="bigger" src="/partners/pan.png" alt="Logo de l'académie polonaise des sciences" />
    </div>
    <div class="image">
      <img class="extra-large" src="/partners/pzu.jpg" alt="Logo de PZU" />
    </div>
    <div class="image">
      <img class="bigger" src="/partners/iam.jpg" alt="Logo de l'institut Adam Mickiewicz" />
    </div>
    <div class="image">
      <img src="/partners/inVisu.jpg" alt="Logo de inVisu" />
    </div>
    <div class="image">
      <img src="/partners/le-gallerie-degli-uffizi.svg" alt="Logo de la gallerie des Offices" />
    </div>
    <div class="image">
      <img class="bigger" src="/partners/UW.jpg" alt="Logo de l'Université de Varsovie" />
    </div>
    <div class="image">
      <img class="bigger" src="/partners/BUW.jpg" alt="Logo de la bibliothèque de l'Université de Varsovie" />
    </div>
    <div class="image">
      <img class="bigger" src="/partners/dida.jpg" alt="Logo de la bibliothèque de l'Université de Florence, département d'architecture" />
    </div>
    <div class="image">
      <img src="/partners/Université-de-Poitiers.jpg" alt="Logo de l'Université de Poitiers" />
    </div>
    <div class="image">
      <img  class="smaller" src="/partners/artes-liberales.png" alt="Logo de la faculté des Arts libéraux de Varsovie" />
    </div>
    <div class="image">
      <img src="/partners/MANGGHA.jpg" alt="Logo of Manggha. Museum of Japanese Art and Technology" />
    </div>
    <div class="image">
      <img class="bigger" src="/partners/e-campus.jpg" alt="Logo de l'Université de Côme">
    </div>
    <div class="image">
      <img class="smaller" src="/partners/instytut-romanistyki.svg" alt="Logo de l'institut de romanistique">
    </div>
    <div class="image">
      <img src="/partners/université-de-bologne.jpg" alt="Logo de l'Université de Bologne">
    </div>   
  </section>
</template>

<script>
export default {
  head() {
    return {
      title:
        "Colloque - L'esprit curieux - Collection Gronkowski - Biographie de Camille Gronkowski"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .image {
    width: 300px;
    height: 200px;
    margin: 0 2px 15px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      max-height: auto;
    }
    .smaller {
      width: 50%;
    }
    .bigger {
      width: 90%;
    }
    .extra-large {
      width: 100%;
    }
  }
}
</style>