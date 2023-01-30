import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
}


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

/* setPersistence(auth, browserLocalPersistence) */

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

const login = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(response => resolve(response.user))
      .catch(error => {
        reject({ success: false, message: error.name })
      })
  })
}

const loginWithGoogle = async () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
      .then(response => resolve({ success: true, user: response.user }))
      .catch(error => {
        reject({ success: false, message: error.name })
      })
  })
}

export { login, loginWithGoogle }
