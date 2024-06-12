	<script setup>
import { useTodoStore } from "../stores/todo";
import TheTodo from "./TheTodo.vue";

 
const todoStore = useTodoStore();
todoStore.initTodos();
</script>
 
<template>
  <div class="max-w-[640px] mx-auto my-2">
    <div class="grid grid-cols-[100px_1fr_max-content] gap-2">
      <div class="text-center font-black">Id</div>
      <div class="text-center font-black">Text</div>
      <div class="text-center font-black">Operation</div>
 
      <TheTodo
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :done="todo.done"
      />
    </div>
  </div>
</template>