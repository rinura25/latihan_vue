<template>
  <div>
    <button type="button" class="btn btn-primary" v-on:click="showForm = !showForm">Tambah Dokter</button> | 
    <button type="button" class="btn btn-success" @click="showTable = true">Show Dokter</button>
    <formDokter v-if="showForm" @close="showForm = false"/>
    <getDokter v-if="showTable" @close="showTable = false"/>
  </div>
</template>
<script>
import formDokter from '@/components/formDokter.vue'
import getDokter from '@/components/getDokter.vue'

export default {
  data() {
    return {
      showForm: false,
      showTable: false
    }
  },
  components: {
    formDokter,
    getDokter
  }
}
</script>