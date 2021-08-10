import { API_ACCOUNT } from './api-account.type';
import { API_AUTH } from './api-auth.type';
import { API_CHANNEL } from './api-channel.type';

export type API = {
	account: API_ACCOUNT;
	auth: API_AUTH;
	channel: API_CHANNEL;
};
