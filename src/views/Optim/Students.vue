<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <div v-for="(student,index) in students" :key=index>
        <Card
          :nom=student.nom
          :prenom=student.prenom
          :titre=student.titre
          :directeur=student.directeur
          :debut=student.debut
          :groupe=student.equipe
          :mail=student.mail
          :ED=student.ED
        />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/StudentCard'
import students from '@/views/Optim/Students.json'

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