<template>
  <div id="flashMessage" v-if="Store.flashMessage">
    {{ Store.flashMessage }}
  </div>
  <div>
    <span v-if="isAdmin">
      <TabMenu :model="itemsAdmin" />
    </span>
    <span v-else-if="isDoctor">
      <TabMenu :model="itemsDoc" />
    </span>
    <span v-else-if="isUser">
      <TabMenu :model="itemsUser" />
    </span>
    <nav class="navbar navbar-expand">
      <ul v-if="!Store.currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
  <ul v-if="Store.currentUser">
        <tr>
          <td class="table"></td>
          <a class="nav-link" @click="logout">
            <Button label= "LogOut" class="p-button-secondary" id="logout" font-awesome-icon icon="sign-out-alt" />
          </a>
        </tr>
      </ul>
</template>

<script>
import AuthService from '@/services/AuthService.js'

export default {
  inject: ['Store'],
  computed: {
    currentUser() {
      return localStorage.getItem('user')
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    },
    isUser() {
      return AuthService.hasRoles('ROLE_USER')
    }
  },
  methods: {
    logout() {
      AuthService.logout()
      this.$router.go('/ ')
    }
  },

  data() {
    return {
      itemsAdmin: [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'List of User', icon: 'pi pi-fw pi-file', to: '/adminhome' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/about' }
      ],
      itemsDoc: [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/about' }
      ],
      itemsUser: [
        { label: 'Information', icon: 'pi pi-fw pi-home', to: '/patmenu' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/about' }
      ]
    }
  }
}
</script>

<style>
.table {
  width:50%;
  padding-top: 15%;
  align-items: center;
}
body {
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes fade {
  from {
    background: mediumaquamarine;
  }
  to {
    background: transparent;
  }
}
#flashMessage {
  animation-name: fade;
  animation-duration: 6s;
}

 #logout{
   align-content: center;
   align-items: center;
   padding-left: 0px;
   padding-right: 8px;

 }

</style>
