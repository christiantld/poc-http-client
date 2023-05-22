import HttpClient, { FetchParams } from "./HttpClient";

export default class FetchAdapter implements HttpClient {

  async get({
    url,
    path,
    headers,
  }: FetchParams): Promise<Response> {

    return await fetch(url + path, {
      method: "GET",
      headers,
    }).then((response) => response.json());
  }

  async post({
    url,
    path,
    headers,
    body,
  }: FetchParams): Promise<Response> {

    return await fetch(url + path, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  async put({
    url,
    path,
    headers,
    body,
  }: FetchParams): Promise<Response> {

    return await fetch(url + path, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  async patch({
    url,
    path,
    headers,
    body,
  }: FetchParams): Promise<Response> {
    return await fetch(url + path, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }

  async delete({
    url,
    path,
    headers,
  }: FetchParams): Promise<Response> {
    return await fetch(url + path, {
      method: "DELETE",
      headers,
    }).then((response) => response.json());
  }
}