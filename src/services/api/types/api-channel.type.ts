export type API_CHANNEL = {
	create(name: string): Promise<any>; // TODO ChannelDto
	update(): Promise<any>; // same
	myChannels(): Promise<any[]>; // same
};
