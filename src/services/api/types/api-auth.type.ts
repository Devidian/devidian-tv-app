export type API_AUTH = {
	loginWithSteam(): void;
	loginWithJwt(): void;
	refreshToken(): void;
};
