<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Credential that we get from the post method form vue injection 
const username = ref('')
const password = ref('')

// We need the router to redirect to the homepage
const router = useRouter();

// basic ref
const reponseLogin = ref(null)

// Function that call the API and check the credential 
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

  // If the API return us a good value
  if (res.status == 200){
    router.push({ name: 'home' })
  } else {
    reponseLogin.value = "Erreur lors de la connection -> Veuillez re-essayer"
  }
}
</script>

<template>
  <div class="LoginFrame">
    <h1>Fish 'n' Track<br>Welcome !</h1>

    <form @submit.prevent="envoyerLogin">
      <input type="text" v-model="username" placeholder="Username" required><br>
      <input type="password" v-model="password" placeholder="Password" required><br>

      <button type="submit">Valider</button>
      <a href="createLogin">Aucun compte ? Inscrivez-vous</a>
    </form>

    <pre v-if="reponseLogin">{{ JSON.stringify(reponseLogin, null, 2) }}</pre>
  </div>
</template>