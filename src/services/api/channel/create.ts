import axios from '../axios';

export default async (name: string) => {
	return (await axios.post('channel', { name })).data;
};
