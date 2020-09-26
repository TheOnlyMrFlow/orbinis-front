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
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{shortDescription.titre}}</h2>
            <h5 class="description">
              {{shortDescription.contenu}}
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/company1.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus tincidunt orci pretium ultrices. Morbi in lectus vel augue suscipit facilisis. Quisque sit amet tincidunt tortor, eget viverra elit. "
                  <br />
                  <br />
                  <small>-Lorem ipsum</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/company2.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/company3.jpg')"
              ></div>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus tincidunt orci pretium ultrices. Morbi in lectus vel augue suscipit facilisis. Quisque sit amet tincidunt tortor, eget viverra elit. Nam ut odio vitae nisi lobortis hendrerit. Nulla urna lectus, viverra vitae sem sed, interdum pretium lorem.
              </p>
              <p>
                Vivamus vestibulum purus ac diam consectetur commodo. Nulla facilisi. Aenean eleifend enim magna, sed ornare justo mattis non. Fusce venenatis aliquet enim, ut auctor ante rutrum ut. Sed pharetra pretium nisi, at tincidunt diam posuere rutrum. Nulla congue urna ut lacinia sagittis. Mauris accumsan sollicitudin urna id dignissim. Sed vel rutrum diam.
              </p>
              <p>
                Maecenas elit ipsum, gravida non quam id, bibendum egestas dolor. Duis tempor, erat ut maximus imperdiet, nunc magna efficitur leo, at ultrices nisi odio ut arcu. Vivamus dictum arcu eu lorem malesuada tincidunt. Donec tincidunt orci nec tempus venenatis. Curabitur a massa ultricies lorem varius maximus.
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
import axios from 'axios';
export default {
  name: 'company',
  bodyClass: 'company-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    CarouselSection,
    ContactForm,
    TeamSection
  },
  data() {
    return {
      shortDescription: {
        titre: '',
        contenu: ''
      }
    };
  },
  async mounted () {
    const shortDescRequest = axios.get(`${process.env.VUE_APP_API_URL}/company-description-courte`);
    this.shortDescription = (await shortDescRequest).data.section;
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
