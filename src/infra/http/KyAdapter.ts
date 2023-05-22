import HttpClient, { FetchParams } from "./HttpClient";
import ky, { KyResponse } from "ky";

export default class KyAdapter implements HttpClient {
  async get({
    url,
    path,
    headers,
  }: FetchParams): Promise<KyResponse> {
    return await ky(path, { prefixUrl: url, headers, method: "get" }).json();
  }

  async post({
    url,
    path,
    headers,
    body,
  }: FetchParams): Promise<KyResponse> {
    return await ky(path, { prefixUrl: url, headers, method: "post", json: body }).json();
  }

  async put({
    url,
    path,
    headers,
    body,
  }: FetchParams): Promise<KyResponse> {
    return await ky(path, { prefixUrl: url, headers, method: "put", json: body }).json();
  }

  async patch({
    url,
    path,
    headers,
    body,
  }: FetchParams): Promise<KyResponse> {
    return await ky(path, { prefixUrl: url, headers, method: "patch", json: body }).json();
  }

  async delete({
    url,
    path,
    headers,
  }: FetchParams): Promise<KyResponse> {
    return await ky(path, { prefixUrl: url, headers, method: "delete" }).json();
  }

}