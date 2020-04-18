<template>
  <div class="flex-grow"
    style="background-size: cover; background-repeat: no-repeat;
           background-position: center center;"
    :style="{ backgroundImage: 'url(' + require('@/assets/img/app-background.jpg') + ')' }">
    <GamesDashboard/>
    <GameContextSidebar/>
  </div>


</template>

<script>
import GamesDashboard from '@/components/GamesDashboard.vue';
import GameContextSidebar from '@/components/GameContextSidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    GamesDashboard,
    GameContextSidebar,
  },
};
</script>
