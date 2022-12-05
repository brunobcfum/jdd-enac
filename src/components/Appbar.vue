<template>
  <div>
    <v-app-bar
      dark
      dense
      color="light-blue darken-1"
    >
      <v-app-bar-nav-icon @click="toggleMenu" v-if="$vuetify.breakpoint.xs"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!drawer" class="white--text">
        <span>JDD </span>
        <span class="font-weight-bold">| ENAC 2023</span>
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
            v-for="(item, index) in langs"
            :key="index"
            @click="set_lang(item.lang)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-toolbar v-if="!drawer && !$vuetify.breakpoint.xs" dense>
      <v-btn icon @click="openHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-menu
        open-on-hover
        bottom
        small
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="normal"
            small
            text
            v-bind="attrs"
            v-on="on"
          >
          {{ $vuetify.lang.t('$vuetify.menu.areas') }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            class="overline" 
            v-for="(item, index) in areas"
            :key="index"
            @click="open(item.route)"
          >
            <v-list-item-title class="overline">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

            <v-btn
        small
        text
        color="normal"
        @click="openTimeline"
      >
        {{ $vuetify.lang.t('$vuetify.menu.previous') }}
      </v-btn>

      <v-btn
        text
        small
        color="normal"
        @click="openProgram"
      >
        {{ $vuetify.lang.t('$vuetify.menu.program') }}
      </v-btn>
      <v-btn
          small
          text
          color="normal"
          @click="openOrganization"
        >
          {{ $vuetify.lang.t('$vuetify.menu.organization') }}
      </v-btn>
<!--       <v-btn
          small
          text
          color="normal"
          @click="openPresentations"
        >
          {{ $vuetify.lang.t('$vuetify.menu.presentations') }}
      </v-btn> -->

    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      langs: [
        { title: 'English',
          lang: 'en'},
        { title: 'Français',
          lang: 'fr'}
      ],
      areas: [
        { title: 'Telecom',
          route: 'Telecom'},
        { title: 'HMI',
          route: 'II'},
        { title: 'DEVI',
          route: 'Devi'},
        { title: 'OPTIM',
          route: 'Optim'}
      ],
    }
  },
  methods: {
    openTimeline () {
      if (this.$route.name != 'Timeline') {
        this.$router.push({
          name: 'Timeline'
        })
      }
    },
    openHome () {
      if (this.$route.name != 'Home') {
        this.$router.push({
          name: 'Home'
        })
      }
    },
    openProgram () {
      if (this.$route.name != 'Program') {
        this.$router.push({
          name: 'Program'
        })
      }
    },
    openOrganization () {
      if (this.$route.name != 'Organization') {
        this.$router.push({
          name: 'Organization'
        })
      }
    },
    openPresentations () {
      if (this.$route.name != 'Presentations') {
        this.$router.push({
          name: 'Presentations'
        })
      }
    },
    open (route) {
      this.$router.push({
        name: route
    })
    },
    set_lang (lang) {
      this.$vuetify.lang.current = lang
    },
    toggleMenu () {
      this.$emit('toggleMenu')
    }
  },
  props: {
    drawer: Boolean
  }
}
</script>

<style>

</style>
