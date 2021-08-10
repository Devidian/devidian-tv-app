<template>
	<div class="live-player">
		<h1>Live stream</h1>
		<LivePlayer :streamer="name" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LivePlayer from '@/components/LivePlayer.vue'; // @ is an alias to /src

export default defineComponent({
	name: 'Live',
	props: {
		name: { type: String },
	},
	components: {
		LivePlayer,
	},
});
</script>
<style lang="scss"></style>
