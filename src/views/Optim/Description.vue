<template>
  <v-container>
    <v-row no-gutters class="body-2">
      {{ $vuetify.lang.t('$vuetify.area.optim.description') }}
    </v-row>
    <v-row no-gutters>
      <h1 class="mt-6 display-1">{{ $vuetify.lang.t('$vuetify.area.fields') }}</h1>
    </v-row>
    <hr>
    <v-row class="mt-5">
      <span>
        <ul>
          <li class="ma-2 body-2">{{ $vuetify.lang.t('$vuetify.area.optim.axis') }}</li>
        </ul> 
      </span>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>