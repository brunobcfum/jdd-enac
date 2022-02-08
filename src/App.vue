<template>
  <v-app>
    <Navigation v-on:toggleMenu="toggleMenu" v-bind:drawer="drawer"></Navigation>
    <Appbar v-on:toggleMenu="toggleMenu" v-bind:drawer="drawer"></Appbar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Appbar from '@/components/Appbar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    Appbar,
    Footer,
    Navigation
  },

  data: () => ({
    drawer: false
  }),
  methods: {
    toggleMenu () {
      this.drawer = !this.drawer
    }
  },
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
