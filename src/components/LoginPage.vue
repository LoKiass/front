<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const reponseLogin = ref(null)

async function envoyerLogin() {
  const res = await fetch('http://localhost:8000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })

  reponseLogin.value = await res.json()
}
</script>

<template>
  <div class="LoginFrame">
    <h1>Fish 'n' Track<br>Welcome !</h1>

    <form @submit.prevent="envoyerLogin">
      <input type="text" v-model="username" placeholder="Username" required><br>
      <input type="password" v-model="password" placeholder="Password" required><br>

      <button type="submit">Valider</button>
    </form>

    <pre v-if="reponseLogin">{{ JSON.stringify(reponseLogin, null, 2) }}</pre>
  </div>
</template>