<template>
   <div>
    <v-layout row wrap>
      <v-flex class="px-2 py-2" v-for="(starship, index) in starships.results" :key="index" md6>
        <starship :starship="starship"></starship>
      </v-flex>
    </v-layout>
    <v-layout mt-3 row wrap justify-center>
      <v-pagination
        v-model="currentPage"
        :total-visible="10"
        :length="qtyPages"
        color="yellow darken-3"
        circle
        prev-icon="fa-angle-left fa-xs"
        next-icon="fa-angle-right fa-xs"
        @input="chargeStarships"
      ></v-pagination>
    </v-layout>
  </div>
</template>

<script>
import Starship from '../components/Starship'
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentPage: 1
    }
  },
  components: {
    Starship
  },
  computed: {
    ...mapState('starships', [
      'starships'
    ]),
    ...mapGetters('starships', [
      'qtyPages'
    ])
  },
  methods: {
    chargeStarships() {
      this.$store.dispatch('starships/fetchStarships', { page: this.currentPage })
    }
  },
  fetch({ store }) {
    store.dispatch('chargeCurrentPageData', { title: 'Naves' })
    store.dispatch('starships/fetchStarships', {})
  }
}
</script>