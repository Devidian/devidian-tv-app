export type AccountDto = {
	createdOn: Date;
	lastModifiedOn: Date;
	name: string;
	id: string;
	avatarUrl: string;
	avatarSmallUrl: string;
	avatarMediumUrl: string;
	avatarLargeUrl: string;

	steam?: {
		identifier: string;
		id: string;
		displayName: string;
		photos: [
			{
				value: string;
			},
			{
				value: string;
			},
			{
				value: string;
			},
		];
		connectedOn: string;
	};
};
