<template>
  <div>
    <v-col cols=12 >
      <v-card
        class="mx-auto"
        max-width="450"
        min-width="450"
        outlined
        elevation="3"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Poster / Slides:</div>
            <v-list-item-subtitle>{{author}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="120"
            color="grey"
          >
          <v-img class="row-pointer" :href="pdf" :src="thumbnail" @click="readFile(pdf)"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    author: String,
    pdf: String,
    thumbnail: String,
  },
  computed: {
    avatar: function () {
      return "https://eu.ui-avatars.com/api/?name=" + this.nom + "+" + this.prenom
    }
  },
  methods: {
    readFile(file) {
      window.open(file, '_blank') //to open in new tab
    }
  }
}
</script>

<style scoped>
.row-pointer {
  cursor: pointer;
}
</style>

