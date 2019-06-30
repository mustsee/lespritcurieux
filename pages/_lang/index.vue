<template>
  <section>
    <h1>{{ $t('home.title') }}</h1>
    <p>{{ $t('home.presentation') }}</p>
    <h2>{{ $t('home.firstSection.title') }}</h2>
    <p>{{ $t('home.firstSection.firstParagraph') }}</p>
    <p>{{ $t('home.firstSection.secondParagraph') }}</p>
    <h2>{{ $t('home.secondSection.title') }}</h2>
    <p>{{ $t('home.secondSection.firstParagraph') }}</p>
    <h2>{{ $t('home.thirdSection.title') }}</h2>
    <p>{{ $t('home.thirdSection.firstParagraph') }}</p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title:
        "Colloque - L'esprit curieux - Collectionner en Europe (de Vasari à nos jours) - Paris, 24 et 25 octobre 2019"
    }
  }
}
</script>