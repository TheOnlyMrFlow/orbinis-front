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
      <div class="section" v-for="paragraph in project.paragraphs" :key="paragraph.id">
        
        <!-- <div class="container paragraph" style="text-align: justify;">
          <img
        style="float:left;margin:10px"
          src="img/eva.jpg"
          alt="Thumbnail Image"
        />
            {{paragraph.content}}
        </div> -->

        <div class="container" style="text-align: justify;">
          <div class="paragraph">
            <div class="row" v-if="paragraph.hasPicture">
              <div v-if="paragraph.pictureSide==='left'" class="col-md-6 paragraph-picture">
                <img style="float:left;margin:10px" :src="paragraph.picture.fullUrl" alt="Thumbnail Image"/>
              </div>
              <div class="col-md-6 paragraph-text">
                <h4>Lorem ipsum ta mere</h4>
                {{paragraph.content}}
              </div>
              <div v-if="paragraph.pictureSide!=='left'" class="col-md-6">
                <img style="float:left;margin:10px" :src="paragraph.picture.fullUrl" alt="Thumbnail Image"/>
              </div>
            </div>
            <div v-else>
              <div class="paragraph-text">
                <h4>Lorem ipsum ta mere</h4>
                {{paragraph.content}}
              </div>
            </div>
          </div>
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
      project: {
        coverPicture:{
          fullUrl: null
        },
        paragraphs:[]
      }
    };
  },
  async mounted () {
    const projectRequest = axios.get(`${process.env.VUE_APP_API_URL}/projects/${this.$route.params.id}`);
    const project = (await projectRequest).data; 
    project.coverPicture.fullUrl = `${process.env.VUE_APP_API_URL}${project.coverPicture.url}`;
    project.paragraphs = project.paragraphs.map(x => {
      x.content.replace('\n', '<br>');
      if (x.picture){
        x.hasPicture = true;
        x.picture.fullUrl = `${process.env.VUE_APP_API_URL}${x.picture.url}`;
      }
      else
        x.hasPicture = false;
      
      return x;
    });
    this.project = project;
  }
};
</script>
<style>
.paragraph-text {
  align-self: center;
}

.paragraph-picture {
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: center;
}
</style>