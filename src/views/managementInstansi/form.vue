<template>
  <form @submit.prevent="save">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h2>
          <router-link to="/managementInstansi" class="mr-4 btn btn-outline-secondary">&lt;</router-link>
          <span v-if="!editMode">New</span>
          <span v-if="editMode">Edit</span>
          Management Instansi
        </h2>
        <hr>
        <div class="mb-3">
          <label>Name</label>
          <select class="form-control bootstrap-select" id="inputGroupSelect01" v-model="payload.name">
            <option selected>Choose...</option>
            <option value="Kementrian Kelautan">Kementrian Kelautan</option>
            <option value="Kementrian Luar Negri">Kementrian Luar Negri</option>
            <option value="Kementrian Pedalaman">Kementrian Pedalaman</option>
          </select>
        </div>
        <div class="mb-3">
          <label>Nama Singkat</label>
          <input class="form-control" type="text" v-model="payload.namaSingkat">
        </div>
        <div class="mb-3">
          <label>Nomer Telpon</label>
          <input class="form-control" type="text" v-model="payload.phone">
        </div>
        <div class="mb-3">
          <label>Provinsi</label>
          <select class="form-control bootstrap-select" id="inputGroupSelect01" v-model="payload.provinsi">
            <option selected>Choose...</option>
            <option value="DKI jakarta">DKI Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="DI Yogyakarta">DI Yogyakarta</option>
          </select>
        </div>
        <div class="mb-3">
          <label>Kabupaten Kota</label>
          <select class="form-control bootstrap-select" id="inputGroupSelect01" v-model="payload.kota">
            <option selected>Choose...</option>
            <option value="DKI jakarta">DKI Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="DI Yogyakarta">DI Yogyakarta</option>
          </select>
        </div>
        <div class="mb-3">
          <label>Alamat</label>
          <textarea class="form-control" v-model="payload.alamat"></textarea>
        </div>
        <div class="mb-3">
          <label>Level Organisasi</label>
          <select class="form-control bootstrap-select" id="inputGroupSelect01" v-model="payload.lvlorganisasi">
            <option selected>Choose...</option>
            <option value="Asdep">Asdep</option>
            <option value="Direktorat">Direktorat</option>
            <option value="Pusat">Pusat</option>
          </select>
        </div>
        <div class="mb-3">
          <label>Nama Level Organisasi</label>
          <input class="form-control" type="text" v-model="payload.namaLvlOrganisasi">
        </div>
        <div class="mb-3">
          <label>Nama Atasan</label>
          <input class="form-control" type="text" v-model="payload.namaAtasan">
        </div>
        <div class="mb-3">
          <label>Alamat Organisasi</label>
          <textarea class="form-control" v-model="payload.alamatOrganisasi"></textarea>
        </div>
        <div class="mb-3 clearfix">
          <div>
            <button type="submit" class="btn btn-block btn-primary">Save</button>
            <span v-if="error" class="text-danger">{{ error }}</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6">

      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    editMode() {
      return !!this.$route.params.id;
    }
  },

  data() {
    return {
      error: null,
      payload: {
        name: "",
        namaSingkat: "",
        phone: "",
        provinsi: "",
        kota: "",
        alamat:"",
        lvlorganisasi:"",
        namaLvlOrganisasi:"",
        namaAtasan:"",
        alamatOrganisasi:""
      }
    };
  },

  async mounted() {
    this.initialize();
  },

  methods: {
    async initialize() {
      try {
        if (this.editMode) {
          const id = this.$route.params.id;
          const { data } = await axios.get(`/contacts/${id}`);
          this.payload = data;
        }
      } catch (e) {
        console.error(e); this.handleApiError(error);;
        this.error = e.message;
      }
    },

    async save() {
      try {
        if (this.editMode) {
          const id = this.$route.params.id;
          await await axios.put(`/contacts/${id}`, this.payload);
        } else {
          await await axios.post("/contacts", this.payload);
        }

        this.name = "";
        this.phone = "";
        this.email = "";

        this.$router.push("/managementInstansi");
      } catch (e) {
        console.error(e); this.handleApiError(error);;
        this.error = e.message;
      }
    }
  }
};
</script>
