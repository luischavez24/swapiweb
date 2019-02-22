export default class Starships {
  constructor($axios) {
    this.$axios = $axios
  }

  async getStarships(page = 1) {
    try {
      const request = await this.$axios.get('/starships/', {
        params: { page }
      });
      return request.data;
    } catch (error) {
      console.debug({ error });
      throw error;
    }
  }
}