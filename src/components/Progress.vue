<script setup lang="ts">
const { count, progress } = defineProps<{
	count: number;
	progress: number;
}>();
</script>

<template>
	<div class="progress" aria-describedby="progress">
		<div
			class="bar"
			v-for="(_, index) in count"
			:class="{ active: index <= progress }"
		></div>
	</div>
	<div id="progress" class="visually-hidden">
		Progress: Question {{ progress + 1 }} out of {{ count }}
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
