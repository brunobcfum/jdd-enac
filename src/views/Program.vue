<template>
<v-container fill-height fluid>
  <v-row class="fill-height" justify="center" align="center">
    <v-col justify="center" align="center">
      <v-sheet height="135">
        <v-toolbar
          dark
          prominent
          :src="require('../assets/images/agenda.jpg')"
        >

        <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.agenda') }}</v-toolbar-title>

        </v-toolbar>
      </v-sheet>
      <v-sheet height="64" max-width="800">
        <v-toolbar
          flat
        >
          <v-toolbar-title>
            10-Feb-2022
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet max-width="800">
        <v-calendar
          light
          class="elevation-5"
          first-time="7"
          interval-count="12"
          interval-height="80"
          ref="calendar"
          v-model="eventday"
          color="primary"
          type="category"
          category-show-all
          :categories="categories"
          :events="events"
          :event-color="getEventColor"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      focus: '',
      eventday: '2019-01-10',
      events: [
        {
          name: 'Discours d’ouverture : Missions et organisation de la recherche',
          start: '2019-01-10 09:00',
          end: '2019-01-10 09:15',
          color: 'indigo',
          category: 'Bellontes'
        },
        {
          name: 'Présentation : Qu’est-ce que le doctorat ',
          start: '2019-01-10 09:15',
          end: '2019-01-10 09:30',
          color: 'indigo',
          category: 'Bellontes'
        },
        {
          name: 'Présentation : DEVI, OPTIM, TELECOM, LII',
          start: '2019-01-10 09:30',
          end: '2019-01-10 10:15',
          color: 'indigo',
          category: 'Bellontes'
        },
        {
          name: 'Présentation des thèses des 2 A ',
          start: '2019-01-10 10:45',
          end: '2019-01-10 12:00',
          color: 'green darken-1',
          category: 'Bellontes'
        },
        {
          name: 'Ma thèse en 180s',
          start: '2019-01-10 13:00',
          end: '2019-01-10 14:00',
          color: 'red darken-1',
          category: 'Bellontes'
        },
        {
          name: 'Pause café + posters 1A',
          start: '2019-01-10 10:15',
          end: '2019-01-10 10:45',
          color: 'orange',
          category: "Salle d'exam"
        },
        {
          name: 'Pause dej : buffet pour tout le monde',
          start: '2019-01-10 12:15',
          end: '2019-01-10 13:00',
          color: 'orange',
          category: "Salle d'exam"
        },
      ],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      categories: ['Bellontes', 'Salle d\'exam'],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    computed: {
      // categories () {
      //   return [this.$vuetify.lang.t('$vuetify.rooms.main_room'), this.$vuetify.lang.t('$vuetify.rooms.eating_room')]
      //}
    },
    methods: {
      getEventColor (event) {
        return event.color
      }
    },
  }
</script>
