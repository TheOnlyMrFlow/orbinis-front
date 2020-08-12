<template>
    <div>
      <div class="page-header page-header-mini" style="height: 200px">
        <parallax
          class="page-header-image"
          :style="{ backgroundImage: 'url(' + project.coverPicture.url + ')' }"
        >
        </parallax>
        <div class="mask"></div>
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
      <div class="section">
        
        <!-- <div class="container paragraph" style="text-align: justify;">
          <img
        style="float:left;margin:10px"
          src="img/eva.jpg"
          alt="Thumbnail Image"
        />
            {{paragraph.content}}
        </div> -->

        <div class="container" style="text-align: justify;">
          <div class="paragraph" v-for="paragraph in project.paragraphs" :key="paragraph.id">
            <div class="row" v-if="paragraph.hasPicture">
              <div v-if="paragraph.pictureSide==='left'" class="col-md-6 paragraph-picture">
                <img style="float:left;margin:10px" :src="paragraph.picture.url" alt="Thumbnail Image"/>
              </div>
              <div class="col-md-6 paragraph-text">
                <h4>Lorem ipsum ta mere</h4>
                {{paragraph.content}}
              </div>
              <div v-if="paragraph.pictureSide!=='left'" class="col-md-6 paragraph-picture">
                <img style="float:left;margin:10px" :src="paragraph.picture.url" alt="Thumbnail Image"/>
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
        paragraphs:[],
      },
      //parallaxBg: '-webkit-linear-gradient(top, rgba(30,30,30,0) 0%, rgba(30,30,30,0) 60%, rgba(30,30,30,0.8) 100% ), url(http://localhost:1337/uploads/confhumain_5e6257d57a.png)'
      //parallaxBg: '-webkit-gradient(linear, left top, 0% 80%, from(rgba(37,37,37,0)), to(rgba(30,30,30,0.97))), url(http://localhost:1337/uploads/confhumain_5e6257d57a.png)'
      parallaxBg: 'url(http://localhost:1337/uploads/confhumain_5e6257d57a.png)'
    };
  },
  async mounted () {
    const projectRequest = axios.get(`${process.env.VUE_APP_API_URL}/projects/${this.$route.params.id}`);
    const project = (await projectRequest).data; 
    project.paragraphs = project.paragraphs.map(x => {
      x.content.replace('\n', '<br>');
      if (x.picture){
        x.hasPicture = true;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 2;
  background-image: -webkit-linear-gradient(top, rgba(30,30,30,0) 0%, rgba(37,37,37,0.97) 100% );
}
</style>