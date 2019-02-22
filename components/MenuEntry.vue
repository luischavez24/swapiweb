<template>
  <v-card class="round-card">
    <v-card-title>
      <h1>
        <v-icon large class="mr-2">{{ icon }}</v-icon>
        {{ title }}
      </h1>
    </v-card-title>
    <v-card-text class="pt-0">
      {{ detail }}
    </v-card-text>
    <v-card-actions class="text-xs-center justify-center pb-3">
      <v-btn class="elevation-3" large round outline color="black" :to="to">
        <v-icon class="mr-2">fa-angle-down</v-icon>
        Ver más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script> 
export default { 
  props: {
    title: String,
    to: String,
    icon: String,
    detail: String
  }
}
</script>