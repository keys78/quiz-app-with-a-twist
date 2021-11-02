import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDOHstt64U4aYazGIUAuz6T5miq9g-zdZI",
    authDomain: "feats-5cf77.firebaseapp.com",
    projectId: "feats-5cf77",
    storageBucket: "feats-5cf77.appspot.com",
    messagingSenderId: "271187815275",
    appId: "1:271187815275:web:955d11081291f79f5b3a2e"
})

export const auth = app.auth()
export default app