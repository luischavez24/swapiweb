<template>
  <v-app>
    <!-- App Menu -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="yellow--text text--darken-2"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- App Menu -->

    <!-- App Toolbar -->
    <v-toolbar
      color="yellow darken-2"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      
      <v-toolbar-title> {{ title || 'Swapi'}} </v-toolbar-title>
    </v-toolbar>
    <!-- App Toolbar -->

    <!-- App Content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- App Content -->
  </v-app>
</template>

<script>

import items from '../pages/toolbar.items'
import { mapState } from 'vuex' 

export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items,
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  computed: {
    ...mapState([
      'title'
    ])
  }
}
</script>
