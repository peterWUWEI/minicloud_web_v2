<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg-news.jpeg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t("news") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us" v-for="element in orderedNews" :key="element.id">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ element.news_title }}</h2>
            <h5 class="description">
              {{ element.news_content }}
            </h5>
            <img v-bind:src="element.image_url" class="img-raised">
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
    name: 'news',
    bodyClass: 'landing-page',
    computed: {
      orderedNews() {
        return _.orderBy(this.news, 'id')
      }
    },
    data() {
      return {
        news: []
      }
    },
    methods: {
      async fetchNews() {
        const res = await axios.post('/news/content');
        this.news = res.data;
      }
    },
    async created() {
      await this.fetchNews();
    }
  };
</script>
<style></style>
