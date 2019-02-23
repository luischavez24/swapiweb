<template>
  <v-layout row wrap>
    <v-flex justify-center>
      <h1>Te alejaste mucho de tu destino</h1>
      <v-icon large>fa-jedi</v-icon>
      <p>
        La página que estás buscando no existe.
      </p>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>