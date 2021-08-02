// on logout
export const removeLocalSessionToken = (): void => {
	localStorage.removeItem('token');
};

// on login
export const setLocalSessionToken = (token: string): void => {
	try {
		localStorage.setItem('token', token);
	} catch (err) {
		removeLocalSessionToken();
	}
};

export const getLocalSessionToken = (): string | null => {
	return localStorage.getItem('token');
};
