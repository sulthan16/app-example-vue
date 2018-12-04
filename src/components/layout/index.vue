<template>
  <div
    id="pcoded"
    class="pcoded iscollapsed"
    nav-type="st6"
    theme-layout="vertical"
    vertical-placement="left"
    vertical-layout="wide"
    :pcoded-device-type="deviceType"
    :vertical-nav-type="collapseNavbar ? 'offcanvas' : 'expanded'"
    :vertical-effect="verticalEffect"
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
            <a
              class="mobile-menu"
              id="mobile-collapse"
              href="javascript:void(0)"
              @click="doCollapse"
            >
              <i
                :class="['feather', 'icon-menu ',collapseNavbar ?'icon-toggle-left': 'icon-toggle-right']"
              ></i>
            </a>
            <router-link to="/">
              <img class="img-fluid" src="../../assets/images/logo.png" alt="Theme-Logo">
            </router-link>
            <a class="mobile-options" @click="mobileOptions">
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
            </ul>
            <ul class="nav-right" :style="[injectStyle]">
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
                          src="../../assets/images/avatar-4.jpg"
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
                <div
                  :class="['dropdown-primary', 'dropdown', {show: showDropdown}]"
                  @click="doDropdown"
                >
                  <div class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img
                      src="../../assets/images/avatar-4.jpg"
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
                      <a @click="logout" href="javascript:void(0)">
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
      <div class="pcoded-main-container" style="margin-top: 56px;">
        <div class="pcoded-wrapper">
          <nav
            class="pcoded-navbar"
            navbar-theme="theme1"
            active-item-theme="theme1"
            sub-item-theme="theme2"
            active-item-style="style0"
            pcoded-navbar-position="fixed"
          >
            <div
              class="pcoded-inner-navbar main-menu mCustomScrollbar _mCS_1"
              style="height: calc(100% - 80px);"
            >
              <div
                id="mCSB_1"
                class="mCustomScrollBox mCS-light mCSB_vertical_horizontal mCSB_inside"
                style="max-height: none;"
                tabindex="0"
              >
                <div
                  id="mCSB_1_container_wrapper"
                  class="mCSB_container_wrapper mCS_x_hidden mCS_no_scrollbar_x"
                >
                  <div
                    id="mCSB_1_container"
                    class="mCSB_container"
                    style="position: relative; top: -10px; left: 0px; width: 100%;"
                    dir="ltr"
                  >
                    <div class="pcoded-navigatio-lavel" menu-title-theme="theme5">Navigation</div>

                    <gt-menu :data="menu"/>
                  </div>
                </div>
                <div
                  id="mCSB_1_scrollbar_vertical"
                  class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                  style="display: block;"
                >
                  <div class="mCSB_draggerContainer">
                    <div
                      id="mCSB_1_dragger_vertical"
                      class="mCSB_dragger"
                      style="position: absolute; min-height: 30px; display: block; height: 22px; max-height: 230px; top: 1px;"
                    >
                      <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                  </div>
                </div>
                <div
                  id="mCSB_1_scrollbar_horizontal"
                  class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_horizontal"
                  style="display: none;"
                >
                  <div class="mCSB_draggerContainer">
                    <div
                      id="mCSB_1_dragger_horizontal"
                      class="mCSB_dragger"
                      style="position: absolute; min-width: 30px; width: 0px; left: 0px;"
                    >
                      <div class="mCSB_dragger_bar"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div class="pcoded-content">
            <div class="pcoded-inner-content">
              <div class="main-body">
                <div class="page-wrapper">
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
import gtDropdown from "../gtDropdown/index";
export default {
  components: {
    "gt-menu": gtDropdown
  },
  data() {
    return {
      showDropdown: false,
      collapseNavbar: false,
      deviceType: "desktop",
      verticalEffect: "shrink",
      role: "",
      window: {
        width: 0,
        height: 0
      },
      menu: [
        {
          title: "Dashboard",
          path: "/",
          icon: "icon-aperture rotate-refresh",
          hasSubmenu: false,
          cssClass: "",
          items: []
        },
        {
          title: "Management",
          path: "",
          icon: "icon-sidebar",
          hasSubmenu: true,
          cssClass: "pcoded-hasmenu",
          items: [
            {
              title: "Instansi",
              path: "/selfAssesment",
              icon: "icon-sidebar",
              hasSubmenu: false,
              cssClass: "pcoded-hasmenu",
              items: []
            }
          ]
        },
        {
          title: "Parent",
          path: "",
          icon: "icon-sidebar",
          hasSubmenu: true,
          cssClass: "pcoded-hasmenu",
          items: [
            {
              title: "Children 1",
              path: "",
              icon: "",
              hasSubmenu: true,
              cssClass: "pcoded-hasmenu",
              items: [
                {
                  title: "Children 2",
                  path: "/selfAssesment",
                  icon: "",
                  hasSubmenu: false,
                  cssClass: "",
                  items: []
                }
              ]
            }
          ]
        }
      ],
      injectStyle: {}
    };
  },
  methods: {
    doDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    doCollapse() {
      this.collapseNavbar = !this.collapseNavbar;
    },
    changeRole(value) {
      this.role = value;
    },
    logout() {
      localStorage.removeItem("menu");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    mobileCondition() {
      if (this.window.width <= 768) {
        this.deviceType = "phone";
        this.verticalEffect = "overlay";
        this.collapseNavbar = true;
        this.injectStyle = { display: "none" };
      }
    },
    mobileOptions() {
      if (this.injectStyle.display === "none") {
        this.injectStyle = { display: "block" };
      } else {
        this.injectStyle = { display: "none" };
      }
    }
  },
  mounted() {
    this.mobileCondition();
  },
  beforeCreate() {
    document.body.className = "dashboard";
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style>
.dashboard {
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #f5f5f5;
}
</style>
