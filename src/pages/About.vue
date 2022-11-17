<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg-about.jpeg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t("about") }}</h1>
        </div>
      </div>
    </div>

    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ $t("company_info") }}</h2>
            <img v-bind:src="about[0].image_url" class="img-raised">
            <h5 class="description">
              {{ about[0].content }}
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
          </div>
        </div>
      </div>
    </div>

    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">{{ $t("our_team") }}</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player" v-for="team_member in team_members" :key="team_member.id">
                <img
                  :src="team_member.image_url"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">{{ team_member.name }}</h4>
                <p class="category text-primary">{{ team_member.title }}</p>
                <p class="description">
                  {{ team_member.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ $t("mindset") }}</h2>
            <img v-bind:src="about[0].image_url" class="img-raised">
            <h5 class="description">
              {{ about[1].content }}
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'about',
    bodyClass: 'landing-page',
    data() {
      return {
        about: [],
        team_members: []
      }
    },
    methods: {
      async fetchAbout() {
        const res = await axios.get('/about');
        this.about = res.data;
      },
      async fetchTeamMembers() {
        const res = await axios.get('/teammembers');
        this.team_members = res.data
      }
    },
    async created() {
      await this.fetchAbout();
      await this.fetchTeamMembers();
    }
  };
</script>
<style></style>
