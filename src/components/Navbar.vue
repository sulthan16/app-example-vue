<template>
  <div
    id="pcoded"
    class="pcoded iscollapsed"
    nav-type="st6"
    theme-layout="vertical"
    vertical-placement="left"
    vertical-layout="wide"
    pcoded-device-type="desktop"
    vertical-nav-type="expanded"
    vertical-effect="shrink"
    vnavigation-view="view1"
    fream-type="theme1"
    sidebar-img="false"
    sidebar-img-type="img1"
    layout-type="light"
  >
    <div class="pcoded-overlay-box"></div>
    <div class="pcoded-container navbar-wrapper">
      <nav
        class="navbar header-navbar pcoded-header iscollapsed"
        header-theme="theme1"
        pcoded-header-position="fixed"
      >
        <div class="navbar-wrapper">
          <div class="navbar-logo" logo-theme="theme1">
            <a class="mobile-menu" id="mobile-collapse" href="#!">
              <i class="feather icon-menu icon-toggle-right"></i>
            </a>
            <a href="index.html">
              <img class="img-fluid" src="../assets/images/logo.png" alt="Theme-Logo">
            </a>
            <a class="mobile-options">
              <i class="feather icon-more-horizontal"></i>
            </a>
          </div>

          <div class="navbar-container container-fluid">
            <ul class="nav-left">
              <li class="header-search">
                <div class="main-search morphsearch-search">
                  <div class="input-group">
                    <span class="input-group-addon search-close">
                      <i class="feather icon-x"></i>
                    </span>
                    <input type="text" class="form-control">
                    <span class="input-group-addon search-btn">
                      <i class="feather icon-search"></i>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <a href="#!" onclick="javascript:toggleFullScreen()">
                  <i class="feather icon-maximize full-screen"></i>
                </a>
              </li>
            </ul>
            <ul class="nav-right">
              <li class="header-notification">
                <div class="dropdown-primary dropdown">
                  <div class="dropdown-toggle" data-toggle="dropdown">
                    <i class="feather icon-bell"></i>
                    <span class="badge bg-c-pink">5</span>
                  </div>
                  <ul
                    class="show-notification notification-view dropdown-menu"
                    data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut"
                  >
                    <li>
                      <h6>Notifications</h6>
                      <label class="label label-danger">New</label>
                    </li>
                    <li>
                      <div class="media">
                        <img
                          class="d-flex align-self-center img-radius"
                          src="../assets/images/avatar-4.jpg"
                          alt="Generic placeholder image"
                        >
                        <div class="media-body">
                          <h5 class="notification-user">Sara Soudein</h5>
                          <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                          <span class="notification-time">30 minutes ago</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="header-notification">
                <div class="dropdown-primary dropdown">
                  <div class="displayChatbox dropdown-toggle" data-toggle="dropdown">
                    <i class="feather icon-message-square"></i>
                    <span class="badge bg-c-green">3</span>
                  </div>
                </div>
              </li>
              <li class="user-profile header-notification">
                <div :class="['dropdown-primary', 'dropdown', {show: showDropdown}]" @click="doDropdown">
                  <div class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img
                      src="../assets/images/avatar-4.jpg"
                      class="img-radius"
                      alt="User-Profile-Image"
                    >
                    <span>John Doe</span>
                    <i class="feather icon-chevron-down"></i>
                  </div>
                  <ul
                    :class="['show-notification', 'profile-notification', 'dropdown-menu', {show: showDropdown}]"
                    data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut"
                  >
                    <li>
                      <a href="#!">
                        <i class="feather icon-settings"></i> Settings
                      </a>
                    </li>
                    <li>
                      <a href="user-profile.html">
                        <i class="feather icon-user"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a href="email-inbox.html">
                        <i class="feather icon-mail"></i> My Messages
                      </a>
                    </li>
                    <li>
                      <a href="auth-lock-screen.html">
                        <i class="feather icon-lock"></i> Lock Screen
                      </a>
                    </li>
                    <li>
                      <a v-on:click="logout" href="javascript:void(0)">
                        <i class="feather icon-log-out"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
          <nav
            class="pcoded-navbar"
            navbar-theme="theme1"
            active-item-theme="theme1"
            pcoded-header-position="relative"
            sub-item-theme="theme2"
            active-item-style="style0"
            pcoded-navbar-position="fixed"
          >
            <div class="pcoded-inner-navbar main-menu">
              <div class="pcoded-navigatio-lavel">Navigation</div>
              <ul class="pcoded-item pcoded-left-item">
                <li class>
                  <router-link to="/">
                    <span class="pcoded-micon">
                      <i class="feather icon-aperture rotate-refresh"></i>
                    </span>
                    <span class="pcoded-mtext">Dashboard</span>
                  </router-link>
                </li>
                <li
                  v-if="role === 'PIC'"  
                  :class="['pcoded-hasmenu', { 'pcoded-trigger': showAcordion}]"
                  @click="show"
                  dropdown-icon="style1"
                  subitem-icon="style1"
                >
                  <a href="javascript:void(0)">
                    <span class="pcoded-micon">
                      <i class="feather icon-sidebar"></i>
                    </span>
                    <span class="pcoded-mtext">Management</span>
                    <span class="pcoded-badge label label-warning">NEW</span>
                  </a>
                  <ul class="pcoded-submenu">
                    <li class>
                      <router-link to="/managementInstansi">
                        <span class="pcoded-micon">
                          <i class="feather icon-aperture rotate-refresh"></i>
                        </span>
                        <span class="pcoded-mtext">Instansi</span>
                      </router-link>
                    </li>
                    <li class>
                      <router-link to="/managementPengguna">
                        <span class="pcoded-micon">
                          <i class="feather icon-aperture rotate-refresh"></i>
                        </span>
                        <span class="pcoded-mtext">Pengguna</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li v-if="role === 'ASN'" class>
                  <router-link to="/selfAssesment">
                    <span class="pcoded-micon">
                      <i class="feather icon-menu"></i>
                    </span>
                    <span class="pcoded-mtext">Self Assesment</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
          <div class="pcoded-content">
            <div class="pcoded-inner-content">
              <div class="main-body">
                <div class="page-wrapper">
                  <div class="page-header"></div>
                  <div class="page-body">
                    <router-view/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDropdown: false,
      showAcordion: false,
      role: ""
    };
  },
  methods: {
    show() {
      this.showAcordion = !this.showAcordion;
    },
    doDropdown(){
        this.showDropdown = !this.showDropdown;
    },
    changeRole(value) {
      this.role = value;
    },
    logout() {
      localStorage.removeItem("role");
      this.$router.push("/login");
    }
  },
  mounted() {
    if (localStorage.getItem("role")) {
      this.role = localStorage.getItem("role");
    }
  },
  beforeCreate() {
    document.body.className = "dashboard";
  }
};
</script>

<style>
@import "../assets/bootstrap/css/bootstrap.min.css";
@import "../assets/icon/themify-icons/themify-icons.css";
@import "../assets/icon/icofont/css/icofont.css";
@import "../assets/icon/feather/css/feather.css";
@import "../assets/pages/prism/prism.css";
@import "../assets/css/style.css";
.dashboard {
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #f5f5f5;
}
</style>
