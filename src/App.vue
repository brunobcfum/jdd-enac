<template>
  <v-app>
    <Appbar></Appbar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    Appbar,
    Footer
  },

  data: () => ({
    //
  }),

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Some Default Title';
      }
    },
  }
};
</script>
