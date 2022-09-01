import axios from 'axios';
import useAuthUserStore from '../store/useAuthUserStore';

const axiosInstance = axios.create({
  // https://jsonplaceholder.typicode.com/ => random API
  baseURL: 'http://192.168.11.66:1993/ims/api/v1/',
});

axiosInstance.interceptors.request.use((response) => {
  if (response) {
    response.headers = {
      token: `${useAuthUserStore.getState().accessToken}`,
    };
  }
  return response;
});

export const fetcher = (resource, init) =>
  axiosInstance.get(resource, init).then((res) => res.data);

export default axiosInstance;
