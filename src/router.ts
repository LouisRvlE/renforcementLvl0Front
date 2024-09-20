import { createRouter, createWebHistory } from "vue-router";
import Form from "./pages/Form.vue";
import Todos from "./pages/Todos.vue";

const routes = [
    {
        path: "/",
        component: Form,
    },
    {
        path: "/todos",
        component: Todos,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
