<script setup lang="ts">
import { ref } from "vue";
const form = ref({
    title: "",
    body: "",
});

const createTodo = async () => {
    try {
        const response = await fetch("http://localhost:3000/createTodo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form.value),
        });

        if (!response.ok) {
            throw new Error("Error while creating todo");
        }

        form.value = {
            title: "",
            body: "",
        };
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <h1>Create todo</h1>

    <form @submit.prevent="createTodo">
        <label for="title">Todo title</label>
        <input id="title" v-model="form.title" type="text" required />
        <label for="body">Todo body</label>
        <input id="body" v-model="form.body" type="text" required />

        <button type="submit">Create</button>
    </form>

    <router-link to="/todos">See todos</router-link>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
}
</style>
