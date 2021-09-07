<template>
	<div class="live-player">
		<LivePlayer :streamer="name" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LivePlayer from '@/components/LivePlayer.vue'; // @ is an alias to /src

export default defineComponent({
	name: 'ChannelView',
	props: {
		name: { type: String },
	},
	components: {
		LivePlayer,
	},
});
</script>
<style lang="scss">
.live-player {
	height: calc(100vh - 128px);
	position: relative;
}
</style>
