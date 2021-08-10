import axios from '../axios';

export default async () => {
	return (await axios.patch('channel', {})).data;
};
