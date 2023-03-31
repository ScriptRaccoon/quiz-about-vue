<script setup lang="ts">
import { interval } from "@/utils";

const { count, progress } = defineProps<{
	count: number;
	progress: number;
}>();
</script>

<template>
	<div class="progress">
		<div
			class="bar"
			v-for="index in interval(count)"
			:class="{ active: index <= progress }"
		></div>
	</div>
</template>

<style scoped>
.progress {
	display: flex;
	gap: 0.25rem;
}
.bar {
	flex-grow: 1;
	height: 0.25rem;
	background-color: var(--font-color);
	border-radius: 100vw;
	opacity: 0.1;
}
.active {
	opacity: 0.8;
}
</style>
