<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg-faq.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t("questions") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us" v-for="element in faqs" :key="element.id">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ element.title }}</h2>
            <h5 class="description display-text">
              {{ element.content }}
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
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'faq',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      faqs: []
    }
  },
  methods: {
    async fetchNews() {
      // const res = await axios.get('/news');
      // this.news = res.data;
    }
  },
  async created() {
    // await this.fetchNews();
  }
};
</script>
<style></style>
