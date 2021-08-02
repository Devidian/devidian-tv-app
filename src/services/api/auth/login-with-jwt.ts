import axios from '../axios';

export default () => {
	return axios.post('auth/login', {});
};
