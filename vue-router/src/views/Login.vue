<template>
<div class="container mx-auto mt-8">
    <h1 class="text-3x1 font-semibold mb-4">Login</h1>
    <form @submit.prevent="login">
    <div class="mb-4">
        <label for="username" class="block font-medium">Username: </label>
        <input type="text" id="username" v-model="username" class="mt-1 p-2 rounded border w-60" required>
    </div>
    <div class="mb-4">
        <label for="password" class="block font-medium">Password: </label>
        <input type="password" id="password" v-model="password" class="mt-1 p-2 rounded border w-60" required>
    </div>
    <div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            login
        </button>
    </div>
</form>
</div>
</template>

<script>
import { users } from '@/assets/User.js';

export default {
data() {
    return {
        username: '',
        password: '',
    };
},
methods: {
    login() {
        const foundUser = users.find(user => user.username == this.username && user.password == this.password);
        if (foundUser) {
            alert('Login Berhasil!');
            this.$router.push('/produk')
            // anda dapat melakukan navigasi ke halaman lain jika login berhasil
        } else {
            alert('Username atau Password Salah');
        }
    },
},
};
</script>
