import { api, auth } from "apis";
import { API } from "apis/constant";

export class SubjectService {
  static async getSubject(token, params) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.get("subjects", {
          params: params,
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
}
