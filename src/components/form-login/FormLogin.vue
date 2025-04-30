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
          <div class="social-login-buttons">
  <button class="social-btn google" @click="loginWithGoogle">Login with Google</button>
  <button class="social-btn facebook" @click="loginWithFacebook">Login with Facebook</button>
</div>

        </div>

      </form>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  import './FormLoginCss.css'

  import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { onAuthStateChanged, signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBnMV4sdMlEskVL5Sh-InknkkRGYfDvTgw",
    authDomain: "oboe-6e0c1.firebaseapp.com",
    projectId: "oboe-6e0c1",
    storageBucket: "oboe-6e0c1.firebasestorage.app",
    messagingSenderId: "781386500299",
    appId: "1:781386500299:web:97409e33224c3320b9f34e",
    measurementId: "G-3DRW6MRPM3"
}
  const username = ref('')
  const password = ref('')
  
  const logout = async () => {
  try {
    await signOut(auth)
    console.log('Đã logout')
  } catch (e) {
    console.error('Logout error:', e)
  }
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

initializeApp(firebaseConfig)
const auth = getAuth()

const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    window.location.href = "/intro" 
    logout()
  } catch (e) {
    console.error(e)
  }
}

const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    console.log("Facebook user:", result.user)
     window.location.href = "/intro" 
     logout()

  } catch (e) {
    console.error(e)
  }
}
onMounted(() => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(" Already signed in:", user.email)
    } else {
      console.log(" Not signed in")
    }
  })
})
  </script>


  