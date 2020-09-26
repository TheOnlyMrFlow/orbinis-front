<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Orbinis
      </router-link>
      <!-- <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover> -->
    </template>
    <template slot="navbar-menu">
      <!-- <drop-down
        tag="li"
        title="Components"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons business_chart-pie-36"></i> All components
        </nav-link>
        <a
          href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down> -->


      <!-- <drop-down
              tag="li"
              title="Projects"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
        <nav-link to="/projects#shows">
          <i class="now-ui-icons education_paper"></i> Repertoire
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Collaborations
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Open airs
        </nav-link>
      </drop-down> -->

      <li class="nav-item">
        <router-link to="/projects"
          class="nav-link"
        >
          <!-- <i class="now-ui-icons business_briefcase-24"></i> -->
          <p>{{$lang ==='FR' ? 'Projets' : 'Projects'}}</p>
        </router-link>
      </li>


      <!-- <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_share-66"></i>
          <p>Upgrade to PRO</p>
        </a>
      </li> -->

      <li class="nav-item">
        <router-link to="/contact"
          class="nav-link"
        >
          <p>{{$lang ==='FR' ? 'Contactez nous' : 'Contact us'}}</p>
        </router-link>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          :title="$lang ==='FR' ? 'Suivez-nous sur Twitter !' : 'Follow us on Twitter !'"
          data-placement="bottom"
          href=""
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          :title="$lang ==='FR' ? 'Aimez notre page Facebook !' : 'Like us on Facebook !'"
          data-placement="bottom"
          href="https://www.facebook.com/Compagnie-Orbinis-100228168447728"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          :title="$lang ==='FR' ? 'Suivez-nous sur Instagram !' : 'Follow us on Instagram !'"
          data-placement="bottom"
          href="https://www.instagram.com/compagnie.orbinis/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
      <li class="nav-item lang" :class="{selected: $lang === 'FR'}" @click="setLang('FR')">
        <a
          class="nav-link"
          rel="tooltip"
          :title="$lang ==='FR' ? 'Passer le site en Français' : 'Turn the site in French'"
          data-placement="bottom"
          href="/#"
        >
        <span>fr</span>
        </a>
      </li>
      <li class="nav-item lang" :class="{selected: $lang === 'EN'}" @click="setLang('EN')">
        <a
          class="nav-link"
          rel="tooltip"
          :title="$lang ==='FR' ? 'Passer le site en Anglais' : 'Turn the site in English'"
          data-placement="bottom"
          href="/#"
        >
        <span>en</span>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    // DropDown,
    Navbar,
    // NavLink,
    [Popover.name]: Popover
  },
  methods: {
    setLang(lang) {
      this.$lang = lang;
      localStorage.setItem('lang', lang);
      this.$router.go();
    }
  }
};
</script>

<style lang="scss">
.lang {
  &.selected {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media only screen and (min-width: 992px) {
    border-radius: 50%;
  }
}
</style>