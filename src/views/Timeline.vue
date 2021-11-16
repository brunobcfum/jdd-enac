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
        year: '2010',
      },
      {
        color: 'green',
        year: '2012',
      },
      {
        color: 'pink',
        year: '2013',
      },
      {
        color: 'amber',
        year: '2014',
      }
    ],
  }),
  methods: {
    pdf: function (year) {
      return "programs/jdd_" + year + ".pdf"
    }
  }
}
</script>

<style>

</style>