<script setup>
import TodoList from "../components/TodoList.vue";
import { useUserStore } from "../stores/user";
import TheButton from "../components/TheButton.vue";


const userStore = useUserStore();
</script>

<template>
  <main>
    <h1 class="text-2xl text-center flex justify-evenly">
      Todos
      <TheButton class="bg-amber-300" @click="$router.push({ name: 'create-todo' })" v-if="userStore.isLogin">+
      </TheButton>
    </h1>
    <TodoList />
  </main>
</template>