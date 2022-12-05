<template>
  <v-container>
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
      <v-card>
        <v-card-title class="blue darken-2">
          <h2 class="text-h5 white--text font-weight-light">
            JDD ENAC {{ year.year }}
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-btn
              dark
              color="blue-grey darken-3"
              class="ma-1"
              :href="pdf(year.year)"
              target="_blank"
            >
            {{ $vuetify.lang.t('$vuetify.download') }}
            <v-icon right dark>mdi-cloud-download</v-icon>
            </v-btn>
            <v-btn
              dark
              v-if="year.presentations"
              color="blue-grey darken-3"
              class="ma-1"
              target="_blank"
              @click="presentations(year.year)"
            >
            {{ $vuetify.lang.t('$vuetify.menu.presentations') }}
            <v-icon right dark>mdi-presentation</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-card>

      </v-timeline-item>
    </v-timeline>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '2022',
        presentations: true
      },
      {
        color: 'cyan',
        year: '2014',
      },
      {
        color: 'green',
        year: '2013',
      },
      {
        color: 'pink',
        year: '2012',
      },
      {
        color: 'amber',
        year: '2010',
      }
    ],
  }),
  methods: {
    pdf: function (year) {
      return "programs/jdd_" + year + ".pdf"
    },
    presentations: function(year) {
      if (this.$route.name != 'Presentations' + year) {
        this.$router.push({
          name: 'Presentations' + year
        })
      }
    }
  }
}
</script>

<style>

</style>