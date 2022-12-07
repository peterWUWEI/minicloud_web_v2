<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg-invest.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t("investors") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us" v-for="ele in orderedInvestorInfo" :key="ele.title">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"> {{ ele[$i18n.locale].title }}</h2>
            <h5 class="description">
              {{ ele[$i18n.locale].content }}
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
  import axios from 'axios';
  const _ = require('lodash');

  export default {
    name: 'investor_info',
    bodyClass: 'landing-page',
    computed: {
      orderedInvestorInfo() {
        return _.orderBy(this.investor_info, 'id')
      }
    },
    data() {
      return {
        investor_info: []
      }
    },
    methods: {
      async fetchInvestorInfo() {
        const res = await axios.post('/investor_info/content');
        this.investor_info = res.data;
      }
    },
    async created() {
      await this.fetchInvestorInfo();
    }
  };  
</script>
<style></style>
