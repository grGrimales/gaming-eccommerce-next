import { ENV, authFetch } from "@/utils";

export class Wishlist {
  async check(userId, gameId) {

    try {
      const filterUser = `filters[user][id][$eq][0]=${userId}`;
      const filterGame = `filters[game][id][$eq]=${gameId}`;

      const urlParams = `${filterUser}&${filterGame}`;
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;

      const response = await authFetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;

      if (result.data.length === 0) return false;

      return result.data[0];
    } catch (error) {
      console.log(error);
    }
  }

  async add(userId, gameId) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.WISHLIST}`;

      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            user: userId,
            game: gameId,
          },
        }),
      };

      const response = await authFetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;

      return result.data;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(wishlistId) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.WISHLIST}/${wishlistId}`;

      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await authFetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(userId) {
    try {
      const filterUser = `filters[user][id][$eq]=${userId}`;
      const populate = `populate[0]=game&populate[1]=game.cover`;

      const urlParams = `${filterUser}&${populate}`;
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;

      const response = await authFetch(url);

        const result = await response?.json();
        if (response?.status !== 200) throw result;


      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}
