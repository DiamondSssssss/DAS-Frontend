import { api, auth } from "apis";
import { API } from "apis/constant";


export class AuthService {
	static async login(token) {
	  return new Promise(async (resolve, reject) => {
		try {
		  const response = await api.post(API.AUTH+"/login",{token:token});
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