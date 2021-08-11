<template>
	<div class="live-player">
		<h1>My Channels</h1>
		<div class="form-channel-create">
			<input type="text" name="channelName" id="InputChannelName" ref="inputChannelNameRef" @keyup="validate()" />
			<button @click="addChannel()" :disabled="!isFormValid">Add channel</button>
		</div>
		<div class="flex-library">
			<StreamerChannelCard v-for="channel in channelList" :key="channel.id" :channel="channel" />
		</div>
	</div>
</template>

<script lang="ts">
import { API } from '@/services/api/types';
import { defineComponent, inject, onMounted, Ref, ref } from 'vue';
import StreamerChannelCard from '@/components/items/StreamerChannelCard.vue';

export default defineComponent({
	name: 'MyChannels',
	props: {},
	components: { StreamerChannelCard },
	setup() {
		const inputChannelNameRef: Ref<HTMLInputElement | null> = ref(null);
		const $api = inject<API>('$api');
		const isFormValid: Ref<boolean> = ref(false);
		const channelList: Ref<any[]> = ref([]);

		const updateChannels = async () => {
			channelList.value = (await $api?.channel.myChannels()) || [];
		};

		onMounted(() => {
			updateChannels().catch((e) => {
				console.log(e); // TODO error reporting component?
			});
		});

		return {
			updateChannels,
			channelList,
			inputChannelNameRef,
			addChannel: () => {
				$api?.channel.create(inputChannelNameRef.value?.value + '');
			},
			isFormValid,
			validate: () => {
				isFormValid.value = (inputChannelNameRef.value?.value.length || 0) > 2;
			},
		};
	},
});
</script>
<style lang="scss">
.flex-library {
	display: flex;
	// background-color: lime;
	margin: 10px;

	& > * {
		margin: 5px;
		padding: 5px;
	}
}
</style>
