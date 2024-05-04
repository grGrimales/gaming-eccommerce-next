import { ENV, authFetch } from "@/utils";

export class Address {
  async create(data, userId) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.ADDRESS}`;
      const params = {
        method: "POST",
        body: JSON.stringify({
          data: {
            ...data,
            user: userId,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await authFetch(url, params);
      if (response.status !== 200) throw result;
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(userId) {
    try {
      const filter = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.ADDRESS}?${filter}`;
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };


      const response = await authFetch(url, params);
      const result = await response?.json();

      if (response?.status !== 200) throw result;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async update(data, addressId) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
      const params = {
        method: "PUT",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await authFetch(url, params);
      if (response.status !== 200) throw result;
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(addressId) {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await authFetch(url, params);
      if (response.status !== 200) throw result;
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
