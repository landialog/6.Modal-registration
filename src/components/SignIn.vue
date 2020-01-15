<template>
  <modal title="Войти" @close="$emit('close')">
    <div slot="body">
<form @submit.prevent="onSubmit">
        <!-- input name -->
        <div class="form-item" :class="{ errorInput: $v.login.$error }">
          <label>Login:</label>
          <p class="errorText" v-if="!$v.login.required">Field is required</p>
          <input v-model="login" :class="{ error: $v.login.$error }" @change="$v.login.$touch()" />
        </div>

        <!-- input password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required</p>
          <input v-model="password" :class="{ error: $v.password.$error }" @change="$v.password.$touch()" />
        </div>
        <button class="btn btnPrimary">Submit</button>
      </form>
    </div>
    <div slot="footer">
        <a @click="$emit('go')" class="link">У меня нет аккаунта</a>
      </div>
  </modal>
</template>


<script>
import { required } from "vuelidate/lib/validators";

import modal from "@/components/UI/Modal";
export default {
  components: {
    modal
  },

  data() {
    return {
      login: "",
      email: "",
      password: "",
      repeatPassword:""
    };
  },

  validations: {
    login: {
      required,
    },
    password: {
      required,
    },
  },

  methods: {
    clear() {
      this.login = "";
      this.password = "";
      this.$v.$reset();
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          login: this.login,
          password: this.password
        };
        console.log(user);
        this.clear();
        this.$emit("close");
      }
    }
  }
};
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13px;
  color: red;
}

.form-item {
  &.errorInput .errorText {
    display: block;
  }
}

input.error {
  border-color: red;
}
</style>