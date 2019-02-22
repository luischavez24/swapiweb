<template>
  <div class="error-404 text-xs-center">
    <h1>Te alejaste mucho de tu destino</h1>
    <p>
      La página que estás buscando no existe.
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
  },
};
</script>