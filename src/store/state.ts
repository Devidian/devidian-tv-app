export type AppState = {
	userAccount: {
		[key: string]: any;
	};
};

export default function (): AppState {
	return {
		userAccount: {},
	};
}
