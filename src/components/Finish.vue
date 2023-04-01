<script setup lang="ts">
const emit = defineEmits<{ (e: "restart"): void }>();

const { evaluation } = defineProps<{ evaluation: boolean[] }>();

const count = evaluation.length;
const correct_count = evaluation.filter((x) => x).length;

function restart(): void {
	emit("restart");
}
</script>

<template>
	<section>
		<h2>The quiz is finished</h2>
		<p>
			Out of {{ count }} questions you answered
			{{ correct_count }} correctly.
		</p>
		<menu aria-label="menu">
			<button @click="restart">Start over</button>
		</menu>
	</section>
</template>

<style scoped>
p {
	font-size: 1.25rem;
	padding-block: 2rem 1.5rem;
}
</style>
