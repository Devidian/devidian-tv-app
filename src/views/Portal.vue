<template>
	<top-bar />
	<router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopBar from '@/components/top-bars/TopBar.vue';

export default defineComponent({
	name: 'Portal',
	components: {
		TopBar,
	},
});
</script>
<style lang="scss"></style>
