<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="login">
      <img class="mb-4" src="../../assets/logo.png" alt width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        v-model="username"
        required
        autofocus
      >
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      >
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Authencrypt from "../../mixins/authencrypt";

export default {
  mixins: [Authencrypt],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password
        };

        var eKey = this.jwt.substring(0, 16);
        var aKey = this.jwt.substring(16, 32);

        await await axios
          .post("/auth/login", {
            credentials: this.encrypt(JSON.stringify(credentials), eKey, aKey)
          })
          .then(response => {
            response = response.data;

                if(response.success){
                    var data = this.decrypt(response.data, eKey, aKey);

                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('menu', JSON.stringify(data.menu));

                    this.$store.commit('login');
                    this.$router.push('/');

                    this.state = null;
                }
                else{
                    this.password = null;
                    this.message  = this.$t('user.' + response.message + '_message');
                    this.warning  = this.$t('user.' + response.message);
                    this.state    = 'error';
                }
          })
          .catch(error => {
            console.log(error);
            this.handleApiError(error);
          });
      } catch (e) {
        console.error(e); this.handleApiError(error);;
      }
    }
  },
  beforeCreate() {
    document.body.className = "login";
  }
};
</script>

<style>
.login {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.text-center {
  text-align: center !important;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>

