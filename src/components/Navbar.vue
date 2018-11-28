<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
      <router-link to="/" class="navbar-brand lead" href="#">SISTEM INFORMASI Pengembangan Informasi</router-link>
      <div class="container">
        <ul class="navbar-nav flex-row ml-md-auto" style="float:right">
          <li @click="show()" :class="['nav-item', 'dropdown',{ show: showDropdown}]">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button">Users</a>
            <div :class="['dropdown-menu','dropdown-menu-right',{ show: showDropdown}]">
              <!-- <button class="dropdown-item" @click="changeRole('ASN')">ASN</button>
              <button class="dropdown-item" @click="changeRole('PIC')">PIC</button> -->
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="logout" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div id="wrapper" class="toggled" style="margin-top: 55px;">
      <!-- Sidebar -->
      <div id="sidebar-wrapper" class="bg-dark">
        <ul class="sidebar-nav">
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <template v-if="role === 'PIC'">
          <li>
            <router-link to="/managementInstansi">Management Instansi</router-link>
          </li>
          <li>
            <router-link to="/managementPengguna">Management Pengguna</router-link>
          </li>
          </template>
          <template v-else>
          <li>
            <router-link to="/selfAssesment">Self Asessment</router-link>
          </li>
          </template>
        </ul>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid" style="margin-top: 20px;">
          <router-view></router-view>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropdown: false,
      role: '',
    };
  },
  methods: {
    show() {
      this.showDropdown = !this.showDropdown;
    },
    changeRole(value){
        this.role = value
    },
    logout(){
        localStorage.removeItem('role');
        this.$router.push('/login');
    }
  },
  mounted(){
      if(localStorage.getItem('role')){
          this.role = localStorage.getItem('role');
      }
  },
  beforeCreate() {
        document.body.className = 'dashboard';
    },
};
</script>

<style>
@import "../assets/simple-sidebar.css";
.dashboard {
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #f5f5f5;
}
</style>
