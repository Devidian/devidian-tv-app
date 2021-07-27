<template>
  <div class="about">
    <h1>Live stream</h1>
    <LivePlayer :streamer="name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LivePlayer from "@/components/LivePlayer.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  props: ["name"],
  components: {
    LivePlayer,
  },
});
</script>
