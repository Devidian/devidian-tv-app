import { getLocalSessionToken } from '@/services/local-session';
import { AxiosRequestConfig } from 'axios';

export default (value: AxiosRequestConfig) => {
	const token = getLocalSessionToken();
	if (token) {
		value.headers.Authorization = `Bearer ${token}`;
	}
	return Promise.resolve(value);
};
