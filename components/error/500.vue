<template>
  <div class="error-404">
    <h1>Hubo una perturbación en la fuerza</h1>
    <p>
      Los Sith está haciendo de las suyas y ocacionaron un error 
      en el servidor, nuestros mejores Jedi van en camino a solucionarlo.
    </p>
  </div>
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