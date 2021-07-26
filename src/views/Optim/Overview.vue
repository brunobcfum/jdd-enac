<template>
  <v-container>
    <v-card>
    <v-toolbar
      dark
      prominent
      :src="require('../../assets/images/Optim.jpg')"
    >

     <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.area.optim') }}</v-toolbar-title>

    </v-toolbar>
    <v-tabs>
      <v-tab>
        <v-icon left>mdi-antenna</v-icon>
        {{ $vuetify.lang.t('$vuetify.area.description') }}
      </v-tab>
      <v-tab>
        <v-icon left>mdi-school</v-icon>
        {{ $vuetify.lang.t('$vuetify.area.students') }}
      </v-tab>
      <v-tab-item>
        <Description/>
      </v-tab-item>
      <v-tab-item>
        <Students/>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </v-container>
</template>

<script>
import Description from '@/views/Optim/Description.vue'
import Students from '@/views/Optim/Students.vue'


export default {
  components: {
    Description,
    Students,
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
