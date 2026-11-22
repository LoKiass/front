<script setup="">
</script>

<template>
    <div class="LoginFrame">
        <h1>Fish 'n' Track<br>Welcome !</h1>
        <h2>Veuillez rentré les informations ci-dessous</h2>
        <form method="post">
            <input type="text" id="tb_username" name="tb_username" placeholder="Username" require><br>
            <input type="password" id="tb_password" name="tb_password" placeholder="Password" require><br>
            <a href="localhost:8000/login"><button>Valider</button></a>
        </form>
    </div>
</template>