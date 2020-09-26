<template>
  <div class="section section-team text-center">
    <div class="container">
      <h2 class="title">Members</h2>
      <div class="team">
        <div class="row team-row">
          <div class="col-md-4" v-for="member in teamMembers" :key="member.id">
            <div class="team-player">
              <img
                src="img/avatar.jpg"
                alt="Thumbnail Image"
                class="rounded-circle img-fluid img-raised"
              />
              <h4 class="title">{{member.name}}</h4>
              <p class="category text-primary">Model</p>
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
import axios from "axios";
export default {
  name: "teamSection",
  bodyClass: "team-section",
  components: {},
  data() {
    return {
      teamMembers: [],
    };
  },
  async mounted() {
    const teamMembersRequest = await axios.get(`${process.env.VUE_APP_API_URL}/team-members`);
    this.teamMembers = teamMembersRequest.data;
    
  }
};
</script>
<style lang="scss">
.team-row {
    justify-content: center;
}
</style>
