<template>
  <header class="absolute w-screen z-10 bg-sharkdark70">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="../assets/img/gogrumpy_40x35.png" alt="gogrumpy Logo"
            class="mr-2">
          <span class="font-semibold text-xl tracking-tight">gogrumpy</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded
            text-secondaryyellow border-secondaryyellow hover:text-white
            hover:border-white" @click="menuToggled = !menuToggled">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
          :class="menuToggled ? 'block' : 'hidden'">
          <div class="text-sm lg:flex-grow lg:flex lg:items-center">
            <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0
              text-secondaryyellow hover:text-white mr-4"
              :class="currentPage == '/' ? activeClass : ''">
              Dashboard
            </router-link>
            <router-link to="/about" class="block mt-2 lg:mt-0 lg:inline-block lg:mt-0
              text-secondaryyellow hover:text-white mr-4"
              :class="currentPage == '/about' ? activeClass : ''">
              About
            </router-link>
          </div>
          <div>
            <a href="https://github.com/lrotermund/gogrumpy-ui"
              class="bg-transparent hover:bg-white text-white hover:text-black font-bold py-2
                px-4 rounded inline-flex items-center border border-soli border-white mt-4
                lg:mt-0">
              <font-awesome-icon :icon="['fab', 'github']" class="mr-2" />
              <span>Github</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGithub);

export default Vue.extend({
  name: 'Header',
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
  data() {
    return {
      activeClass: 'underline',
      menuToggled: false,
    };
  },
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
});
</script>
