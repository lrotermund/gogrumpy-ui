<template>
  <div class="relative"
    style="background-size: contain; background-repeat: no-repeat;
           background-position: bottom center; height: 300px;"
    :style="{ backgroundImage: 'url(' + game.previewImage.src + ')' }">
    <div class="absolute bottom-0 left-0 right-0 bg-sharkdark70 p-4 overflow-hidden">
      <strong class="text-secondaryyellow">{{ game.name }}</strong>
      <p class="text-white mt-2">{{ game.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Boardgame from '../models/Boardgame';

export default Vue.extend({
  name: 'Game',
  props: {
    game: Boardgame,
  },
});
</script>
