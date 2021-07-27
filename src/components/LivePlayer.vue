<template>
  <div class="streamer-live-player">
    <h1>{{ streamer }}</h1>
    <video ref="livePlayer" class="video-js">
      <source :src="videoSrc" type="application/vnd.apple.mpegurl" />
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import videojs, { VideoJsPlayer } from "video.js";
require("videojs-hls-quality-selector");
require("videojs-contrib-quality-levels");

export default defineComponent({
  name: "HelloWorld",
  props: {
    streamer: {
      type: String,
      default: () => "mytvuser",
    },
  },
  data() {
    return {
      player: null as VideoJsPlayer | null,
      videoSrc: `http://localhost:8080/hls/${this.streamer}.m3u8`,
    };
  },
  mounted() {
    this.player = videojs(
      this.$refs.livePlayer as HTMLVideoElement,
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
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
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
