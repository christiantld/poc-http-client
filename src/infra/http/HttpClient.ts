export type FetchParams = {
	url?: string
	path: string
	headers?: { [key: string]: string }
	body?: BodyInit | JSON | Record<string, unknown>
}

export default interface HttpClient {
	get(params: FetchParams): Promise<any>;
	post(params: FetchParams): Promise<any>;
	put(params: FetchParams): Promise<any>;
	delete(params: FetchParams): Promise<any>;
	patch(params: FetchParams): Promise<any>;
}