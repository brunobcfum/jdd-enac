<template>
  <v-container>
    <v-row align="top" justify="center" no-gutters>
      <div v-for="(student,index) in students" :key=index>
        <Card
          :nom=student.nom
          :prenom=student.prenom
          :titre=student.titre
          :directeur=student.directeur
          :debut=student.debut
          :groupe=student.groupe
          :mail=student.mail
        />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/StudentCard'
import students from '@/views/Devi/Students.json'

export default {
  data () {
    return {
      students
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>