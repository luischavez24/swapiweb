<template>
  <v-card class="elevation-4 round-card">
    <v-card-title>
      <h1>{{ starship.name }}</h1>
    </v-card-title>
    <v-card-text class="pt-0">
      <v-list subheader>
          <v-subheader>Datos</v-subheader>
          <list-data icon="fa-fighter-jet" title="Modelo">
            {{ starship.model }}
          </list-data>
          <list-data icon="fa-industry" title="Fabricante">
            {{ starship.manufacturer }}
          </list-data>
          <list-data icon="fa-dollar-sign" title="Precio en créditos">
            {{ starship.cost_in_credits }}
          </list-data>
          <list-data icon="fa-bookmark" title="Clase">
            {{ starship.starship_class }}
          </list-data>
        </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ListData from './ListData.vue'
export default {
  props: {
    starship: Object
  },
  components: {
    ListData
  }
}
</script>