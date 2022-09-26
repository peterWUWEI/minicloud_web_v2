<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Minicloud
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Your E-Commerce Partner
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="nav-link" to="/services">
          <i class="now-ui-icons ui-2_settings-90"></i>
          <p>{{ $t("services") }}</p>
        </router-link>
      </li>
      <drop-down
        tag="li"
        :title="info_title()"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/about">
          <i class="now-ui-icons business_badge"></i> {{ $t("about") }}
        </nav-link>
        <nav-link to="/investor_info">
          <i class="now-ui-icons education_paper"></i> {{ $t("investors") }}
        </nav-link>
      </drop-down>
      <drop-down
        tag="li"
        :title="others_title()"
        icon="now-ui-icons design_bullet-list-67"
        class="nav-item"
      >
        <nav-link to="/news">
          <i class="now-ui-icons files_single-copy-04"></i> {{ $t("news") }}
        </nav-link>
        <nav-link to="/sustainability">
          <i class="now-ui-icons users_single-02"></i> {{ $t("sustainability") }}
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <!-- <LocaleSwitcher /> -->
      </li>
      <drop-down
        title="language"
        icon="now-ui-icons business_globe"
        class="nav-item"
      >
        <a class="dropdown-item" @click="changeLocale('jp')">
          日本語
        </a>
        <a class="dropdown-item" @click="changeLocale('en')">
          English
        </a>
        <a class="dropdown-item" @click="changeLocale('cn')">
          简体中文
        </a>
        <a class="dropdown-item" @click="changeLocale('tw')">
          繁體中文
        </a>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  },
  data() {
    return {
      selected: this.$i18n.locale,
      options: [
        { value: 'jp', text: '日本語' },
        { value: 'tw', text: '繁體中文' },
        { value: 'cn', text: '简体中文' },
        { value: 'en', text: 'English' },
      ],
    }
  },
  methods: {
    onChange(event) {
        this.$router.replace(this.switchLocalePath(event));
    },
    changeLocale(language) {
      console.log("language", language);
      this.$i18n.locale = language;
    },
    info_title() {
      return this.$i18n.messages[this.$i18n.locale].info
    },
    others_title() {
      return this.$i18n.messages[this.$i18n.locale].others
    }
  }
};
</script>

<style scoped></style>
