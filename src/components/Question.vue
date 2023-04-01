<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	question: question;
}>();

const emit = defineEmits<{
	(e: "finish", correct: boolean): void;
}>();

let selected_index = ref(0);
let message = ref("");
let submitted = ref(false);
let correct = ref(false);

function check_answer() {
	submitted.value = true;

	correct.value =
		selected_index.value == props.question.correct_answer_index;

	const correct_answer =
		props.question.answers[props.question.correct_answer_index];

	message.value = correct.value
		? "This is correct!"
		: "No. The correct answer is: " + correct_answer;
}

function next() {
	emit("finish", correct.value);
	selected_index.value = 0;
	message.value = "";
	submitted.value = false;
	correct.value = false;
}
</script>

<template>
	<form
		@submit.prevent="check_answer"
		role="region"
		aria-label="question"
	>
		<h2 aria-live="assertive">
			{{ props.question.question }}
		</h2>

		<section class="answers" aria-label="answers">
			<label
				v-for="(answer, index) in props.question.answers"
				class="answer"
				:class="{ selected: index == selected_index }"
			>
				<input
					type="radio"
					:value="index"
					:name="props.question.id"
					:disabled="submitted"
					v-model="selected_index"
				/>
				<span class="answer_text">
					{{ answer }}
				</span>
			</label>
		</section>

		<menu aria-label="menu">
			<button :disabled="submitted">Submit</button>
			<button type="button" v-if="submitted" @click="next">
				Next
			</button>
		</menu>
	</form>

	<div class="message" aria-live="assertive">
		{{ message }}
	</div>
</template>

<style scoped>
h2 {
	padding-block: 2rem;
}

.answers {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.answer {
	background-color: var(--answer-color);
	padding: 1rem;
	border-radius: 0.25rem;
	font-size: 1.25rem;
	cursor: pointer;
}

.answer.selected {
	background-color: var(--answer-color-selected);
	outline: 0.1rem solid var(--outline-color);
}

.answer_text {
	padding-left: 0.5rem;
}

menu {
	margin-top: 1.5rem;
	display: flex;
	gap: 0.5rem;
}

.message {
	font-size: 1.25rem;
	margin-top: 1.5rem;
}
</style>
