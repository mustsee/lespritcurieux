<template>
  <section>
    <h1>{{ $t('gronkowski.firstSection.title') }}</h1>
    <p>{{ $t('gronkowski.firstSection.firstParagraph') }}</p>
    <p>{{ $t('gronkowski.firstSection.secondParagraph') }}</p>
    <p>{{ $t('gronkowski.firstSection.thirdParagraph') }}</p>
    <h2>{{ $t('gronkowski.secondSection.title') }}</h2>
    <div class="portrait">
      <img src="/lespritcurieux/camille_gronkowski.png" alt="Portrait de Camille Gronkowski" />
    </div>
    <p>{{ $t('gronkowski.secondSection.firstParagraph') }}</p>
    <p>{{ $t('gronkowski.secondSection.secondParagraph') }}</p>
    <p>{{ $t('gronkowski.secondSection.thirdParagraph') }}</p>
    <p>{{ $t('gronkowski.secondSection.fourthParagraph') }}</p>
    <p>{{ $t('gronkowski.secondSection.fifthParagraph') }}</p>
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
.portrait {
  text-align: center;
  padding-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 991px) {
    margin-bottom: 15px;
  }
}
</style>