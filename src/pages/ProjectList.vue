<template>
  <div>
    <div class="section">
      <div class="container" style="text-align: justify;">
        <center><h2 class="projects-page-title">{{$lang ==='FR' ? 'NOS PROJETS' : 'OUR PROJECTS'}}</h2></center>
        <loading-spinner v-if="! loaded"/>
        <div v-else v-for="category in categories" :key="category.name">
          <h3 class="project-category-title">{{ category[$lang] }}</h3>
          <router-link
            v-for="project in projects[category.name]"
            :key="project.id"
            :to="{ path: '/projects/' + project.id }"
          >
            <div class="row project-row">
              <div class="col-12 col-md-3 project-thumbnail-container">
                <img
                  class="project-thumbnail"
                  :src="project.coverPicture.url"
                />
              </div>
              <div class="col-12 col-md-9">
                <div>
                  <h4 class="project-title">{{ project[`title_${$lang}`] }}</h4>
                  <p class="preview">{{ project.preview }}</p>
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
import MainFooter from "@/layout/MainFooter";
import axios from "axios";
import LoadingSpinner from './components/LoadingSpinner'
export default {
  name: "projects",
  bodyClass: "projects-page",
  components: {
    LoadingSpinner
  },
  data() {
    return {
      loaded: false,
      categories: [
        {
          name: "show",
          EN: "Shows",
          FR: "Pièces",
        },
        {
          name: "collab",
          EN: "Collabs",
          FR: "Collaborations",
        },
        {
          name: "streetShow",
          EN: "Street shows",
          FR: "Spectacles en plein air",
        },
      ],
      projects: {},
    };
  },
  async mounted() {
    const projectListRequest = axios.get(
      `${process.env.VUE_APP_API_URL}/projects`
    );
    const projectsData = (await projectListRequest).data;
    console.log(projectsData);
    projectsData.forEach((proj) => {
      proj.preview = 
        proj.paragraphs[0]
        ? proj.paragraphs[0][`content_${this.$lang}`].substring(0, 200) + " . . ."
        : "";
    });
    const projects = {};
    this.categories.forEach((cat) => {
      projects[cat.name] = projectsData.filter((x) => x.type == cat.name);
    });
    this.projects = projects;
    this.loaded = true;
  },
};
</script>
<style lang="scss">
@import "../assets/scss/now-ui-kit/_variables.scss";

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
