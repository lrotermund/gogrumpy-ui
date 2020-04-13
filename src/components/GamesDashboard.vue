<template>
  <div class="container mx-auto mt-20">
    <div class="flex mb-4">
      <div v-for="game in games" :key="game.id" class="w-full md:w-1/2 lg:w-1/3">
        <Game v-bind:game="game" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { v4 as uuid } from 'uuid';
import Game from './Game.vue';
import Boardgame from '../models/Boardgame';
import Image from '../models/Image';

const previewImage = new Image('/demo/robowars.png', 'robowars.png', 'image/png');
const game = new Boardgame(uuid(), previewImage, 'RoboWars', 'In einem post-apokalyptischen Zeitalter kämpfen verbliebene Clans um die Rohstoffvorherrschaft.');

export default Vue.extend({
  name: 'GamesDashboard',
  data() {
    return {
      games: [game],
    };
  },
  components: {
    Game,
  },
});
</script>
