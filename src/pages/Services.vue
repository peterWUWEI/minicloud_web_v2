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
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"> {{ $t("app_download") }}</h2>
            <h5 class="description">
              {{ services[0].service_content }}
            </h5>
            <img v-bind:src="services[0].image_url" class="img-raised">
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
          </div>
        </div>
      </div>
    </div>

    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"> {{ $t("our_services") }}</h2>
            <h5 class="description">
              {{ services[1].service_content }}
            </h5>
            <img v-bind:src="services[1].image_url" class="img-raised">
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
          </div>
        </div>
      </div>
    </div>

    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"> {{ $t("coopration") }}</h2>
            <h5 class="description">
              {{ services[2].service_content }}
            </h5>
            <img v-bind:src="services[2].image_url" class="img-raised">
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
