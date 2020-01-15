<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">ModalValidate</div>
            <ul class="navbar-list">
              <li class="navbar-item">
                <a @click="signInModal = true" class="navbar-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  Войти
                </a>
                <signIn v-show="signInModal" @close="closeSignIn" @go="goToModal('signInModal')" />
              </li>
              <li class="navbar-item">
                <a @click="signUpModal = true" class="navbar-link" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Регистрация
                </a>
                <signUp v-show="signUpModal" @close="closeSignUp" @go="goToModal('signUpModal')"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import signIn from "@/components/SignIn";
import signUp from "@/components/SignUp";

export default {
  components: {
    signIn,
    signUp
  },
  data() {
    return {
      signInModal: false,
      signUpModal: false
    };
  },
  methods: {
    closeSignIn() {
      this.signInModal = false;
    },

    closeSignUp() {
      this.signUpModal = false;
    },

    goToModal(element) {
      if (element === 'signInModal') {
       this.signInModal = false;
         this.signUpModal = true;
      } else {
         this.signUpModal = false;
        this.signInModal = true;
       
      }
    }
  }
};
</script>
