<template>
  <div class="formDokter">
    <h1>Form Dokter</h1>
    <form v-on:submit.prevent="createDokter">
      <div class="container-fluid mt-5">
        <div class="form-group row mt-3">
          <label for="id_dokter" class="col-sm-2 col-form-label">ID Dokter</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="id_dokter" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="kd_dokter" class="col-sm-2 col-form-label">Kode Dokter</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="kd_dokter" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="nama_dokter" class="col-sm-2 col-form-label">Nama Dokter</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="nama_dokter" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="jenis_kelamin" class="col-sm-2 col-form-label">Jenis Kelamin</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="jenis_kelamin" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="no_Telp" class="col-sm-2 col-form-label">No Telpon</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="no_telp" />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="alamat" class="col-sm-2 col-form-label">Alamat</label>
          <div class="col-sm-10">
            <input type="text" class="form-control"  v-model="alamat" />
          </div>
        </div>
        <button type="submit" class="btn btn-warning mb-5">Submit</button>
      </div>
    </form>
  </div>
  <!-- <button type="button" class="btn btn-danger" @click="$emit('close')">Close</button> -->
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        id_dokter: '',
        kd_dokter: '',
        nama_dokter: '',
        jenis_kelamin: '',
        no_telp: '',
        alamat: ''
      }
    }
  },
  methods: {
    async createDokter() {
      const url = 'http://127.0.0.1:8000/api/dokter/create';

      const headers = {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY3MjIzMjQxNSwiZXhwIjoxNjcyMjM2MDE1LCJuYmYiOjE2NzIyMzI0MTUsImp0aSI6InpPRmFmcHlTa0tOVTlKcG0iLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ZejqLVX-TfsfKy08MYYlprdRr9fQWGmZx3Mu97jOxxw'
      };

      const formData = new FormData();
      formData.append('id_dokter', this.id_dokter);
      formData.append('kd_dokter', this.kd_dokter);
      formData.append('nama_dokter', this.nama_dokter);
      formData.append('jenis_kelamin', this.jenis_kelamin);
      formData.append('no_telp', this.no_telp);
      formData.append('alamat', this.alamat);

      axios.post(url, formData, { headers }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>