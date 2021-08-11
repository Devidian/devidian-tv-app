import { BaseItemDto } from './base-item.dto';

export class AccountDto extends BaseItemDto {
	name?: string;
	avatarUrl?: string;
	avatarSmallUrl?: string;
	avatarMediumUrl?: string;
	avatarLargeUrl?: string;

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
}
