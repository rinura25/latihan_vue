<template>
  <div class="dokter">
  <h1>Tabel Pasien</h1>
  <div class="container-fluid mt-5">
    <table class="table table-hover">
      <thead class="thead-dark" align="center">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nama</th>
          <th scope="col">Alamat</th>
          <th scope="col">Umur</th>
        </tr>
      </thead>
      <tbody align="center">
        <tr v-for="(p, index) in pasien" v-bind:key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.alamat }}</td>
          <td>{{ p.umur }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabelPasien',
  data() {
    return {
      pasien: [
        { name: "Budi", alamat: "Cianjur", umur: 20 },
        { name: "Bambang", alamat: "Bandung", umur: 15 },
        { name: "Putri", alamat: "Sukabumi", umur: 7 },
        { name: "Putra", alamat: "Cianjur", umur: 5 },
        { name: "Alawi", alamat: "Sukabumi", umur: 21 },
        { name: "Dimas", alamat: "Jakarta", umur: 50 },
        { name: "Alawi", alamat: "Sukabumi", umur: 24 },
      ]
    }
  }
}
</script>
