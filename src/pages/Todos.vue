<script setup lang="ts">
import { ref } from "vue";
const todos = ref([]);

const fetchTodos = async () => {
    try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        todos.value = data;
    } catch (error) {
        console.error(error);
    }
};
const deleteTodo = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        todos.value = data.newData;
    } catch (error) {
        console.error(error);
    }
};

fetchTodos();
</script>

<template>
    <h1>Todo list</h1>
    <div class="todoList">
        <div v-for="todo in todos" :key="todo._id" class="todo">
            <h2>{{ todo.title }}:</h2>
            <p>{{ todo.body }}</p>
            <button v-on:click="deleteTodo(todo._id)">x</button>
        </div>
    </div>
    <router-link to="/">add todo</router-link>
</template>

<style scoped>
.todoList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.todo {
    border: 1px solid black;
    padding: 1rem;
}
</style>
