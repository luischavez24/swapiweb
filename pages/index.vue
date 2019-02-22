<template>
  <v-layout
    row
    justify-center
    align-center
  >
    <v-flex v-for="(entry, index) in menus" :key="index" xs12 sm8 md6 class="px-3 py-3">
      <menu-entry 
        :title="entry.title" 
        :icon="entry.icon"
        :detail="entry.detail"
        :to="entry.to"
      ></menu-entry>
    </v-flex>
  </v-layout>
</template>

<script>
import menus from './toolbar.items'
import MenuEntry from '../components/MenuEntry'

export default {
  data() {
    return {
      menus: menus.slice(1, menus.length)
    }
  },
  components: {
    MenuEntry
  },
  fetch({ store }) {
    store.dispatch('chargeCurrentPageData', { title: 'Swapi' })
  }
}
</script>
