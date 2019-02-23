<template>
  <v-layout fill-height row wrap align-center justify-center>
    <v-flex xs4>
      <h1 class="text-xs-center mb-4">
        <v-icon x-large>fa-jedi</v-icon>
        Hubo una perturbación en la fuerza
      </h1>
      <p class="text-xs-center"> 
      Los Sith está haciendo de las suyas y ocacionaron un error 
      en el servidor, nuestros mejores Jedi van en camino a solucionarlo.
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
  }
};
</script>