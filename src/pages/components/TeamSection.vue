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
                {{member[`description_${$lang}`]}}
              </p>
              <a v-if="member.twitter && member.twitter.length > 0" :href="member.twitter" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-twitter"></i
              ></a>
              <a v-if="member.instagram && member.instagram.length > 0" :href="member.twitter" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-instagram"></i
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
