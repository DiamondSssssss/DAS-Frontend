import { api, auth } from "apis";
import { API } from "apis/constant";
export class TransactionService {
  static async getAll(token) {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = auth(token);
        const response = await api.get(API.TRANSACTION + "/mine", {
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
