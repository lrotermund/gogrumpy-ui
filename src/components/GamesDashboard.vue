<template>
  <div class="container mx-auto mt-20">
    <div class="flex mb-4">
      <div v-for="game in games" :key="game.id" class="w-full md:w-1/2 lg:w-1/3"
        @click="toggleContextMenu(game)">
        <Game :game="game"/>
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
const game = new Boardgame(
  uuid(),
  previewImage,
  'RoboWars',
  'In einem post-apokalyptischen Zeitalter kämpfen verbliebene Clans um die Rohstoffvorherrschaft.',
  `
  <p>
    Die Welt ist am Ende, es gibt keine Ressourcen mehr und um das Wenige verbliebene müssen 
    die bitter verfeindeten Clans untereinander kämpfen.
  </p>
  <p class="mt-2">
    Programmiere deinen Robo mit dem richtigen Go-Code um deine Gegner auszuschalten und um an die 
    verbliebenen Ressourcen zu gelangen.
  </p>
  `,
);

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
  methods: {
    toggleContextMenu(toggledGame: Boardgame) {
      this.$store.dispatch('toggleContextSidebar', { game: toggledGame });
    },
  },
});
</script>
