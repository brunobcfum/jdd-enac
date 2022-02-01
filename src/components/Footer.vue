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
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
