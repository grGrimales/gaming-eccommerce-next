import { ENV, authFetch } from "@/utils";

export class Order {
  async getAll(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;

      const sort = "sort[0]=createdAt:desc";

      const urlParams = `${filters}&${sort}`;

      const url = `${ENV.API_URL}${ENV.ENDPOINTS.ORDERS}?${urlParams}`;

      const response = await authFetch(url);
      const data = await response?.json();
      if (response?.status !== 200) throw data;
      return data;
    } catch (error) {
      console.log(error);

    }
  }
}
