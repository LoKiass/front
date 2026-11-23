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
async function createLogin() {
  // Verify if the password are identical
  if (repassword.value != password.value){
    reponseLogin.value = "Les mots de passe ne sont pas identique";
    return
  }

  // Verify if the password respect a certain length (min 8) (In that case, the password already
  // correspond to the repassaword test)
  if (password.value.length < 8) {
  reponseLogin.value = "Le mot de passe doit faire minimum 8 caractères"
  return
}

  

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
  if (res.status == 201){
    router.push({ name: 'login' })
  } else {
    const data = await res.json()
    reponseLogin.value = data.error
  }
}
</script>

<template>
  <div class="LoginFrame">
    <h1>Fish 'n' Track<br>Welcome !</h1>
    <h2>Pour l'inscription, veuillez fournir les informations si dessous</h2>

    <form @submit.prevent="createLogin">
      <input type="email" v-model="email" placeholder="E-mail" required><br>  
      <input type="text" v-model="username" placeholder="Username" required><br>
      <input type="password" v-model="password" placeholder="Password" required><br>
      <input type="password" v-model="repassword" placeholder="Re-inserer le mors de passe"><br>

      <button type="submit">Valider</button>
    </form>

    <p v-if="reponseLogin" class="erreur">{{ reponseLogin }}</p>
</div>
</template>