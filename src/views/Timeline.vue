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
            JDD ENAC {{ year.year}}
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
            Download Program  
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon>
                mdi-download
              </v-icon>
            </v-col>
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
}
</script>

<style>

</style>