<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg-contact.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">{{ $t("contact") }}</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us" v-for="contact in orderedContacts" :key="contact.id">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ contact.title }}</h2>
            <h5 class="description display-text">
            {{ contact.content }}
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
  import { Button, FormGroupInput } from '@/components';
  import axios from 'axios';
  const _ = require('lodash');

  export default {
    name: 'contact',
    bodyClass: 'landing-page',
    components: {
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    computed: {
      orderedContacts() {
        return _.orderBy(this.contacts, 'id')
      }
    },
    data() {
      return {
        contacts: []
      }
    },
    methods: {
      async fetchContacts() {
        const res = await axios.get('/contacts');
        this.contacts = res.data;
      }
    },
    async created() {
      await this.fetchContacts();
    }
  };
</script>
<style></style>
