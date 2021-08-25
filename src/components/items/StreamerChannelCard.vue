<template>
	<n-card>
		{{ channel.name }}
		<span>{{ t('me.channel.label.streamkey') }}</span
		><button @click="copyStreamKeyToClipboard()">copy stream key</button>
	</n-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NCard } from 'naive-ui';
import { ChannelDto } from '@/services/api/dtos/channel.dto';
import { useI18n } from 'vue-i18n';
import { useMessage } from 'naive-ui';

export default defineComponent({
	name: 'StreamerChannelCard',
	components: {
		NCard,
	},
	props: {
		channel: Object as PropType<ChannelDto>,
	},
	setup(props) {
		const { t } = useI18n();
		const msg = useMessage();

		return {
			t,
			copyStreamKeyToClipboard: () => {
				navigator.clipboard.writeText(props.channel?.streamKey || '');
				msg.success(t('me.channel.message.clipboard.success'));
			},
		};
	},
});
</script>
<style scoped lang="scss">
.n-card {
	max-width: 300px;
}
</style>
