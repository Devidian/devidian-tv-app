<template>
	<n-card>
		{{ channel.name }}
	</n-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NCard } from 'naive-ui';
import { ChannelDto } from '@/services/api/dtos/channel.dto';
export default defineComponent({
	name: 'StreamerChannelCard',
	components: {
		NCard,
	},
	props: {
		channel: Object as PropType<ChannelDto>,
	},
	setup(props) {
		//

		return {};
	},
});
</script>
<style scoped lang="scss">
.n-card {
	max-width: 300px;
}
</style>
