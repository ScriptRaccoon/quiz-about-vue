<script setup lang="ts">
const emit = defineEmits<{
	(e: "restart"): void;
}>();
const { evaluation } = defineProps<{ evaluation: boolean[] }>();
const number_of_questions = evaluation.length;
const correct_questions = evaluation.filter((x) => x).length;

function restart(): void {
	emit("restart");
}
</script>

<template>
	<section>
		<h2>The quiz is finished</h2>
		<p>
			Out of {{ number_of_questions }} questions you answered
			{{ correct_questions }} correctly.
		</p>
		<menu>
			<button @click="restart">Start over</button>
		</menu>
	</section>
</template>

<style scoped>
p {
	font-size: 1.25rem;
}
menu {
	margin-top: 1.5rem;
}
h2 {
	padding-bottom: 2rem;
}
</style>
