<template>
    <div>
      <div class="page-header page-header-small">
        <parallax
          class="page-header-image"
          :style="{ backgroundImage: 'url(' + project.coverPicture.fullUrl + ')'}"
        >
        </parallax>
        <div class="content-center">
          <div class="container">
            <h1 class="title">{{project.title}}</h1>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Titre {{$route.params.id}}</h2>
            <h5 class="description">
              Sous-titre
            </h5>
          </div>
        </div>
      </div>
      <!-- <div class="separator separator-primary"></div> -->
      <div class="section" v-for="(paragraph, index) in project.paragraphs" :key="index">
        <div class="container" >
        
            {{paragraph.content}}
        

        </div>

      </div>
    </div>
</template>

<script>
import MainFooter from '@/layout/MainFooter';
import axios from 'axios'
export default {
  name: 'project',
  bodyClass: 'project-page',
  components: {
      
    },
  data() {
    return {
      project: {}
    };
  },
  async mounted () {
    const projectRequest = axios.get(`${process.env.VUE_APP_API_URL}/projects/${this.$route.params.id}`);
    this.project = (await projectRequest).data; 
    this.project.coverPicture.fullUrl = `${process.env.VUE_APP_API_URL}${this.project.coverPicture.url}`;
  }
};
</script>
<style></style>