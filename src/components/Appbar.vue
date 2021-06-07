<template>
  <v-app-bar
    dark
    absolute
    src="https://picsum.photos/1920/1080?random"
  >


    <v-toolbar-title v-if="!drawer" class="grey--text">
      <span>JDD</span>
      <span class="font-weight-bold">|ENAC</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <v-icon>mdi-dots-vertical</v-icon>
    <v-toolbar-itens>
      <v-switch
        class="pt-6"
        v-model="$vuetify.theme.dark"
        label="Dark"
      ></v-switch>
    </v-toolbar-itens>
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
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'English' },
        { title: 'French' }
      ],
    }
  },
  methods: {
  },
  props: {
  }
}
</script>

<style>

</style>
