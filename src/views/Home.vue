<template>
  <v-container>
    <v-row class="text-center mt-15">
      <v-col cols="12">
        <v-img
          :src="require('../assets/jdd.png')"
          class="my-3"
          contain
          height="500"
        />
        <span
          @click="link"
          @mouseenter="changeText"
          @mouseleave="resetText"
          class="text-h4 font-italic myFont"
          :class="color"
         >
         {{ $vuetify.lang.t('$vuetify.reference') }}

         </span>
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
      link (evt) {
        if (!evt.ctrlKey) {
          alert(this.$vuetify.lang.t('$vuetify.control'))
        } else if (evt.ctrlKey) {
          this.$router.push({
            name: 'Scape'
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

<style scoped>
  .myFont {
    font-family: 'Impact'; 
  }
</style>
