import { api, auth } from "apis";
import { API } from "apis/constant";

export class UserService {
  static async getAll(token) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.get(API.USER, {
          headers: headers,
        });
        if (response.status === 200 && response.data) {
          resolve(response.data);
        } else {
          reject(response.data.message);
        }
      } catch (error) {
        reject(error.message);
      }
    });
  }
  static async getById(id, token) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.get(API.USER + `/${id}`, {
          headers: headers,
        });
        if (response.status === 200 && response.data) {
          resolve(response.data);
        } else {
          reject(response.data.message);
        }
      } catch (error) {
        reject(error.message);
      }
    });
  }
  static async getProfile(token) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.get(API.USER + `/profile`, {
          headers: headers,
        });
        if (response.status === 200 && response.data) {
          resolve(response.data);
        } else {
          reject(response.data.message);
        }
      } catch (error) {
        reject(error.message);
      }
    });
  }
  static async edit(data, token) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.put(API.USER + `/profile`, data, {
          headers: headers,
        });
        if (response.status === 200 && response.data) {
          resolve(response.data);
        } else {
          reject(response.data.message);
        }
      } catch (error) {
        reject(error.message);
      }
    });
  }
  static async editRole(id, data, token) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.put(API.USER + `/${id}/role`, data, {
          headers: headers,
        });
        if (response.status === 200 && response.data) {
          resolve(response.data);
        } else {
          reject(response.data.message);
        }
      } catch (error) {
        reject(error.message);
      }
    });
  }
  static async changeStatus(id, data, token) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.put(
          API.USER + `/change-status/${id}`,
          data,
          {
            headers: headers,
          }
        );
        if (response.status === 200 && response.data) {
          resolve(response.data);
        } else {
          reject(response.data.message);
        }
      } catch (error) {
        reject(error.message);
      }
    });
  }
}
