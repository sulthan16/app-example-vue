<template>
  <div>
    <h1 class="mb-4">Mangement Pengguna</h1>

    <div class="row" v-if="!loaded">
      <div
        class="col-12 col-sm-4"
        v-for="(value, index) in Array.from(Array(6).keys())"
        :key="index"
      >
        <div class="ph-item">
          <div class="ph-col-12">
            <div class="ph-picture"></div>
            <div class="ph-row">
              <div class="ph-col-4"></div>
              <div class="ph-col-8 empty"></div>
              <div class="ph-col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="loaded">
      <div class="mb-4 col-md-12">
        <div class>
          <div class="pull-right">
            <router-link
              :to="'/managementPengguna/add'"
              class="btn btn-primary btn-sm pull-right"
            >Tambah Pengguna</router-link>
          </div>
        </div>
      </div>
      <div class="table-responsive-sm col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Instantsi</th>
              <th scope="col">Role</th>
              <th scope="col">Level Organisasi</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody v-for="(contact, index) in contacts" :key="contact.id">
            <tr>
              <th scope="row">{{ index + 1}}</th>
              <td>{{ contact.username }}</td>
              <td>{{ contact.password }}</td>
              <td>{{ contact.provinsi }}</td>
              <td>{{ contact.jenisUser }}</td>
              <td>{{ contact.level }}</td>
              <td colspan="2">
                <router-link
                  :to="'/managementPengguna/edit/' + contact.id"
                  class="btn btn-light btn-sm"
                >Edit</router-link>&nbsp;
                <button
                  type="button"
                  @click="remove(contact.id)"
                  class="btn btn-outline-danger btn-sm"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contacts: [],
      loaded: false
    };
  },

  async mounted() {
      this.get();
  },
  methods: {
    async get() {
      try {
        const response = await axios.get("/users");
        this.contacts = response.data;
        this.loaded = true;
      } catch (e) {
        console.error(e); this.handleApiError(error);;
      }
    },
    async remove(id) {
      try {
        if (confirm("Are you sure?")) {
          await axios.delete(`/users/${id}`);
          this.get();
        }
      } catch (e) {
        console.error(e); this.handleApiError(error);;
        this.error = e.message;
      }
    }
  }
};
</script>
