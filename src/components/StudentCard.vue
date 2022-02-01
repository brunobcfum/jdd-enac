<template>
  <div>
    <v-col cols=12 >
      <v-card
        class="mx-auto"
        max-width="450"
        min-width="250"
        outlined
        elevation="3"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{ $vuetify.lang.t('$vuetify.card.student') }}:</div>
            <v-list-item-title class="headline mb-1">{{nom}} {{prenom}}</v-list-item-title>
            <v-list-item-subtitle>{{ $vuetify.lang.t('$vuetify.card.supervisor') }}: {{directeur}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ $vuetify.lang.t('$vuetify.card.group') }}: {{groupe}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ $vuetify.lang.t('$vuetify.card.ed') }}: {{ED}}</v-list-item-subtitle>
            <v-list-item-subtitle>Ecole Nationale de l'Aviation Civile</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          >
          <v-img :src="avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
<!--         <v-card-text>
          <v-icon dense>mdi-email</v-icon>
          {{mail}}
        </v-card-text> -->
        <v-card-actions>
          {{ $vuetify.lang.t('$vuetify.card.from') }}: {{debut}}
        </v-card-actions>
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
    nom: String,
    prenom: String,
    titre: String,
    directeur: String,
    debut: String,
    groupe: String,
    mail: String,
    ED: String
  },
  computed: {
    avatar: function () {
      return "https://eu.ui-avatars.com/api/?name=" + this.nom + "+" + this.prenom
    }
  }
}
</script>

<style>

</style>
