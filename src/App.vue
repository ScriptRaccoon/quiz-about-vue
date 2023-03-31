<script setup lang="ts">
import { ref, computed } from "vue";
import Header from "@/components/Header.vue";
import Finish from "@/components/Finish.vue";
import Question from "@/components/Question.vue";
import Progress from "@/components/Progress.vue";
import Layout from "@/components/Layout.vue";
import { questions } from "@/config/questions";

let question_index = ref(0);
let finished = ref(false);
let evaluation: boolean[] = [];

let question = computed(() => questions[question_index.value]);

function finish_question(is_correct: boolean): void {
	evaluation.push(is_correct);
	if (question_index.value < questions.length - 1) {
		question_index.value++;
	} else {
		finished.value = true;
	}
}

function restart(): void {
	question_index.value = 0;
	finished.value = false;
	evaluation = [];
}
</script>

<template>
	<Header>Quiz about Vue</Header>
	<Layout>
		<Progress
			v-if="!finished"
			:progress="question_index"
			:count="questions.length"
		></Progress>
		<Question
			v-if="!finished"
			:question="question"
			@finish="finish_question"
		></Question>
		<Finish
			v-else
			:evaluation="evaluation"
			@restart="restart"
		></Finish>
	</Layout>
</template>
