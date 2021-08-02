import axios from '../axios';

export default async (): Promise<any> => {
	// TODO any=AccountEntity
	const response = await axios.get(`account`).catch(() => {
		return null;
	});
	return response?.data;
};
