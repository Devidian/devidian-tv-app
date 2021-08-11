import { BaseItemDto } from './base-item.dto';

export class ChannelDto extends BaseItemDto {
	name?: string;
	ownerId?: string;
	streamKey?: string;
}
