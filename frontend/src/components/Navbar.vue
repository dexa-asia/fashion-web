<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img
          src="@/assets/img/identities/logo.png"
          class="navbar-image bg-light rounded p-1"
        />
       
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"
              >BERANDA</a
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PRIA
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item" to="/member/candidate"
                  >Koko Tactical</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/member/residence"
                  >Koko PDH</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/member/residence"
                  >Sirwal</router-link
                >
              </li>
              <li class="dropdown-divider"></li>
              <li><router-link class="dropdown-item" to="/member">Semua Produk</router-link></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              WANITA
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item" to="/product/saving">Gamis Tactical</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/product/lending">Hijab Tactical</router-link>
              </li>
              <li><router-link class="dropdown-item" to="/product/other">Alas Kaki</router-link></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
//import { clearUserSession, getUserSession } from '../services/auth_service'

export default {
  data() {
    return {
      //user: getUserSession(),
      isFixed: true,
    }
  },
  methods: {
    logout() {
      clearUserSession()
      this.$router.push('/auth')
    },
  },
}
</script>

<style scoped>
.top {
  height: 40px;
  background: #fff;
}
.navbar {
  font-size: 1em;
}
.navbar-brand {
  font-weight: 500;
}
.navbar-brand .navbar-image {
  height: 25px;
}
.navbar.fixed-top {
  background-color: #266867 !important;
}
.navbar .img-lang {
  height: 20px;
}
.navbar-link {
  font-weight: 300;
}
.navbar .nav-item {
  margin-right: 20px;
}
.dropdown-item {
  font-weight: 300;
  font-size: 0.8rem;
}
.navbar .nav-link {
  color: #266867 !important;
}
.navbar .fa {
  color: #266867 !important;
}
</style>
