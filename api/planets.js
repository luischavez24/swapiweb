export default class Planets {
  constructor($axios) {
    this.$axios = $axios
  }

  async getPlanets(page = 1) {
    try {
      const request = await this.$axios.get('/planets/', {
        params: { page }
      });
      return request.data;
    } catch (error) {
      throw error;
    }
  }
}
