import axios, { type AxiosInstance, AxiosHeaders } from "axios";

export const useAxios = () => {
  const createAxiosInstance = (): AxiosInstance => {
    const runtimeConfig = useRuntimeConfig();
    const auth = useAuth();

    return axios.create({
      baseURL: `${runtimeConfig.app.serverUrl}/api`,
      headers: new AxiosHeaders({
        Authorization: `Bearer ${auth.access_token}`,
      }),
    });
  };

  const getReq = (endpoint: string, config?: { params?: object }) => {
    const instance = createAxiosInstance();
    let url = endpoint;

    if (config?.params) {
      const params = new URLSearchParams(
        config.params as Record<string, string>,
      ).toString();
      url += `?${params}`;
    }

    return instance.get(url);
  };

  const postReq = (endpoint: string, data: object, config?: object) => {
    const instance = createAxiosInstance();
    return instance.post(endpoint, data, config);
  };

  return {
    postReq,
    getReq,
  };
};
