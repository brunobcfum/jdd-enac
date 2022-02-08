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
      <v-sheet height="64" max-width="1000">
        <v-toolbar
          flat
        >
          <v-toolbar-title>
            10-Feb-2022
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet max-width="1000">
        <v-calendar
          light
          class="elevation-5"
          first-time="7"
          interval-count="12"
          interval-height="150"
          ref="calendar"
          v-model="eventday"
          color="primary"
          type="category"
          category-show-all
          :categories="categories"
          :events="events"
          :event-color="getEventColor"
          @click:event="showDetails"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
  <v-dialog
    v-model="details"
    max-width="500"
  >
    <v-card>
      <v-card-title class="text-h5 grey lighten-2 mb-5">
        {{currentDetails.name}}
      </v-card-title>

      <v-card-text v-for="text in currentDetails.details" v-bind:key="text.id">
        {{text.text}}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          
          @click="details = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      focus: '',
      currentDetails: {
          name: '',
          start: '',
          end: '',
          color: '',
          category: '',
          details: []
      },
      details: false,
      eventday: '2022-02-10',
      events: [
        {
          name: 'Discours d’ouverture / Patrick SENAC',
          start: '2022-02-10 09:00',
          end: '2022-02-10 09:10',
          color: 'indigo',
          category: 'Bellonte',
        },
        {
          name: 'Présentation du doctorat / David MALEC',
          start: '2022-02-10 09:10',
          end: '2022-02-10 09:20',
          color: 'indigo',
          category: 'Bellonte',
        },
        {
          name: 'Présentation des laboratoires de recherche par les chefs d\'équipes',
          start: '2022-02-10 09:20',
          end: '2022-02-10 10:00',
          color: 'indigo',
          category: 'Bellonte',
          details: [
            {
              id: 0,
              text: "Thierry Klein (DEVI)"
            },
            {
              id: 1,
              text: "Stéphane Conversy (LII)"
            },
            {
              id: 2,
              text: "Daniel Delahaye (Optim)"
            },
            {
              id: 3,
              text: "Christophe Macabiau (Telecom)"
            },
          ]
        },
        {
          name: 'Présentation des thèses des 2A (Ma thèse en 180s)',
          start: '2022-02-10 10:30',
          end: '2022-02-10 11:45',
          color: 'red darken-1',
          category: 'Bellonte'
        },
        {
          name: 'Présentation des thèses des 3A (Ma thèse en 180s)',
          start: '2022-02-10 12:45',
          end: '2022-02-10 14:15',
          color: 'red darken-1',
          category: 'Bellonte'
        },
        {
          name: 'Témoignages d’anciens doctorants',
          start: '2022-02-10 14:15',
          end: '2022-02-10 15:00',
          color: 'indigo',
          category: 'Bellonte',
          details: [
            {
              id: 0,
              text: "Dong-Bach Vo (Post Doc LII)"
            },
            {
              id: 1,
              text: "Nicolas Capet (Anywaves)"
            },
            {
              id: 2,
              text: "Camille Raymond (Vector)"
            },
            {
              id: 3,
              text: "Capucine Amielh (Airbus)"
            },
            {
              id: 4,
              text: "Kevin Ellis (CNES)"
            },
            {
              id: 5,
              text: "Emilien Dubois (Airbus)"
            },
            {
              id: 6,
              text: "Almoctar Haiz (Infact)"
            }
          ]
        },
        {
          name: 'Posters 1A',
          start: '2022-02-10 10:00',
          end: '2022-02-10 10:30',
          color: 'red darken-1',
          category: "Salle d'examen (Breguet)"
        },
        {
          name: 'Pause déjeuner',
          start: '2022-02-10 11:45',
          end: '2022-02-10 12:45',
          color: 'orange',
          category: "Salle d'examen (Breguet)"
        },
        {
          name: 'Posters 1A',
          start: '2022-02-10 15:00',
          end: '2022-02-10 15:30',
          color: 'red darken-1',
          category: "Salle d'examen (Breguet)"
        },
        {
          name: 'Tables rondes/atelier à thème',
          start: '2022-02-10 15:30',
          end: '2022-02-10 17:00',
          color: 'orange',
          category: "Salle d'examen (Breguet)",
          details: [
            {
              id: 0,
              text: "Quotidien du doctorant: (David Malec (Ecole doctorale Toulouse) et Lolla Shoucavy (Toulouse Alumni Doctors))"
            },
            {
              id: 1,
              text: "Carrière académique et enseignement: (Alexandre Chabory et Florence Nicol (ENAC))"
            },
            {
              id: 2,
              text: "Carrière dans l’entreprise: (Bertrand Masson (Airbus), Camille Raymond (Vector), Kevin ellis (CNES), Emilien Dubois (Airbus))"
            },
            {
              id: 3,
              text: "Entreprenariat: (Nicolas Capet (Anywaves)) - Carrière à l’étranger (Maxence Carvalho (FIU) et Juliette Rambourg (Saab))"
            },
            {
              id: 4,
              text: "Faire un Post-Doc: (Zeina El-Ahdab (ENAC-Telecom), David Morales (ENAC-Telecom), Dong-Bach Vo (ENAC-LII))"
            }
          ]
        },
        {
          name: 'Soirée Devant le batiment B',
          start: '2022-02-10 17:00',
          end: '2022-02-10 18:00',
          color: 'deep-purple',
          category: "Salle d'examen (Breguet)"
        },
        {
          name: 'Soirée Devant le batiment B',
          start: '2022-02-10 17:00',
          end: '2022-02-10 18:00',
          color: 'deep-purple',
          category: "Bellonte"
        }
      ],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      categories: ['Bellonte', 'Salle d\'examen (Breguet)'],
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
      },
      showDetails (event) {
        var result = this.events.filter(obj => {
          return obj.name === event.event.name
        })
        this.currentDetails = result[0]
        this.details = true
      }
    },
  }
</script>
