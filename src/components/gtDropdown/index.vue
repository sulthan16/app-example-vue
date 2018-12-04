<template>
  <ul
    class="pcoded-item pcoded-left-item"
    item-border="true"
    item-border-style="none"
    subitem-border="true"
  >
    <li
      :class="[row.cssClass, { 'pcoded-trigger': isVisibleMenuRow(index)}]"
      @click="toggleMenuRow(index)"
      dropdown-icon="style1"
      subitem-icon="style1"
      v-for="(row, index) in data"
      :key="index"
    >
      <a href="javascript:void(0);" v-if="row.path ===''">
        <span class="pcoded-micon">
          <i :class="['feather', row.icon]"></i>
        </span>
        <span class="pcoded-mtext">{{row.title}}</span>
      </a>
      <router-link v-else :to="row.path">
        <span class="pcoded-micon">
          <i :class="['feather', row.icon]"></i>
        </span>
        <span class="pcoded-mtext">{{row.title}}</span>
      </router-link>
      <ul
        class="pcoded-submenu"
        v-if="row.hasSubmenu && (row.items.length > 0)"
        v-for="(subMenu , indexOf) in row.items"
        :key="indexOf"
      >
        <li
          v-if="subMenu.hasSubmenu && (subMenu.items.length > 0)"
          :class="[subMenu.cssClass, { 'pcoded-trigger': isVisibleSubMenuRow(indexOf)}]"
          dropdown-icon="style1"
          subitem-icon="style1"
          @click="toggleSubMenuRow(indexOf)"
          :key="indexOf"
        >
          <router-link :to="subMenu.path">
            <span class="pcoded-micon">
              <i :class="['feather', subMenu.icon]"></i>
            </span>
            <span class="pcoded-mtext">{{subMenu.title}}</span>
          </router-link>
          <ul
            class="pcoded-submenu"
            v-if="subMenu.hasSubmenu && (subMenu.items.length > 0)"
            v-for="(superSubMenu , indexOf) in subMenu.items"
            :key="indexOf"
          >
            <li>
              <router-link :to="superSubMenu.path">
                <span class="pcoded-micon">
                  <i :class="['feather', superSubMenu.icon]"></i>
                </span>
                <span class="pcoded-mtext">{{superSubMenu.title}}</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li v-else>
          <router-link :to="subMenu.path">
            <span class="pcoded-micon">
              <i :class="['feather', subMenu.icon]"></i>
            </span>
            <span class="pcoded-mtext">{{subMenu.title}}</span>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      visibleMenuRows: [],
      visibleSubMenuRows: [],
      openDropdownlvlTwo: false
    };
  },
  methods: {
    showDropdownlvlTwo() {
      this.showAccordion = false;
      this.openDropdownlvlTwo = !this.openDropdownlvlTwo;
    },
    isVisibleMenuRow(rowId) {
      return this.visibleMenuRows.indexOf(rowId) >= 0;
    },
    showMenuRow(rowId) {
      if (!this.isVisibleMenuRow(rowId)) {
        this.visibleMenuRows.push(rowId);
      }
    },
    hideMenuRow(rowId) {
      if (this.isVisibleMenuRow(rowId)) {
        this.visibleMenuRows.splice(this.visibleMenuRows.indexOf(rowId));
      }
    },
    toggleMenuRow(rowId) {
      if (this.isVisibleMenuRow(rowId)) {
        this.hideMenuRow(rowId);
      } else {
        this.visibleMenuRows = [];
        this.showMenuRow(rowId);
      }
    },

    isVisibleSubMenuRow(rowId) {
      return this.visibleSubMenuRows.indexOf(rowId) >= 0;
    },
    showSubMenuRow(rowId) {
      if (!this.isVisibleSubMenuRow(rowId)) {
        this.visibleSubMenuRows.push(rowId);
      }
    },
    hideSubMenuRow(rowId) {
      if (this.isVisibleSubMenuRow(rowId)) {
        this.visibleSubMenuRows.splice(this.visibleMenuRows.indexOf(rowId));
      }
    },
    toggleSubMenuRow(rowId) {
      if (this.isVisibleSubMenuRow(rowId)) {
        this.hideSubMenuRow(rowId);
      } else {
        this.visibleMenuRows = [];
        this.visibleSubMenuRows = [];
        this.showMenuRow(rowId);
        this.showSubMenuRow(rowId);
      }
    }
  }
};
</script>
