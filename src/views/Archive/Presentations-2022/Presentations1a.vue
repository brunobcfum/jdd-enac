<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <div v-for="(presentation,index) in presentations" :key=index>
        <Card
          :author=presentation.author
          :pdf=presentation.file
          :thumbnail=presentation.thumbnail
        />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/views/Presentations/Card'
import presentations from '@/views/Presentations/1a.json'

export default {
  data () {
    return {
      presentations
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>