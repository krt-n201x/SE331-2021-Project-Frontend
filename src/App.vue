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
      <ul v-if="Store.currentUser">
        <li class="nav-item">
          <a class="nav-link" @click="logout">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
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
      this.$router.go()
    }
  },

  data() {
    return {
      itemsAdmin: [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/about' }
      ],
      itemsDoc: [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/about' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/responpat' }
      ],
      itemsUser: [
        { label: 'Iformation', icon: 'pi pi-fw pi-home', to: '/patmenu' },
        { label: 'About', icon: 'pi pi-fw pi-file', to: '/about' }
      ]
    }
  }
}
</script>

<style>
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
</style>
