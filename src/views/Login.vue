<template lang="html">
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="headline">
          <span class="font-weight-bold d-flex align-center">
            Login
          </span>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ValidationObserver ref="observer" v-slot="{ invalid, validated, passes, validate }">
          <v-form class="py-12 px-2">
            <ValidationProvider v-slot="{ errors, valid }" name="email" rules="required|email">
              <v-text-field v-model="form.username" type="email" label="Email" color="primary" :error-messages="errors" />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors, valid }" name="password" rules="required|strong_password">
              <v-text-field v-model="form.password" :type="visibility ? 'text' : 'password'" label="Password" color="primary" :error-messages="errors" :append-icon="visibility ? 'mdi-eye-off' : 'mdi-eye'" @click:append="visibility = !visibility" />
            </ValidationProvider>
            <v-btn color="primary" x-large block class="text-none" @click="login()">
              Login
            </v-btn>
            <div class="mt-5 text-center">
              <a href="#" class="grey--text">Lupa password?</a>
            </div>
          </v-form>
        </ValidationObserver>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <span class="grey--text">Belum punya akun? </span>
        <a class="primary--text font-weight-bold" @click="register()">Daftar disini</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      visibility: false,
      password: "Password",
      form: {
        username: "",
        password: "",
        client_id: 6,
        grant_type: "password"
      }
    };
  },
  methods: {
    register() {
      this.$router.push({
        name: "register",
        query: { redirect: this.$route.query.redirect }
      });
    },
    async login() {}
  }
};
</script>
