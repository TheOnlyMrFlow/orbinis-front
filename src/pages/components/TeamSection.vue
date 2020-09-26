<template>
  <div class="section section-team text-center">
    <div class="container">
      <h2 class="title">{{$lang === 'FR' ? 'Notre équipe' : 'The team'}}</h2>
      <loading-spinner  v-if="! loaded"/>
      <div v-else class="team">
        <div class="row team-row">
          <div class="col-md-4" v-for="member in teamMembers" :key="member.id">
            <div class="team-player">
              <img
                :src="member.picture.url"
                alt="Thumbnail Image"
                class="rounded-circle img-fluid img-raised"
              />
              <h4 class="title">{{member.name}}</h4>
              <p class="category text-primary">{{member[`role_${$lang}`]}}</p>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget lectus tincidunt orci pretium ultrices. Morbi in lectus vel
                augue suscipit facilisis. Quisque sit amet tincidunt tortor,
                eget viverra elit.
              </p>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-facebook-square"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainFooter from "@/layout/MainFooter";
import LoadingSpinner from './LoadingSpinner';
import axios from "axios";
export default {
  name: "teamSection",
  bodyClass: "team-section",
  components: {
    LoadingSpinner
  },
  data() {
    return {
      teamMembers: [],
      loaded: false
    };
  },
  async mounted() {
    const teamMembersRequest = await axios.get(`${process.env.VUE_APP_API_URL}/team-members`);
    this.teamMembers = teamMembersRequest.data;
    this.loaded = true;
    
  }
};
</script>
<style lang="scss">  
.team-row {
    justify-content: center;
}
</style>
