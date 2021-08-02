import { AxiosError, AxiosResponse } from 'axios';

export default (value: AxiosResponse<AxiosError>) => {
	if (value.status === 401) {
		return Promise.reject(new Error('Access denied.'));
	}
	if (value.data) {
		// -> Message popup / toast
		return Promise.reject(value.data);
	}
	return Promise.reject(value);
};
