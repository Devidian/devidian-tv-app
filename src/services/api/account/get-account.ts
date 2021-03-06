import axios from '../axios';
import { AccountDto } from '../dtos/account.dto';

export default async (): Promise<AccountDto> => {
	const response = await axios.get(`account`).catch(() => {
		return null;
	});
	return response?.data;
};
