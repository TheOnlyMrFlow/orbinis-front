<template>
  <div class="section" id="carousel">
    <div class="container" style="max-width: 100%;">
      <div class="row justify-content-center">
        <div class="col-12">
          <el-carousel height="500px" arrow.height="2000px">
            <el-carousel-item v-for="projet in projets" :key="projet.id">
              <parallax
                class="page-header-image d-block"
                :style="{ backgroundImage: 'url(' + projet.imageCouverture.fullUrl + ')'}"
              >
              </parallax>
              <div class="carousel-caption d-none d-md-block">
                <h5>{{projet.sousTitre}}</h5>
              </div>
              <router-link :to="{ path: '/projets/' + projet.id}">
                <div class="content-center">
                  <div class="container">
                    <h1 class="title">{{projet.titre}}</h1>
                  </div>
                </div>
              </router-link>
            </el-carousel-item>
            
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';
import axios from 'axios'

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  data() {
    return {
      projets: []
    }
  },
  async mounted() {
    const projectsRequest = axios.get(`${process.env.VUE_APP_API_URL}/projets`);
    this.projets = (await projectsRequest).data.map(x => {
      const res = x.Projet;
      res.imageCouverture.fullUrl = `${process.env.VUE_APP_API_URL}${res.imageCouverture.url}`
            
      return res;
    });    
  }
};
</script>
<style></style>
