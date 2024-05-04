import { ENV } from "@/utils";

export class Game {
  async getLastPublished(gameId) {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";

      const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, platformId = null }) {
    try {
      const filterPlatform =
        platformId && `filters[platform][id][$eq]=${platformId}`;

      const limitFilter = `pagination[limit]=${limit}`;
      const sort = "sort[0]=publishedAt:desc";
      const populate = "populate=*";

      const urlParams = `${sort}&${limitFilter}&${filterPlatform}&${populate}`;
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${urlParams}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {

      console.log(error);

      throw error;
    }
  }

  async getGmaesByPlatformSlug(platformSlug, page = 2) {
    try {
      const filters = `filters[platform][slug][$eq]=${platformSlug}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${urlParams}`;

      const response = await fetch(url, {next: { revalidate: 10 }});
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }
 

  async searchGmes(text, page = 1) {
    try {
      const filters = `filters[title][$contains]=${text}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  

  async getGamesBySlug(slug, page = 1) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      // const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = [
        "wallpaper",
        "cover",
        "screenshots",
        "platform",
        "platform.icon"
      ];
      const populates = populate.map(field => `populate=${field}`).join('&');
      const urlParams = `${filters}&${populates}`;
  
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${urlParams}`;
  
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  

  async getGameById(id) {
    try {

      const populate = `populate[0]=cover&populate[1]=platform`;
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}/${id}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}