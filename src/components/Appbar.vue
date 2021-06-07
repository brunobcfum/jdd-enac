<template>
  <div>
    <v-app-bar
      dark
      dense
      color="blue darken-4"
    >
      <a href="https://www.enac.fr/fr" class="pt-2">
        <img class="mr-3" src="https://www.enac.fr/themes/custom/enac/assets/images/logo_rf_enac.jpg" height="45"/>
      </a>

      <v-toolbar-title class="white--text">
        <span>JDD </span>
        <span class="font-weight-bold">| ENAC 2022</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch
        dense
        class="pt-5"
        v-model="$vuetify.theme.dark"
        label="Dark"
      ></v-switch>

      <v-menu
        open-on-hover
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            class="overline"  
          >
            {{ $vuetify.lang.t('$vuetify.menu.translations') }}:
          </v-list-item>
          <v-list-item
            class="subtitle" 
            v-for="(item, index) in items"
            :key="index"
            @click="set_lang(item.lang)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-toolbar dense>
      <v-btn icon @click="openHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
          small
          text
          color="normal"
        >
          {{ $vuetify.lang.t('$vuetify.menu.committee') }}
      </v-btn>
      <v-btn
          small
          text
          color="normal"
        >
          {{ $vuetify.lang.t('$vuetify.menu.areas') }}
        </v-btn>
      <v-toolbar-items>
        <v-btn
          text
          small
          color="normal"
        >
          {{ $vuetify.lang.t('$vuetify.menu.program') }}
        </v-btn>
        <v-btn
          small
          text
          color="normal"
          @click="openTimeline"
        >
          {{ $vuetify.lang.t('$vuetify.menu.previous') }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'English',
          lang: 'en'},
        { title: 'Français',
          lang: 'fr'}
      ],
    }
  },
  methods: {
    openTimeline () {
      this.$router.push({
        name: 'Timeline'
    })
    },
    openHome () {
      this.$router.push({
        name: 'Home'
    })
    },
    set_lang (lang) {
      this.$vuetify.lang.current = lang
    }
  },
  props: {
  }
}
</script>

<style>

</style>
