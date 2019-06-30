<template>
  <section>
    <h2>{{ $t('contact.information') }}</h2>
    <p>
      <span>{{ $t('contact.firstContact.name') }}</span>
      <br />
      {{ $t('contact.firstContact.title') }}
      <br />
      {{ $t('contact.firstContact.mail') }}
      <br />
      {{ $t('contact.tel') }} +33 1 55 42 83 85
    </p>
    <p>
      <span>{{ $t('contact.secondContact.name') }}</span>
      <br />
      {{ $t('contact.secondContact.title') }}
      <br />
      {{ $t('contact.secondContact.mail') }}
    </p>
    <h2>{{ $t('contact.getInTouch') }}</h2>
    <p>
      {{ $t('contact.shlp') }}
      <br />
      {{ $t('contact.bpp') }}
      <br />6, quai d'Orléans
      <br />75004 Paris
    </p>
    <p>{{ $t('contact.tel') }} +33 1 55 42 91 97</p>
    <p>
      Accéder au site web :
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.bibliotheque-polonaise-paris-shlp.fr/"
      >{{ $t('contact.shlp-bpp-shorthand') }}</a>
    </p>
    <p>
      {{ $t('contact.map') }}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps/place/Soci%C3%A9t%C3%A9+Historique+et+Litt%C3%A9raire+Polonaise/@48.8513413,2.353512,17z/data=!3m1!4b1!4m5!3m4!1s0x47e671fcaeb442cd:0xff530c837c603ccd!8m2!3d48.8513413!4d2.355706"
      >{{ $t('contact.here') }}</a>
    </p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Colloque - L'esprit curieux - contact"
    }
  }
}
</script>

<style lang="scss" scoped>
h2,
p {
  text-align: center;
}

p span {
  font-size: 18px;
}
</style>