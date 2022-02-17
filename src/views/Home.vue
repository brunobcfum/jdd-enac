<template>
  <v-container>
    <v-row class="text-center mt-15">
      <v-col cols="12">
        <a href="https://framaforms.org/retours-sur-la-jdd-1644339763">Please answer this survey about the event</a>
        <v-img
          :src="require('../assets/jdd_trans.png')"
          class="my-3"
          contain
          height="500"
        />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      color : "blue--text"
    }),
    methods: {
      changeText () {
        this.color = 'pink--text'
      },
      resetText () {
        this.color = 'blue--text'
      }
    }

  }
</script>

<style scoped>
  .myFont {
    font-family: 'Impact'; 
  }
</style>
