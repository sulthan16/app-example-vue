<template>
  <div>
    <div class="ui four steps">
      <div class="active step">
        <i class="fa fa-home fa-3x"></i>
        <div class="content">
          <div class="title">Profile Umum</div>
        </div>
      </div>
      <div class="step">
        <i class="fa fa-home fa-3x"></i>
        <div class="content">
          <div class="title">Pendidikan</div>
        </div>
      </div>
      <div class="step">
        <i class="fa fa-home fa-3x"></i>
        <div class="content">
          <div class="title">Jabatan</div>
        </div>
      </div>
      <div class="step">
        <i class="fa fa-home fa-3x"></i>
        <div class="content">
          <div class="title">Pelatihan</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <form @submit.prevent="save">
          <h2>
            <router-link to="/selfAssesment" class="mr-4 btn btn-outline-secondary">&lt;</router-link>
            <span v-if="!editMode">New</span>
            <span v-if="editMode">Edit</span>
            Self Assesment
          </h2>
          <hr>
          <div class="mb-3">
            <label>Nama Lengkap</label>
            <input class="form-control" type="text" v-model="payload.namaLengkap">
          </div>
          <div class="mb-3">
            <label>NIP</label>
            <input class="form-control" type="text" v-model="payload.nip">
          </div>
          <div class="mb-3">
            <label>Umur</label>
            <input class="form-control" type="text" v-model="payload.umur">
          </div>
          <div class="mb-3">
            <label>Jenis Peserta</label>
            <select
              class="form-control bootstrap-select"
              id="inputGroupSelect01"
              v-model="payload.jenisPeserta"
            >
              <option selected>Choose...</option>
              <option value="DKI jakarta">DKI Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="DI Yogyakarta">DI Yogyakarta</option>
            </select>
          </div>
          <div class="mb-3">
            <label>Jabatan</label>
            <select
              class="form-control bootstrap-select"
              id="inputGroupSelect01"
              v-model="payload.jabatan"
            >
              <option selected>Choose...</option>
              <option value="DKI jakarta">DKI Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="DI Yogyakarta">DI Yogyakarta</option>
            </select>
          </div>
          <div class="mb-3">
            <label>Jenis Kelamin</label>
            <select
              class="form-control bootstrap-select"
              id="inputGroupSelect01"
              v-model="payload.jenisKelamin"
            >
              <option selected>Choose...</option>
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>
          <div class="mb-3">
            <label>Riwayat Jabatan</label>
            <textarea class="form-control" v-model="payload.riwayatJabatan"></textarea>
          </div>

          <div class="mb-3">
            <label>Level Organisasi</label>
            <input class="form-control" type="text" v-model="payload.lvlOrganisasi">
          </div>
          <div class="mb-3">
            <label>Pendidikan Terakhir</label>
            <input class="form-control" type="text" v-model="payload.pendidikanTerakhir">
          </div>
          <div class="mb-3">
            <label>Lembaga Pendidikan</label>
            <input class="form-control" type="text" v-model="payload.lembagaPendidikan">
          </div>
          <div class="mb-3">
            <label>Diklat/Pelatihan/Kursus/Workshop</label>
            <textarea class="form-control" v-model="payload.training"></textarea>
          </div>
          <div class="mb-3">
            <label>Jenis Kopetensi</label>
            <select
              class="form-control bootstrap-select"
              id="inputGroupSelect01"
              v-model="payload.jenisKopetensi"
            >
              <option value selected>Choose...</option>
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>
          <div class="mb-3 clearfix">
            <div>
              <button type="submit" class="btn btn-block btn-primary">Save</button>
              <span v-if="error" class="text-danger">{{ error }}</span>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6 col-sm-6"></div>
    </div>
    <div class="row" v-if="payload.jenisKopetensi !== ''">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Lengkap</th>
            <th scope="col">NIP</th>
            <th scope="col">Jenis Peserta</th>
            <th scope="col">Jabatan</th>
            <th scope="col">Jenis Jabatan</th>
            <th scope="col">action</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
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
        jenisKopetensi: "",
        pendidikanTerakhir: "",
        namaLengkap: "",
        nip: "",
        umur: "",
        jenisPeserta: "",
        jabatan: "",
        jenisKelamin: "",
        riwayatJabatan: "",
        lvlOrganisasi: "",
        lembagaPendidikan: "",
        training: ""
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
          const { data } = await axios.get(`/self/${id}`);
          debugger;
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
          await await axios.put(`/self/${id}`, this.payload);
        } else {
          await await axios.post("/self", this.payload);
        }

        this.$router.push("/selfAssesment");
      } catch (e) {
        console.error(e); this.handleApiError(error);;
        this.error = e.message;
      }
    }
  }
};
</script>
<style>
@import '~semantic-ui-step/step.css';
</style>
