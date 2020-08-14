<template>
    <div>
      <div class="section">
        <div class="container" style="text-align: justify;">
        <center><h2 class="projects-page-title" >DISCOVER OUR PROJECTS</h2></center>
          <div v-for="category in categories" :key="category.name">
            <h2 class="project-category-title">{{category.en}}</h2>
            <router-link v-for="project in projects[category.name]" :key="project.id" :to="{ path: '/projects/' + project.id}">
              <div class="row project-row">
                <div class="col-md-3 project-thumbnail-container">
                  <img class="project-thumbnail" :src="project.coverPicture.url">
                </div>
                <div class="col-md-9">
                  <div>
                    <h3 class="project-title">{{project.title}}</h3>
                    <p>{{project.paragraphs[0] ? project.paragraphs[0].content : ''}}</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import MainFooter from '@/layout/MainFooter';
import axios from 'axios'
export default {
  name: 'projects',
  bodyClass: 'projects-page',
  components: {
      
    },
  data() {
    return {
      categories: [
        {
          name: 'piece',
          en: 'Shows',
          fr: "Pièces"
        },
        {
          name: 'collaboration',
          en: 'Collabs',
          fr: "Collaborations"
        },
        {
          name: 'openair',
          en: 'Open-airs',
          fr: "Open-airs"
        }
      ],
      projects: {}
    };
  },
  async mounted () {    
    const projectListRequest = axios.get(`${process.env.VUE_APP_API_URL}/projects`);
    const projectsData = (await projectListRequest).data;
    const projects = {};
    this.categories.forEach(cat => {
      projects[cat.name] = projectsData.filter(x => x.type == cat.name);
    });
    this.projects = projects;  
  }
};
</script>
<style lang="scss">

@import '../assets/scss/now-ui-kit/_variables.scss';

.project-thumbnail-container {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
}

.project-thumbnail {
  max-height: 100%;
}

.project-row {
  width: 80%;
  height: 200px;
  margin: 20px auto !important;
  padding: 20px 0;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: white;
}

a:last-child .project-row {
  border-style: none !important;
}

.project-row:hover {
  height: 200px;
  margin: 20px 0;
  padding: 20px 0;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: white;
  background-color: $primary-color;
}

.project-row div {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-row img {
  height: 100%;
  overflow: hidden;
}

.project-category-title {
  padding-bottom: 6px;
  border-bottom-style: solid;
  border-bottom-color: white;
  border-bottom-width: 1px;
}

.project-title {
  margin-bottom: 10px !important;
  padding: 0;
}

a {
  color: inherit !important; /* blue colors for links too */
  text-decoration: inherit !important; /* no underline */
}

.projects-page-title {
  margin: 50px;
}

</style>