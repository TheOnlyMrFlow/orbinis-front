<template>
  <div class="section" id="carousel">
    <div class="container" style="max-width: 100%;">
      <div class="row justify-content-center">
        <div class="col-12">
          <el-carousel height="500px" arrow.height="2000px" :interval="2000">
            <el-carousel-item v-for="project in projects" :key="project.id">
              <parallax
                class="page-header-image d-block"
                :style="{ backgroundImage: 'url(' + project.coverPicture.url + ')'}"
              >
              </parallax>
              <div class="carousel-caption d-none d-md-block">
                <h5>{{project[`subTitle_${$lang}`]}}</h5>
              </div>
              <router-link :to="{ path: '/projects/' + project.id}">
                <div class="content-center">
                  <div class="container">
                    <h1 class="title">{{project[`title_${$lang}`]}}</h1>
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
      projects: []
    }
  },
  async mounted() {
    const projectsRequest = axios.get(`${process.env.VUE_APP_API_URL}/projects`);
    this.projects = (await projectsRequest).data;
  }
};
</script>
<style></style>
