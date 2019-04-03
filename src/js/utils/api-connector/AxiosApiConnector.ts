import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { env } from 'const/env';

import IApiConnector from './IApiConnector';

export default class AxiosApiConnector implements IApiConnector {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: env.API_URL,
      headers: { 'X-Requested-With': 'KriNoteClient' },
      timeout: 15000,
    });
  }

  public setAuthorizationHeader(token: string): void {
    if (token) {
      this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete this.instance.defaults.headers.common.Authorization;
    }
  }

  public post(url: string, data?: object, config?: object): AxiosPromise<any> {
    return this.instance.post(
      url,
      data,
      config,
    );
  }

  public get(url: string, params?: object): AxiosPromise<any> {
    return this.instance.get(
      url,
      { params },
    );
  }

  public put(url: string, params?: object): AxiosPromise<any> {
    return this.instance.put(
      url,
      params,
    );
  }

  public delete(url: string): AxiosPromise<any> {
    return this.instance.delete(url);
  }
}
