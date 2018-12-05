<template>
  <form @submit.prevent="save">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h2>
          <router-link to="/managementPengguna" class="mr-4 btn btn-outline-secondary">&lt;</router-link>
          <span v-if="!editMode">New</span>
          <span v-if="editMode">Edit</span>
          Pengguna
        </h2>
        <hr>
        <div class="mb-3">
          <label>Jenis User</label>
          <select class="form-control bootstrap-select" id="inputGroupSelect01" v-model="payload.jenisUser">
            <option selected>Choose...</option>
            <option value="ASN">ASN</option>
            <option value="PIC">PIC</option>
            <option value="ATASAN">ATASAN</option>
            <option value="PYB">PYB</option>
            <option value="PPK">PPK</option>
          </select>
        </div>
        <template v-if="payload.jenisUser === 'ASN'">
          <div class="mb-3">
            <label>Nama Organisasi</label>
            <select
              v-if="instansi"
              class="form-control bootstrap-select"
              id="inputGroupSelect01"
              v-model="payload.namaOrganisasi"
            >
              <option selected>Choose...</option>
              <template v-for="row in instansi">
                <option :key="row.id" :value="row.namaLvlOrganisasi">{{row.namaLvlOrganisasi}}</option>
              </template>
            </select>
          </div>
          <div class="mb-3">
            <label>Jumlah ASN</label>
            <input class="form-control" type="number" v-model="payload.jumlahASN">
          </div>
        </template>
        <template v-else>
          <div class="mb-3">
            <label>Nama</label>
            <input class="form-control" type="text" v-model="payload.nama">
          </div>
          <div class="mb-3">
            <label>NIP</label>
            <input class="form-control" type="text" v-model="payload.nip">
          </div>
          <div class="mb-3">
            <label>Username</label>
            <input class="form-control" type="text" v-model="payload.username">
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input class="form-control" type="text" v-model="payload.password">
          </div>
        </template>
        <div class="mb-3 clearfix">
          <div>
            <button type="submit" class="btn btn-block btn-primary">Generate</button>
            <span v-if="error" class="text-danger">{{ error }}</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6"></div>
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
        jenisUser: "",
        namaOrganisasi: "",
        jumlahASN: 0,
        nama: "",
        nip: "",
        password: "",
        username: ""
      },
      instansi: {}
    };
  },

  async mounted() {
    this.initialize();
    this.get();
  },

  methods: {
    async initialize() {
      try {
        if (this.editMode) {
          const id = this.$route.params.id;
          const { data } = await axios.get(`/users/${id}`);
          this.payload = data;
        }
      } catch (e) {
        console.error(e); this.handleApiError(error);;
        this.error = e.message;
      }
    },

    async get() {
      try {
        const response = await axios.get("/contacts");
        this.instansi = response.data;
        this.loaded = true;
      } catch (e) {
        console.error(e); this.handleApiError(error);;
      }
    },
    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    async save() {
      try {
        if (this.editMode) {
          const id = this.$route.params.id;
          await await axios.put(`/users/${id}`, this.payload);
        } else {
          
          if(this.payload.jenisUser === 'ASN') {
              var i
            for (i = 0; i < this.payload.jumlahASN; i++) {        
                this.payload.username = this.payload.username != ''? this.payload.username: this.makeid();
                this.payload.password =  this.payload.password != '' ? this.payload.password : this.makeid();
          
                await await axios.post("/users", this.payload)
            }
          }else {
              this.payload.username = this.payload.username != ''? this.payload.username: this.makeid();
              this.payload.password =  this.payload.password != '' ? this.payload.password : this.makeid();
          
              await await axios.post("/users", this.payload)  
          }
          
        }

        this.$router.push("/managementPengguna");
      } catch (e) {
        console.error(e); this.handleApiError(error);;
        this.error = e.message;
      }
    }
  }
};
</script>
