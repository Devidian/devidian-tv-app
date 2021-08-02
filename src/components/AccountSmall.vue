<template>
	<div class="account-info-small">
		<img :src="account.avatarUrl" alt="Avatar" />
		<span>{{ account.name }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'AccountSmall',
	props: {
		account: Object,
	},
	setup(props) {
		//
	},
});
</script>

<style scoped lang="scss">
.account-info-small {
	width: 200px;
	display: flex;
	border-width: 1px;
	border-style: solid;
	border-color: lightblue;
	border-radius: 5px;
	img {
		width: 32px;
		border-radius: 10px;
		padding: 3px;
	}
	span {
		padding: 3px;
		display: flex;
		align-content: stretch;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
}
</style>
