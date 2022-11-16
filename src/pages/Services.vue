<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg-services.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t("services") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us" v-for="service in services" :key="service.id">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"> {{ service.service_title }}</h2>
            <h5 class="description">
              {{ service.service_content }}
            </h5>
            <img v-bind:src="service.image_url" class="img-raised">
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
  import axios from 'axios';

  export default {
    name: 'services',
    bodyClass: 'landing-page',
    components: {
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    data() {
      return {
        services: []
      }
    },
    methods: {
      async fetchServices() {
        const res = await axios.get('/services');
        this.services = res.data;
      }
    },
    async created() {
      await this.fetchServices();
    }
  };
</script>
<style></style>
