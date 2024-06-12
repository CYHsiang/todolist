<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import TheInput from "../components/TheInput.vue";
import TheButton from "../components/TheButton.vue";
import { useUserStore } from "../stores/user";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const user = reactive({
  username: "",
  password: "",
});

const userStore = useUserStore();
const router = useRouter();

const onLogin = async () => {
  const { username, password } = user;
  console.log("onLogin: ", username, password);
  if (await userStore.login(username, password)) {
    console.log("Success");
    router.push({ name: "home" });
  } else {
    console.log("Failure");

    // 主要是加了下面這個
    Swal.fire({
      text: "Wrong username or password.",
      icon: "error",
    });
  }
};
</script>

<template>
  <div class="mx-4">
    <h2 class="text-xl font-black mb-2">Login</h2>

    <form @submit.prevent="onLogin">
      <div class="grid grid-cols-[100px_1fr] gap-2 items-center mx-4">
        <TheInput label="username-input" text="Username:" type="text" v-model="user.username" />

        <TheInput label="password-input" text="Password:" type="password" v-model="user.password" />
      </div>

      <div class="text-center mt-2">
        <TheButton class="bg-green-500 text-white"> Login </TheButton>
      </div>
    </form>
  </div>
</template>
