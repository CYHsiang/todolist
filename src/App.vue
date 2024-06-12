<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheLoading from "./components/TheLoading.vue";
import { useGlobalStore } from "./stores/global";

const globalStore = useGlobalStore();
</script>

<template>
  <TheNavbar />

  <div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <TheLoading v-if="globalStore.loading" />
</template>


