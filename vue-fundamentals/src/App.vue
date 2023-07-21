<template>
  <div>
    <h2>Formulir</h2>
    <form @submit.prevent="submitForm">
      <label for="">Nama :  </label>
      <input class="{'is-invalid':isInvalidName}" type="text" name="name" v-model="kontak.name">
      <div v-if="isInvalidName"></div>
      <br>

      <label for="">Kelas :  </label>
      <input class="{'is-invalid':isInvalidKelas}" type="kelas" name="kelas" v-model="kontak.kelas">
      <div v-if="isInvalidKelas"></div>
      <br>

      <label for="">Alamat :</label>
      <input class="{'is-invalid':isInvalidAlamat}" type="alamat" name="alamat" v-model="kontak.alamat">
      <div v-if="isInvalidAlamat"></div>
      <br>

      <label for="">Nilai MTK :</label>
      <input class="{'is-invalid':isInvalidMtk}" type="number" name="mtk" v-model="kontak.mtk">
      <div v-if="isInvalidMtk"></div>
      <br>

      <label for="">Nilai IPA :</label>
      <input class="{'is-invalid':isInvalidIpa}" type="number" name="ipa" v-model="kontak.ipa">
      <div v-if="isInvalidIpa"></div>
      <br>

      <label for="">Nilai B.indo :</label>
      <input class="{'is-invalid':isInvalidIndo}" type="number" name="indo" v-model="kontak.indo">
      <div v-if="isInvalidIndo"></div>
      <br><br>


      <button type="submit">Simpan</button>
    </form>
    <div v-if="showResult">
      nama : {{ name }} <br>
      kelas : {{ kelas }} <br>
      alamat : {{ alamat }} <br>
      mtk : {{ mtk }} <br>
      ipa : {{ ipa }} <br>
      indo : {{ indo }} <br>
      total : {{ indo + mtk + indo}} <br>
      status: {{ (indo + mtk + indo) >=260 ? 'luluz' : 'gagal'  }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      kontak: {
        name: '',
        kelas: '',
        alamat: '',
        mtk: '',
        ipa: '',
        indo: '',
      },
      showResult: ref(false),
      name: ref(''),
      kelas: ref(''),
      alamat: ref(''),
      mtk: ref(''),
      ipa: ref(''),
      indo: ref(''),
      total: 0,
      

    };
  },
  computed: {
    isInvalidName() {
      return this.name.length <= 1;
    },
    isInvalidKelas() {
      return this.kelas.length <= 1
    },
    isInvalidAlamat() {
      return this.alamat.length <= 1
    },
    isInvalidMtk() {
      return this.mtk.length <= 1
    },
    isInvalidIpa() {
      return this.ipa.length <= 1
    },
    isInvalidIndo() {
      return this.indo.length <= 1
    }
  },
  methods: {
    submitForm() {
      this.name = this.kontak.name;
      this.kelas = this.kontak.kelas;
      this.alamat = this.kontak.alamat;
      this.mtk = this.kontak.mtk;
      this.ipa = this.kontak.ipa;
      this.indo = this.kontak.indo;
      this.total = this.kontak.indo;

      this.showResult = true;

      this.isInvalidKelas = false;
      this.isInvalidName = false;
      this.isInvalidAlamat = false
      this.isInvalidMtk = false
      this.isInvalidIpa = false
      this.isInvalidIndo = false
      this.total = false
    },
  },
};
</script>

<style>
h2 {
  color: blue;
}

.error-message {
  color: red;
  margin-top: 5px;
}

.is-invalid {
  border-color: red;
}
</style>