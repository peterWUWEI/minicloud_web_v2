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

    <div class="section section-about-us" v-for="element in orderedAbout" :key="element.title">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ element[$i18n.locale].title }}</h2>
            <img v-bind:src="element[$i18n.locale].image_url" class="img-raised">
            <h5 class="description">
              {{ element[$i18n.locale].content }}
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
            <div class="col-md-4" v-for="team_member in orderedTeamMembers" :key="team_member.id">
              <div class="team-player">
                <img
                  :src="team_member.image_url"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">{{ team_member[$i18n.locale].name }}</h4>
                <p class="category text-primary">{{ team_member[$i18n.locale].title }}</p>
                <p class="description">
                  {{ team_member[$i18n.locale].desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  const _ = require('lodash');

  export default {
    name: 'about',
    bodyClass: 'landing-page',
    computed: {
      orderedAbout() {
        return _.orderBy(this.about, 'id')
      },
      orderedTeamMembers() {
        return _.orderBy(this.team_members, 'id')
      }
    },
    data() {
      return {
        about: [],
        team_members: []
      }
    },
    methods: {
      async fetchAbout() {
        const res = await axios.post('/about/content');
        this.about = res.data;
      },
      async fetchTeamMembers() {
        const res = await axios.post('/teammembers/content');
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
