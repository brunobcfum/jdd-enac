<template>
  <v-container fluid>
    <v-row justify="center" class="mt-5" >
      <div class="text-overline">
        {{ $vuetify.lang.t('$vuetify.organization') }}
      </div>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-sheet width="500">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-right">
                  {{ $vuetify.lang.t('$vuetify.name') }}
                </th>
                <th class="text-left">
                  {{ $vuetify.lang.t('$vuetify.department') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="item in organization"
              :key="item.name"
              >
                <td class="text-right">{{ item.name }}</td>
                <td>{{ item.department }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-sheet>
    </v-row>
    <v-row justify="center" class="mt-5">
      <div class="text-overline">
        {{ $vuetify.lang.t('$vuetify.support') }}
      </div>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-sheet width="400">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-right">
                  {{ $vuetify.lang.t('$vuetify.name') }}
                </th>
                <th class="text-left">
                  {{ $vuetify.lang.t('$vuetify.department') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="item in support"
              :key="item.name"
              >
                <td class="text-right">{{ item.name }}</td>
                <td>{{ item.department }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        support: [
          {
            name: 'Patrick Senac',
            department: 'Responsable de la Recherche DER/URI',
          },
          {
            name: 'Helene Weiss',
            department: 'Assistante DER/URI',
          },
          {
            name: 'Isabelle Laplace',
            department: 'Responsable du Programme Développement Durable',
          },
          {
            name: 'Stéphane Puechmorel',
            department: 'Enseignant SINA',
          },
          {
            name: 'Marcel Mongeau',
            department: 'Responsable de la Formation Doctorale ENAC',
          }
        ],
        organization: [
          {
            name: 'Helene Galiègue',
            department: 'Enseignante-Chercheuse, Telecom EMA',
          },
          {
            name: 'Lucille Kuhler',
            department: 'Enseignante SINA',
          },
          {
            name: 'Alice Quennelle',
            department: 'Doctorante, Telecom EMA',
          },
          {
            name: 'Alice Martin',
            department: 'Doctorante, LII',
          },
          {
            name: 'Bruno Chianca',
            department: 'Doctorant, Telecom RESCO',
          },
          {
            name: 'Nicolas Viot',
            department: 'Doctorant, LII',
          },
          {
            name: 'Marina Dehez-Clementi',
            department: 'Doctorante, Telecom RESCO',
          },
          {
            name: 'Pierre Dieumegard,',
            department: 'Doctorant, OPTIM',
          }
        ],
      }
    },
  }
</script>

<style>

</style>