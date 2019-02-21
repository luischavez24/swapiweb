import Planets from '../api/planets'

export default function(ctx, inject) {
  if (!ctx.$axios) {
    console.error( 'Please make sure $axios module is added');
  } else {
    const planets = new Planets(ctx.$axios);
    inject('planets', planets)
  }
}