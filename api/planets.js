export default class Planets {
  constructor($axios) {
    this.$axios = $axios
  }

  async getPlanets(page = 1) {
    try {
      const request = await this.$axios.get('/planets/', {
        params: { page }
      });
      console.log({ request })
      return request.data;
    } catch (error) {
      console.debug({ error });
      throw error;
    }
  }
}
