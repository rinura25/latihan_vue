<template>
<div class="getPasien">
  <div>
      <button v-on:click="getPasien">Get Pasien</button>
  </div>
  <table class="table table-hover">
    <thead class="thead-dark" align="center">
      <tr>
        <th scope="col">Nomor</th>
        <th scope="col">Nama</th>
        <th scope="col">Tgl Lahir</th>
        <th scope="col">Jenis Kelamin</th>
        <th scope="col">Alamat</th>
      </tr>
    </thead>
    <tbody align="center">
      <tr v-for="patient in pasien" :key="patient.id_pasien">
        <td>{{ patient.nmr }}</td>
        <td>{{ patient.nama_pasien }}</td>
        <td>{{ patient.tgl_lahir }}</td>
        <td>{{ patient.jenis_kelamin }}</td>
        <td>{{ patient.alamat }}</td>
      </tr>
    </tbody>
  </table>
  </div>
  <button type="button" class="btn btn-danger" @click="$emit('close')">Close</button>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      pasien: []
    }
  },
  methods: {
    async getPasien() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/pasien', {
          headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY3MjMxNzA4NiwiZXhwIjoxNjcyMzIwNjg2LCJuYmYiOjE2NzIzMTcwODYsImp0aSI6ImJZcGJnSzVlWU5tWmxWZjAiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.-Q1v3Dnivk53h5o_u08GTYvzod3_USOmmSpvIfIbYyY'
          }
        })
        this.pasien = response.data.pasien
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>