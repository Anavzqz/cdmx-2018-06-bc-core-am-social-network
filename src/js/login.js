window.onload = initialization;
let formLogin;
let loginEmail;
let google;
let facebook;
let refUserAuth;

function initialization() {
  const config = {
    apiKey: 'AIzaSyCjN9x4Q4B8Nx5xf1ZoKLpWn4mTPiuuC3c',
    authDomain: 'red-social-19985.firebaseapp.com',
    databaseURL: 'https://red-social-19985.firebaseio.com',
    projectId: 'red-social-19985',
    storageBucket: 'red-social-19985.appspot.com',
    messagingSenderId: '169924096887'
  };
      
  firebase.initializeApp(config);

  // formLogin = document.getElementById('form-login'); // Hace referencia al formulario
  email = document.getElementById('input-correo');
  pass = document.getElementById('input-password');
  loginEmail = document.getElementById('submit');
  loginEmail.addEventListener('click', authLogin);
  google = document.getElementById('submit-google');
  google.addEventListener('click', authGoogle); // Se crea el evento del boton submit del formulario
  facebook = document.getElementById('submit-facebook');
  facebook.addEventListener('click', authFacebook); // Se crea el evento del boton submit del formulario
  refUserAuth = firebase.auth();
}

function authGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  valitator(provider);
}

function authFacebook() {
  let provider = new firebase.auth.FacebookAuthProvider();
  valitator(provider);
}

function valitator(provider) {
  refUserAuth.signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}

function authLogin(event) {
  event.preventDefault();
  refUserAuth.signInWithEmailAndPassword(email.value, pass.value)
    .then(function() {
      alert(email.value + ' Bienvenidx');
      goTimeline();
    })
    .catch(function(error) {
      alert('Confirma que hayas escrito tus datos correctamente!');
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

function goTimeline(event) {
  window.location.href = '../views/timeline.html';
}