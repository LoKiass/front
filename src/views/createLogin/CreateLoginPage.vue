<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Credential that we get from the post method form vue injection 
const email = ref('')
const username = ref('')
const password = ref('')
const repassword = ref('')

// We need the router to redirect to the homepage
const router = useRouter();

// basic ref
const reponseLogin = ref(null)

// Function that call the API and check the credential 
async function envoyerLogin() {
  const res = await fetch('http://localhost:8000/user/createLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      username: username.value,
      password: password.value,
      repassword : repassword.value,
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
    <h2>Pour l'inscription, veuillez fournir les informations si dessous</h2>

    <form @submit.prevent="envoyerLogin">
      <input type="email" v-model="email" placeholder="E-mail" required><br>  
      <input type="text" v-model="username" placeholder="Username" required><br>
      <input type="password" v-model="password" placeholder="Password" required><br>
      <input type="password" v-model="password" placeholder="Re-inserer le mors de passe"><br>

      <button type="submit">Valider</button>
    </form>

    <pre v-if="reponseLogin">{{ JSON.stringify(reponseLogin, null, 2) }}</pre>
  </div>
</template>