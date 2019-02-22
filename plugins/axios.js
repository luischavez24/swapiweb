import Planets from '../api/planets'
import Starships from '../api/starships'
export default function(ctx, inject) {
  if (!ctx.$axios) {
    console.error( 'Please make sure $axios module is added');
  } else {
    const planets = new Planets(ctx.$axios);
    const starships = new Starships(ctx.$axios);

    inject('planets', planets)
    inject('starships', starships)
  }
}