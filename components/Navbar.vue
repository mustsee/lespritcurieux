<template>
  <div class="navbar">
    <div class="menu">
      <nuxt-link :to="$i18n.path('')">
        <div class="li">{{ $t('navBar.home') }}</div>
      </nuxt-link>
      <nuxt-link :to="$i18n.path('gronkowski')">
        <div class="li">{{ $t('navBar.gronkowski') }}</div>
      </nuxt-link>
      <nuxt-link :to="$i18n.path('contact')">
        <div class="li">{{ $t('navBar.contact') }}</div>
      </nuxt-link>
      <nuxt-link :to="$i18n.path('partners')">
        <div class="li partners">{{ $t('navBar.partners') }}</div>
      </nuxt-link>
      <div class="languages">
        <div v-if="!displayDropdown" class="li" @mouseover="displayDropdown = true">
          {{ $store.state.locale.toUpperCase() }}
          <img src="/chevron_down.png" alt="Chevron down" />
        </div>
        <div v-if="displayDropdown" @mouseleave="displayDropdown = false" class="dropdown">
          <div v-for="item in items" :key="item.lang" class="item">
            <a @click="onChangeLanguage(item)">
              <span>{{ item.lang }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayDropdown: false,
      items: [
        {
          lang: 'fr'
        },
        {
          lang: 'pl'
        },
        {
          lang: 'en'
        }
      ]
    }
  },
  methods: {
    onChangeLanguage(item) {
      const lang = this.$store.state.locale
      if (lang === 'fr') {
        this.$router.push({ path: `/${item.lang}${this.$route.fullPath}` })
      } else if (item.lang === 'fr') {
        this.$router.push({
          path: `${this.$route.fullPath.replace(/^\/[^\/]+/, '')}`
        })
      } else {
        this.$router.push({
          path: `${this.$route.fullPath.replace(`${lang}`, `${item.lang}`)}`
        })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.navbar {
  @media (min-width: 768px) {
    align-self: center;
    width: 720px;
  }
  @media (min-width: 991px) {
    align-self: center;
    width: 940px;
  }
  @media (min-width: 1200px) {
    align-self: center;
    width: 1010px;
  }
  .menu {
    border-top: solid 1px #ebebeb;
    border-bottom: solid 1px #ebebeb;
    padding: 13px 0; // 17px
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 2px;
    font-family: 'Lato', 'sans-serif';
    list-style: none;
    display: flex;
    a {
      text-decoration: none;
      color: inherit;
    }
    .li {
      margin-right: 30px;
      cursor: pointer;
      &:hover {
        color: #b49543;
      }
    }
    .partners {
      @media (max-width: 768px) {
        display: none;
      }
    }
    .languages {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      position: relative;
      min-width: 48px;
      .li {
        width: 48px;
        display: flex;
        justify-content: center;
        @media (max-width: 600px) {
          margin-right: 0;
        }
        display: flex;
        img {
          height: 12px;
          display: flex;
          align-self: center;
          color: red;
        }
        &:hover {
          color: inherit;
        }
      }
      .dropdown {
        @media (max-width: 600px) {
          right: 0;
        }
        position: absolute;
        top: -64px;
        right: 30px;
        background-color: #fff;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border: solid 1px #ebebeb;
          border-radius: 50%;
          &:last-child {
            border-top: none;
          }
          &:first-child {
            border-bottom: none;
          }
          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
            &:hover {
              background-color: #fafafa;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
