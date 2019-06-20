<template>
  <div class="navbar">
    <div class="menu">
      <nuxt-link to="/">
        <div class="li">Accueil</div>
      </nuxt-link>
      <nuxt-link to="/gronkowski">
        <div class="li">Gronkowski</div>
      </nuxt-link>
      <nuxt-link to="/contact">
        <div class="li">Contact</div>
      </nuxt-link>
      <div class="languages">
        <div v-if="!displayDropdown" class="li" @mouseover="displayDropdown = true">
          FR
          <img src="/chevron_down.png" alt="Chevron down">
        </div>
        <div v-if="displayDropdown" @mouseleave="displayDropdown = false" class="dropdown">
          <div v-for="item in items" :key="item.lang" class="item">
            <nuxt-link to="">
              <span>{{ item.lang }}</span>
            </nuxt-link>
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
          lang: 'fr',
          to: '/'
        },
        {
          lang: 'pl',
          to: '/pl'
        }
      ]
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
        top: -39px;
        right: 30px;
        background-color: #fff;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border: solid 1px #ebebeb;
          &:last-child {
            border-top: none;
          }
          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
              background-color: #fafafa;
            }
          }
        }
      }
    }
  }
}
</style>
