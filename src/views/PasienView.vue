<template>
  <div>
    <button type="button" class="btn btn-primary" v-on:click="showForm = !showForm">Tambah Pasien</button> | 
    <button type="button" class="btn btn-success" @click="showTable = true">Show Pasien</button>
    <formPasien v-if="showForm" @close="showForm = false"/>
    <getPasien v-if="showTable" @close="showTable = false"/>
  </div>
</template>
<script>
import formPasien from '@/components/formPasien.vue'
import getPasien from '@/components/getPasien.vue'

export default {
  data() {
    return {
      showForm: false,
      showTable: false
    }
  },
  components: {
    formPasien,
    getPasien
  }
}
</script>