<template>
  <section>
    <div class="image">
      <img class="bigger" src="/UW.jpg" alt="Logo de l'Université de Varsovie" />
    </div>
    <div class="image">
      <img class="bigger" src="/BUW.jpg" alt="Logo de la bibliothèque de l'Université de Varsovie" />
    </div>
    <div class="image">
      <img src="/MANGGHA.jpg" alt="Logo of Manggha. Museum of Japanese Art and Technology" />
    </div>
    <div class="image">
      <img src="/Université-de-Poitiers.jpg" alt="Logo de l'Université de Poitiers" />
    </div>
    <div class="image">
      <img src="/inVisu.jpg" alt="Logo de inVisu" />
    </div>
    <div class="image"></div>
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
    .bigger {
      width: 90%;
    }
  }
}
</style>