<template>
    <div>
      <div class="section">
        <div class="container" style="text-align: justify;">
        <center><h2 class="projects-page-title" >OUR PROJECTS</h2></center>
          <div v-for="category in categories" :key="category.name">
            <h3 class="project-category-title">{{category.en}}</h3>
            <router-link v-for="project in projects[category.name]" :key="project.id" :to="{ path: '/projects/' + project.id}">
              <div class="row project-row">
                <div class="col-12 col-md-3 project-thumbnail-container">
                  <img class="project-thumbnail" :src="project.coverPicture.formats.medium.url">
                </div>
                <div class="col-12 col-md-9">
                  <div>
                    <h4 class="project-title">{{project.title}}</h4>
                    <p class="preview">{{project.preview}}</p>
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
    projectsData.forEach(proj => {
      if (! proj.paragraphs[0]) proj.preview = "";
      proj.preview = proj.paragraphs[0].content.substring(0, 200) + " . . .";
    })
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

.thumb1 { 
  width: 250px;
  height: 250px;
}

@media only screen and (max-width: 768px) {
 
  
  .project-row {
    flex-direction: row-reverse;
  }

  .project-title {
    margin-top: 0px;
    text-align: center;
  }

  .project-thumbnail-container {
    display: none !important;
  }
}


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
  border-bottom-style: solid;
  border-width: 1px;
  border-color: white;
  background-color: $primary-color;
}

.project-row div {
  max-height: 20vh;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-row img {
  height: 80%;
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