<template>
  <v-navigation-drawer
    v-model="menu"
    app
    dark
    @transitionend="toggleMenu"
    disable-resize-watcher
  >
  <v-list dense>
    <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
    <v-list-item two-line>
      <v-list-item-title class="title">
        <span>JDD </span>
        <span class="font-weight-bold">| ENAC 2022</span>
      </v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item @click="openHome">
      <v-list-item-action>
          <v-icon>mdi-home</v-icon>
      </v-list-item-action>
    </v-list-item>

    <v-list-group
      :value="true"
      no-action
     >
      <template v-slot:activator>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> {{ $vuetify.lang.t('$vuetify.menu.areas') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </template>

      <v-list-item
        v-for="(item, index) in areas"
        :key="index"
        @click="open(item.route)"
      >
        <v-list-item-title v-text="item.title" />
      </v-list-item>
    </v-list-group>

    <v-list-item @click="openTimeline">
      <v-list-item-content>
          <v-list-item-title>{{ $vuetify.lang.t('$vuetify.menu.previous') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item @click="openProgram">
      <v-list-item-content>
          <v-list-item-title>{{ $vuetify.lang.t('$vuetify.menu.program') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

<!--     <v-list-item @click="openPresentations">
      <v-list-item-content>
          <v-list-item-title>{{ $vuetify.lang.t('$vuetify.menu.presentations') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item> -->

    <v-list-item @click="openOrganization">
      <v-list-item-content>
          <v-list-item-title>{{ $vuetify.lang.t('$vuetify.menu.organization') }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  data () {
    return {
      menu: false,
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
  props: {
    drawer: Boolean
  },
  mounted () {
    this.menu = this.drawer
  },
  watch: {
    drawer () {
      this.menu = this.drawer
    }
  },
  methods: {
    toggleMenu () {
      if (this.drawer !== this.menu) {
        this.$emit('toggleMenu')
      }
    },
    toggle () {
      this.$emit('toggleMenu')
    },
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
  }
}
</script>

<style>

</style>
