<template>
  <form class="form__login">
    <div class="form__cover"></div>
    <div class="form__loader">
      <div class="spinner active">
        <svg class="spinner__circular" viewBox="25 25 50 50">
          <circle class="spinner__path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10" />
        </svg>
      </div>
    </div>
    <div class="form__content">
      <h1>Login</h1>

      <div class="styled-input">
        <input v-model="username" type="text" class="styled-input__input" />
        <div class="styled-input__placeholder">
          <span class="styled-input__placeholder-text">Username</span>
        </div>
        <div class="styled-input__circle"></div>
      </div>

      <div class="styled-input">
        <input v-model="password" type="password" class="styled-input__input" />
        <div class="styled-input__placeholder">
          <span class="styled-input__placeholder-text">Password</span>
        </div>
        <div class="styled-input__circle"></div>
      </div>

      <button type="button" class="styled-button" @click="submitForm">
        <span class="styled-button__real-text-holder">
          <span class="styled-button__real-text">Submit</span>
          <span class="styled-button__moving-block face">
            <span class="styled-button__text-holder">Submit</span>
          </span>
          <span class="styled-button__moving-block back">
            <span class="styled-button__text-holder">Submit</span>
          </span>
        </span>
      </button>
      <div class="">
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
        <br>
        <div v-if="isSignedIn">
          <button @click="handleSignOut">Sign Out</button>
        </div>
      </div>

    </div>

  </form>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import './FormLoginCss.css'
import firebaseConfig from '../../firebase';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';

firebase.initializeApp(firebaseConfig);
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut } from "firebase/auth";

// import { GoogleAuth, FacebookAuth, CreateNewUser, LoginUser, SignOut } from '../../firebase/firebase.js'

const username = ref('')
const password = ref('')
const isRegister = ref(false)
const auth = getAuth();

const user = ref(null);
const isSignedIn = ref(false);

const uiConfig = {
  signInFlow: 'popup',
  signinSuccessUrl: 'http://localhost:5173/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,

  ],
  callbacks: {
    signInSuccessWithAuthResult: function (authResult) {
      user.value = authResult.user.displayName;
      console.log(authResult)
      isSignedIn.value = true;
      console.log('Signed in by user ' + user.value);

      // so it doesn't refresh the page
      return false;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  }
}

// Initialize the FirebaseUI Widget using Firebase.
const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());


const handleSignOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    user.value = null;
    isSignedIn.value = false;
    console.log('Signed out');
    ui.start('#firebaseui-auth-container', uiConfig);
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

const submitForm = () => {
  console.log('Username:', username.value)
  console.log('Password:', password.value)
}

function placeholderAnimationIn(parent, action) {
  const act = action ? 'add' : 'remove'
  let letters = Array.from(parent.querySelectorAll('.letter'))
  if (!action) letters.reverse()

  letters.forEach((el, i) => {
    setTimeout(() => {
      const isFilled = parent.classList.contains('filled')
      if ((action && !isFilled) || (!action && isFilled)) return
      el.classList[act]('active')
    }, 50 * i)
  })
}

onMounted(async () => {
  await nextTick()
  ui.start('#firebaseui-auth-container', uiConfig)
  const placeholders = document.querySelectorAll('.styled-input__placeholder-text')
  placeholders.forEach(el => {
    const value = el.innerText || '\u00A0'
    el.innerHTML = ''
    for (const char of value) {
      const span = document.createElement('span')
      span.className = 'letter'
      span.textContent = char
      el.appendChild(span)
    }
  })

  const inputs = document.querySelectorAll('.styled-input__input')
  inputs.forEach(input => {
    const parent = input.parentNode
    input.addEventListener('focus', () => {
      parent.classList.add('filled')
      placeholderAnimationIn(parent, true)
    })
    input.addEventListener('blur', () => {
      if (input.value.length) return
      parent.classList.remove('filled')
      placeholderAnimationIn(parent, false)
    })
  })

  setTimeout(() => document.body.classList.add('on-start'), 100)
  setTimeout(() => document.body.classList.add('document-loaded'), 1800)
})
</script>