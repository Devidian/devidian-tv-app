<template>
	<div class="streamer-live-player">
		<h1>{{ streamer }}</h1>
		<video ref="livePlayer" class="video-js">
			<source :src="videoSrc" type="application/vnd.apple.mpegurl" />
		</video>
	</div>
</template>

<script lang="ts">
import videojs, { VideoJsPlayer } from 'video.js';
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
require('videojs-hls-quality-selector');
require('videojs-contrib-quality-levels');

export default defineComponent({
	name: 'LivePlayer',
	props: {
		streamer: {
			type: String,
			default: () => 'mytvuser',
		},
	},
	setup(props) {
		const livePlayerRef = ref<HTMLVideoElement>();
		const player = ref<VideoJsPlayer>();

		onMounted(() => {
			player.value = videojs(
				livePlayerRef.value as HTMLVideoElement,
				{
					// liveui: true,
					fluid: true,
					fill: true,
					responsive: true,
					autoplay: true,
					controls: true,
					controlBar: {
						// currentTimeDisplay: true,
						// durationDisplay: true,
					},
					html5: {
						vhs: {
							overrideNative: true,
						},
						nativeAudioTracks: false,
						nativeVideoTracks: false,
					},
					// poster:  // offline image?
					plugins: {
						hlsQualitySelector: {
							displayCurrentQuality: true,
						},
					},
				},
				function onPlayerReady() {
					// console.log('onPlayerReady', this);
				},
			);
		});

		onBeforeUnmount(() => {
			player.value?.dispose();
		});

		return {
			livePlayerRef,
			player: null as VideoJsPlayer | null,
			videoSrc: `${process.env.VUE_APP_HLS_HOST}hls/${props.streamer}.m3u8`,
		};
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
