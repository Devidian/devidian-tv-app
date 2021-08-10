import axios from '../axios';

export default async (): Promise<any[]> => {
	return (await axios.get('channel/owned')).data;
};
