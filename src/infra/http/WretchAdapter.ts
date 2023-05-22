import HttpClient, { FetchParams } from "./httpClient";
import wretch, { WretchResponse } from "wretch";

export default class WretchAdapter implements HttpClient {
  async get({ url, path, headers }: FetchParams): Promise<WretchResponse> {
    return await wretch(url).headers({ ...headers }).get(path).res(response => response.json());
  }

  async post({ url, path, headers, body }: FetchParams): Promise<WretchResponse> {
    const parsedBody = JSON.stringify(body);
    return await wretch(url).headers({ ...headers }).post(parsedBody, path).res(response => response.json());
  }

  async put({ url, path, headers, body }: FetchParams): Promise<WretchResponse> {
    const parsedBody = JSON.stringify(body);
    return await wretch(url).headers({ ...headers }).put(parsedBody, path).res(response => response.json());
  }

  async patch({ url, path, headers, body }: FetchParams): Promise<WretchResponse> {
    const parsedBody = JSON.stringify(body);
    return await wretch(url).headers({ ...headers }).patch(parsedBody, path).res(response => response.json());
  }

  async delete({ url, path, headers }: FetchParams): Promise<WretchResponse> {
    return await wretch(url).headers({ ...headers }).delete(path).res(response => response.json());
  }
}