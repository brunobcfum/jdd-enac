<template>
  <v-app>
    <Appbar></Appbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Appbar from '@/components/Appbar'

export default {
  name: 'App',

  components: {
    Appbar
  },

  data: () => ({
    //
  }),
};
</script>
