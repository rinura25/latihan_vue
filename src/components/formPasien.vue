<template>
  <div class="formPasien">
    <h1>Form Pasien</h1>
    <form v-on:submit.prevent="createPasien">
      <div class="container-fluid mt-5">
        <div class="form-group row mt-3">
          <label for="nama_pasien" class="col-sm-2 col-form-label">Nama Pasien</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="nama_pasien" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="nmr" class="col-sm-2 col-form-label">Nomor Pasien</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="nmr" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="tgl_lahir" class="col-sm-2 col-form-label">Tanggal Lahir</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="tgl_lahir" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="jenis_kelamin" class="col-sm-2 col-form-label">Jenis Kelamin</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="jenis_kelamin" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="alamat" class="col-sm-2 col-form-label">Alamat</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="alamat" />
          </div>
        </div>
        <button type="submit" class="btn btn-warning mb-5">Submit</button>
      </div>
    </form>
  </div>
  <button type="button" class="btn btn-danger" @click="$emit('close')">Close</button>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        nama_pasien: '',
        nmr: '',
        tgl_lahir: '',
        jenis_kelamin: '',
        alamat: ''
      }
    }
  },
  methods: {
    async createPasien() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/pasien/create', this.form, {
          headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY3MjMxNzA4NiwiZXhwIjoxNjcyMzIwNjg2LCJuYmYiOjE2NzIzMTcwODYsImp0aSI6ImJZcGJnSzVlWU5tWmxWZjAiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.-Q1v3Dnivk53h5o_u08GTYvzod3_USOmmSpvIfIbYyY'
          }
        })
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>