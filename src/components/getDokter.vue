<template>
  <div class="getDokter">
    <h1>Tabel Dokter</h1>
    <div>
      <button v-on:click="generateToken">Generate Token</button>
      <button v-on:click="getDokter">Get Dokter</button>
    </div>
    <div class="container-fluid mt-5">
      <table class="table table-hover">
        <thead class="thead-dark" align="center">
          <tr>
            <th scope="col">Kode Dokter</th>
            <th scope="col">Nama Dokter</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">No Telp</th>
            <th scope="col">Alamat</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr v-for="dr in dokter" :key="dr.kode_dokter">
            <td>{{ dr.kd_dokter }}</td>
            <td>{{ dr.nama_dokter }}</td>
            <td>{{ dr.jenis_kelamin }}</td>
            <td>{{ dr.no_telp }}</td>
            <td>{{ dr.alamat }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  
  data() {
    return {
      token: '',
      dokter: []
    }
  },
  methods: {
    async generateToken() {
      try {
        const name = 'ALAWI';
        const email = 'alawi@gmail.com';
        const password = '12345678';
        const response = await axios.post('http://127.0.0.1:8000/api/login', { name, email, password });
        this.token = response.data.token;
        console.log(this.token);

      } catch (error) {
        console.error(error);
      }
    },
    async getDokter() {
      try {
        const response = await axios.get('http://localhost:8000/api/dokter', {
          headers: {
            'Authorization': 'Bearer ' + this.token
          }
        })
        this.dokter = response.data.dokter
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
