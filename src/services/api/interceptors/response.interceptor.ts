import { setLocalSessionToken } from '@/services/local-session';
import { AxiosResponse } from 'axios';

export default (value: AxiosResponse<any>) => {
	const token = value.headers['x-refresh-token'];
	if (token) {
		setLocalSessionToken(token);
	}

	return value;
};
