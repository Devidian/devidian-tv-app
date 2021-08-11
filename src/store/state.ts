import { AccountDto } from '@/services/api/dtos/account.dto';

export type AppState = {
	userAccount: AccountDto | null;
	myChannels: any[];
};

export default function (): AppState {
	return {
		userAccount: null,
		myChannels: [],
	};
}
