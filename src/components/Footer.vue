<template>
  <v-footer
    padless
    class="font-weight-this; overline"
  >
<!--     <v-col
      class="text-left"
      cols="6"
    >
      {{ $vuetify.lang.t('$vuetify.follow_us') }}:
      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-col> -->
    <v-col></v-col>

    <v-col
      class="text-right"
      cols="6"
    >      
      © ENAC {{ new Date().getFullYear() }} — <a href="https://github.com/brunobcfum/jdd-enac">Fork me</a>
      <a href="https://www.enac.fr/fr" >
        <img class="mb-n4 ml-2" src="https://www.enac.fr/themes/custom/enac/assets/images/logo_rf_enac.jpg" height="45"/>
      </a>
      <span
          @click="link"
          @mouseenter="changeText"
          @mouseleave="resetText"
          :color="color"
          class="row-pointer"
         >
        <v-icon small>mdi-satellite-uplink</v-icon>
      </span>

    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    color : "blue--text"
  }),
  methods: {
    link (evt) {
      if (!evt.ctrlKey) {
        alert("École nationale de l'aviation civile")
      } else if (evt.ctrlKey) {
        this.$router.push({
          name: 'Challenge'
        })
      }
    },
    changeText () {
      this.color = 'pink--text'
    },
    resetText () {
      this.color = 'blue--text'
    }
  }

}
</script>

<style scope>
.row-pointer {
  cursor: pointer;
}
</style>
