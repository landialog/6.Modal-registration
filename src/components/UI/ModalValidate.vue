<template>
  <modal @close="clear">
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- input name -->
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required">Field is required</p>
          <p
            class="errorText"
            v-if="!$v.name.minLength"
          >Name must have at {{$v.name.$params.minLength.min}} letters</p>
          <input v-model="name" :class="{ error: $v.name.$error }" @change="$v.name.$touch()" />
        </div>

        <!-- input email -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required</p>
          <p class="errorText" v-if="!$v.email.email">Email is not correct</p>
          <input v-model="email" :class="{ error: $v.email.$error }" @change="$v.email.$touch()" />
        </div>

        <!-- input password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required</p>
          <p class="errorText" v-if="!$v.password.minLength">Name must have at {{$v.password.$params.minLength.min}} letters</p>
          <input v-model="password" :class="{ error: $v.password.$error }" @change="$v.password.$touch()" />
        </div>

        <!-- repeat input password -->
        <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
          <label>Repeat password:</label>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical</p>
          <input v-model="repeatPassword" :class="{ error: $v.repeatPassword.$error }" @change="$v.repeatPassword.$touch()" />
        </div>

        <button class="btn btnPrimary">Submit</button>
      </form>
    </div>
  </modal>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

import modal from "@/components/UI/Modal";
export default {
  components: {
    modal
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword:""
    };
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    clear() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.samePassword = "";
      this.repeatPassword = ''
      this.$v.$reset();
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
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