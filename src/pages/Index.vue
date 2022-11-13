<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo" src="img/now-logo.png" alt="" />
          <h1 class="h1-seo">Minicloud</h1>
          <h3>{{$t("slogan")}}</h3>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title"></h2>
            <h5 class="description">
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!-- <signup-form></signup-form> -->
    <!-- <examples-section></examples-section> -->
    <!-- <download-section></download-section> -->
  </div>
</template>
<script>
import { Parallax } from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax
  }
};
</script>
<style></style>
