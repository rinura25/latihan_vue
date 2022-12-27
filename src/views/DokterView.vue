<template>
  <div class="dokter">
    <h1>Tabel Dokter</h1>
    <div class="container-fluid mt-5">
      <table class="table table-hover">
        <thead class="thead-dark" align="center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
            <th scope="col">No. Telp</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr v-for="(d, index) in dokter" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ d.name }}</td>
            <td>{{ d.alamat }}</td>
            <td>{{ d.telp }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  name: 'TabelDokter',
  data() {
    return {
      dokter: [
        { name: "Dr. Mervin", alamat: "Karawang", telp: 62812345 },
        { name: "Dr. Sally", alamat: "Karawang", telp: 62812346 },
        { name: "Dr. Budi", alamat: "Sukabumi", telp: 62812347 },
        { name: "Dr. Bayu", alamat: "Cianjur", telp: 62812348 },
      ]
    }
  }
}
</script>