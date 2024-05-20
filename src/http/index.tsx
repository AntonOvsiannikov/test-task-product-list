import { IAddOptions, IOptions } from '@/type';

export const request = (options: IOptions | IAddOptions): Promise<string> => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': 'true',
	});
	const defaults = { headers: headers };
	options = Object.assign({}, defaults, options);
	return fetch(options.url, options).then((response) =>
		response.json().then((json: string) => {
			if (!response.ok) {
				return Promise.reject(json);
			}
			return json;
		})
	);
};
