import io from 'socket.io-client';

const isDev = localStorage.getItem('isDev') == '1';

const socket = io(process.env.VUE_APP_WS_URI || '', {
	withCredentials: true,
});

socket.on('connect', () => {
	if (isDev) console.log(`SocketIO connected: ${process.env.VUE_APP_WS_URI}`);
});

socket.on('connect_error', (err) => {
	const { message } = err;
	if (message === 'Invalid authorization') {
		const rawUser = localStorage.getItem('user') || '';
		const userData = JSON.parse(rawUser);
		if (isDev) console.log('connect_error', { err, rawUser, userData });
		if (userData) {
			socket.auth = { token: userData.token };
			socket.connect();
		}
		setTimeout(() => {
			socket.connect();
		}, 2000);
	}
});

// .disconnect is called on logout, so we manually connect again.
socket.on('disconnect', () => {
	socket.auth = {};
	setTimeout(() => {
		socket.connect();
	}, 2000);
});

if (isDev) {
	socket.on('connect_timeout', (a) => {
		console.log('connect_timeout', a);
	});
	socket.on('reconnect', (a) => {
		console.log('reconnect', a);
	});
}

export default socket;
