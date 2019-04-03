import { AxiosPromise } from 'axios';

export default interface IApiConnector {
  setAuthorizationHeader(token: string): void;
  post(url: string, data?: object, config?: object): AxiosPromise<any>;
  get(url: string, params?: object): AxiosPromise<any>;
  put(url: string, params?: object): AxiosPromise<any>;
  delete(url: string): AxiosPromise<any>;
}
