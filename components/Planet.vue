<template>
  <v-card class="elevation-4 round-card">
    <v-card-title>
      <h1>{{ planet.name }}</h1>
    </v-card-title>
    <v-card-text class="pt-0">
      <v-list subheader>
          <v-subheader>Datos</v-subheader>
          <list-data icon="fas fa-cloud" title="Clima">
            {{ planet.climate }}
          </list-data>
          <list-data icon="fa fa-compass" title="Terreno">
            {{ planet.terrain }}
          </list-data>
          <list-data icon="fas fa-tint" title="Agua en superficie">
            {{ planet.surface_water }}
          </list-data>
          <list-data icon="fa fa-users" title="Population">
            {{ planet.population }}
          </list-data>
        </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ListData from './ListData.vue'
export default {
  props: {
    planet: Object
  },
  computed: {
    terrain(){
      return this.planet.terrain.split(',')
    }
  },
  components: {
    ListData
  }
}
</script>