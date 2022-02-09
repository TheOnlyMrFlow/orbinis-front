<template>
  <div class="landing">
    <div class="page-header page-header-small">
    <carousel-section></carousel-section>
      <!-- <parallax
        class="page-header-image"
        style="background-image: url('img/company-parallax.jpg')"
      >
      </parallax> -->
      
    </div>
    <div class="mobile-landing">
      <h2>ORBINIS</h2>
    </div>
    <loading-spinner v-if="! loadedDescription"/>
    <div v-else class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{shortDescription[`title_${$lang}`]}}</h2>
            <h5 class="description" style="white-space: pre-line;">
              {{shortDescription[`content_${$lang}`]}}
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                :style="'background-image: url(' + shortDescription.image1.url + ')'"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  {{shortDescription[`sideQuoteContent_${$lang}`]}}
                  <br />
                  <br />
                  <small>{{shortDescription[`sideQuoteAuthor_${$lang}`]}}</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                :style="'background-image: url(' + shortDescription.image3.url + ')'"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                :style="'background-image: url(' + shortDescription.image2.url + ')'"
              ></div>
              <h3>
                {{shortDescription[`title2_${$lang}`]}}
              </h3>
              <p>
              {{shortDescription[`content2_${$lang}`]}}  
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/projects">
          <n-button type="primary" color="danger" round size="lg">{{$lang === 'FR' ? 'Découvrez nos projets' : 'Discover our projects'}}</n-button>
        </router-link>
      </div>
    </div>
    <team-section></team-section>
    <contact-form>
    </contact-form>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import CarouselSection from './components/CarouselSection';
import ContactForm from './components/ContactForm';
import TeamSection from './components/TeamSection';
import LoadingSpinner from './components/LoadingSpinner'
import axios from 'axios';
export default {
  name: 'company',
  bodyClass: 'company-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    CarouselSection,
    ContactForm,
    TeamSection,
    LoadingSpinner
  },
  data() {
    return {
      loadedDescription: false,
      shortDescription: {}
    };
  },
  async mounted () {
    const shortDescRequest = axios.get(`${process.env.VUE_APP_API_URL}/company-short-description`);
    this.shortDescription = (await shortDescRequest).data.section;
    this.loadedDescription = true;
  }
};
</script>

<style lang="scss">

@import '../assets/scss/now-ui-kit/_variables.scss';

.landing {
  @media only screen and (max-width: 768px) {
  .page-header {
    display: none;
  }

  .mobile-landing {
    display: flex !important;
  }
}

.mobile-landing {
  display: none;
  height: 100vh;
  width: 100vw;
  background: $black-bg;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 200;
  /* position: absolute; */
  top: -50px;
  color: white;
}
}



</style>
