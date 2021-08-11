<template>
	<top-bar />
	<!-- SIDEBAR (named router?) -->
	<router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopBar from '@/components/top-bars/TopBar.vue';

export default defineComponent({
	name: 'PortalLayout',
	components: {
		TopBar,
	},
});
</script>
<style lang="scss"></style>
