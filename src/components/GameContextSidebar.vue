<template>
  <div class="h-screen bg-sharkdark absolute top-0 bottom-0 flex flex-col z-20 shadow-left-2xl
  transition-absolute duration-200 ease-in-out md:border-l-2 border-black w-full md:w-600
  overflow-y-auto" :class="{
    'right-0' : open,
    '-right-full md:-right-600' : open === false,
  }">
    <div style="background-size: cover; background-repeat: no-repeat;
      background-position: bottom center; background-color: transparent;"
      class="w-full border-b-2 border-black relative min-h-315 sm:min-h-450" :style="{
        backgroundImage: 'url(' + game.previewImage.src + ')'
      }">
      <div class="p-4 flex justify-end text-secondaryyellow text-3xl">
        <button @click="closeContextMenu()">
          <font-awesome-icon :icon="['far', 'times-circle']"/>
        </button>
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-5 flex flex-col sm:flex-row justify-between">
        <button class="bg-orange-600 hover:bg-sharkdark text-white font-bold py-2 px-4 rounded
          text-2xl border-2 border-sharkdark flex-grow mb-2 sm:mb-0 sm:mr-2 transition duration-200
          ease-in-out hover:border-white pvp-glowing">
          PVP Spiel starten
        </button>
        <button class="bg-gopherblue hover:bg-sharkdark text-black hover:text-white font-bold py-2
          px-4 rounded text-2xl border-2 border-sharkdark flex-grow sm:ml-2 transition duration-200
          ease-in-out hover:border-white pve-glowing">
          PVE Spiel starten
        </button>
      </div>
    </div>
    <div class="p-4">
      <h1 class="text-secondaryyellow text-3xl mb-3">{{ game.name }}</h1>
      <div class="text-xl text-white" v-html="game.longDescription"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimesCircle);

export default Vue.extend({
  name: 'GameContextSidebar',
  computed: mapState({
    open() {
      return this.$store.state.contextSidebarOpen;
    },
    game() {
      return this.$store.state.contextSidebarGame;
    },
  }),
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  methods: {
    closeContextMenu() {
      this.$store.dispatch('closeContextSidebar');
    },
  },
});
</script>

<style>
.pvp-glowing:hover {
  animation: pvp-glow 1s infinite alternate;
}

@keyframes pvp-glow {
  from {
    box-shadow: 0 0 10px -10px #ffca7d;
  }
  to {
    box-shadow: 0 0 10px 10px #ff9700;
  }
}

.pve-glowing:hover {
  animation: pve-glow 1s infinite alternate;
}

@keyframes pve-glow {
  from {
    box-shadow: 0 0 10px -10px #7fd5ea;
  }
  to {
    box-shadow: 0 0 10px 10px #00c4f4;
  }
}
</style>
