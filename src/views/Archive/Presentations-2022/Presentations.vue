<template>
  <v-container>
    <v-card>
    <v-toolbar
      dark
      prominent
      :src="require('../../../assets/images/agenda.jpg')"
    >

     <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.menu.presentations') }}</v-toolbar-title>

    </v-toolbar>
    <v-tabs>
      <v-tab>
        <v-icon left>mdi-school</v-icon>
        1A
      </v-tab>
      <v-tab>
        <v-icon left>mdi-school</v-icon>
        2A
      </v-tab>
      <v-tab>
        <v-icon left>mdi-school</v-icon>
        3A
      </v-tab>
      <v-tab-item>
        <Presentations1a/>
      </v-tab-item>
      <v-tab-item>
        <Presentations2a/>
      </v-tab-item>
      <v-tab-item>
        <Presentations3a/>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </v-container>
</template>

<script>
import Presentations1a from '@/views/Presentations/Presentations1a.vue'
import Presentations2a from '@/views/Presentations/Presentations2a.vue'
import Presentations3a from '@/views/Presentations/Presentations3a.vue'

export default {
  components: {
    Presentations1a,
    Presentations2a,
    Presentations3a,
  },
  data () {
    return {
      tab: null
    }
  }
}
</script>

<style>

</style>
