<template>
  <div class="home">
    <button v-on:click="generateToken">Generate Token</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            token: ""
        };
    },
    methods: {
        async generateToken() {
            try {
                const name = "ALAWI";
                const email = "alawi@gmail.com";
                const password = "12345678";
                const response = await axios.post("http://127.0.0.1:8000/api/login", { name, email, password });
                this.token = response.data.token;
                console.log(this.token);
            }
            catch (error) {
                console.error(error);
            }
        }
    },
}
</script>
