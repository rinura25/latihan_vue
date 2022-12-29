<template>
  <div class="container-fluid mt-5">
  <form class="form-inline">
    <div class="form-group">
      <label for="selectedOption" class="mr-sm-2">Kelurahan/Desa:</label>
      <select v-model="selectedOption" @change="updateFields" class="form-control mr-sm-2">
        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.kelurahan }}</option>
      </select>
    </div>
    <div class="form-group mr-sm-2">
      <label for="otherField1">Kecamatan:</label>
      <input type="text" v-model="kecamatan" class="form-control" readonly>
    </div>
    <div class="form-group mr-sm-2">
      <label for="otherField2">Kota:</label>
      <input type="text" v-model="kota" class="form-control" readonly>
    </div>
    <div class="form-group mr-sm-2 ">
      <label for="otherField3">Provinsi:</label>
      <input type="text" v-model="provinsi" class="form-control " readonly>
    </div>
  </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedOption: '',
      options: [
        { kelurahan: 'Bojongherang', value: '1', data: { fieldKecamatan: 'Cianjur', fieldKota: 'Cianjur', fieldProvinsi: 'Jawa Barat' } },
        { kelurahan: 'Tanggeung', value: '2', data: { fieldKecamatan: 'Tanggeung', fieldKota: 'Bandung', fieldProvinsi: 'Jawa Tengah' } },
        { kelurahan: 'Rancabali', value: '3', data: { fieldKecamatan: 'Cianjur', fieldKota: 'Jakarta', fieldProvinsi: 'Jawa Timur' } }
      ],
      kecamatan: '',
      kota: '',
      provinsi: ''
    }
  },
  methods: {
    updateFields() {
      const selectedOption = this.options.find(option => option.value === this.selectedOption);
      this.kecamatan = selectedOption.data.fieldKecamatan;
      this.kota = selectedOption.data.fieldKota;
      this.provinsi = selectedOption.data.fieldProvinsi;
    }
  }
}
</script>
