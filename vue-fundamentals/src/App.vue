<template>
  <div>
    <h2>Formulir</h2>
    <form @submit.prevent="submitForm">
      <label for="">Nama</label>
      <input class="{'is-invalid':isInvalidName}" type="text" name="name" v-model="kontak.name">
      <div v-if="isInvalidName" class="error-message">
        Nama Harus Di Isi!
      </div>
      <br>
      <label for="">Email</label>
      <input class="{'is-invalid':isInvalidEmail}" type="email" name="email" v-model="kontak.email">
      <div v-if="isInvalidEmail" class="error-message">
        Email Harus Di Isi!
      </div>
      <br>
      <button type="submit">Simpan</button>
    </form>
    <div v-if="showResult">
      nama : {{ name }} <br>
      email : {{ email }}
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
        email: '',
      },
      showResult: ref(false),
      name: ref(''),
      email: ref(''),

    };
  },
  computed: {
    isInvalidName() {
      return this.name.length <= 1;
    },
    isInvalidEmail() {
      return this.email.length <= 1
    }
  },
  methods: {
    submitForm() {
      this.name = this.kontak.name;
      this.email = this.kontak.email;
      this.showResult = true;
      this.isInvalidEmail = false;
      this.isInvalidName = false
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