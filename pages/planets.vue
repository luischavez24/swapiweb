<template>
  <div>
    <v-layout row wrap>
      <v-flex class="px-2 py-2" v-for="(planet, index) in planets.results" :key="index" md6>
        <planet :planet="planet"></planet>
      </v-flex>
    </v-layout>
    <v-layout mt-3 row wrap justify-center>
      <v-pagination
        v-model="currentPage"
        :total-visible="5"
        :length="qtyPages"
        color="yellow darken-3"
        circle
        prev-icon="fa-angle-left fa-xs"
        next-icon="fa-angle-right fa-xs"
        @input="chargePlanets"
      ></v-pagination>
    </v-layout>
  </div>
</template>
<script>
import Planet from '../components/Planet'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: {
    Planet
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters('planets', [
      'qtyPages'
    ]),
    ...mapState('planets', [
      'planets'
    ])
  },
  methods: {
    ...mapActions('planets', [
      'fetchPlanets'
    ]),
    chargePlanets() {
      this.fetchPlanets({ page: this.currentPage })
    }
  },
  fetch({ store, error }) {
    store.dispatch('chargeCurrentPageData', { title: 'Planetas' })
    store.dispatch('planets/fetchPlanets', {})
      .catch(({ status, message }) => {
        error({ statusCode: status, message })
      }); 
  }
}
</script>

<style>

</style>
