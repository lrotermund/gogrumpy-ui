<template>
  <div class="flex-grow"
    style="background-size: cover; background-repeat: no-repeat;
           background-position: center center;"
    :style="{ backgroundImage: 'url(' + require('@/assets/img/app-background.jpg') + ')' }">
    <GamesDashboard />
  </div>
</template>

<script>
import GamesDashboard from '@/components/GamesDashboard.vue';

export default {
  name: 'Dashboard',
  components: {
    GamesDashboard,
  },
};
</script>
