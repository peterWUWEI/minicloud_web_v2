<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg-sd.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t("sustainability") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ sustainability.title }}</h2>
            <h5 class="description">
              {{ sustainability.content }}
            </h5>
            <img v-bind:src="sustainability.image_url" class="img-raised">
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
  name: 'sustainability',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      sustainability: {}
    }
  },
  methods: {
    async fetchSustainability() {
      const res = await axios.get('/sustainability');
      this.sustainability = res.data;
    }
  },
  async created() {
    await this.fetchSustainability();
  }
};
</script>
<style></style>
