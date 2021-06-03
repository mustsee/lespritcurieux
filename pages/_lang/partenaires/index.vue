<template>
  <section>
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/senat-polski.jpg" alt="Logo du sénat Polonais" />
    </div>    
    <div class="image senat">
      <div>{{ $t('partners.senat') }}</div>
    </div> 
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/pan.png" alt="Logo de l'académie polonaise des sciences" />
    </div>
    <div class="image">
      <img class="extra-large" src="/lespritcurieux/partners/pzu.jpg" alt="Logo de PZU" />
    </div>
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/iam.jpg" alt="Logo de l'institut Adam Mickiewicz" />
    </div>
    <div class="image">
      <img src="/lespritcurieux/partners/inVisu.jpg" alt="Logo de inVisu" />
    </div>
    <div class="image text">
      <span class="title">Euploos</span>Gabinetto dei Disegni e delle Stampe delle Gallerie degli Uffizi
    </div>
    <div class="image">
      <img class="over-size" src="/lespritcurieux/partners/logo-centro-studi-famiglia-caponi.jpg" alt="Logo centro studi famiglia Caponi">
    </div>
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/UW.jpg" alt="Logo de l'Université de Varsovie" />
    </div>
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/BUW.jpg" alt="Logo de la bibliothèque de l'Université de Varsovie" />
    </div>
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/IIC.jpg" alt="Logo de l'institut italien de la culture'" />
    </div>
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/dida.jpg" alt="Logo de la bibliothèque de l'Université de Florence, département d'architecture" />
    </div>
    <div class="image">
      <img src="/lespritcurieux/partners/Université-de-Poitiers.jpg" alt="Logo de l'Université de Poitiers" />
    </div>
    <div class="image">
      <img  class="smaller" src="/lespritcurieux/partners/artes-liberales.png" alt="Logo de la faculté des Arts libéraux de Varsovie" />
    </div>
    <div class="image">
      <img src="/lespritcurieux/partners/MANGGHA.jpg" alt="Logo of Manggha. Museum of Japanese Art and Technology" />
    </div>
    <div class="image">
      <img class="bigger" src="/lespritcurieux/partners/e-campus.jpg" alt="Logo de l'Université de Côme">
    </div>
    <div class="image">
      <img class="smaller" src="/lespritcurieux/partners/instytut-romanistyki.svg" alt="Logo de l'institut de romanistique">
    </div>
    <div class="image">
      <img src="/lespritcurieux/partners/université-de-bologne.jpg" alt="Logo de l'Université de Bologne">
    </div>   
    <div class="image">
      <img class="smaller" src="/lespritcurieux/partners/ccp.jpg" alt="Logo du centre de civilisation polonaise">
    </div>  
    <div class="image">
      <img src="/lespritcurieux/partners/lettres-sorbonne-universite.png" alt="Logo de Lettres Sorbonne Université">
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
    .over-size {
      width: 115%;
    }
  }
  .text {
    text-align: center;
    display: flex;
    flex-direction: column;
    .title {
      padding: 10px;
      font-size: larger;
      font-weight: 600;
    }
  }
}
</style>