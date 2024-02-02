// Firebase 초기화
var firebaseConfig = {
    apiKey: "AIzaSyCWI27iYb6aoykBEQ9qSOGkPef-alNCruo",
    authDomain: "code-3108c.firebaseapp.com",
    projectId: "code-3108c",
    storageBucket: "code-3108c.appspot.com",
    messagingSenderId: "229428264935",
    appId: "1:229428264935:web:816128e2484204c7538742",
    measurementId: "G-D6ZPDTWRCB"
  };
  
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  
  // 로그인 함수
  function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 로그인 성공
        alert("Login successful!");
      })
      .catch((error) => {
        alert("Login failed. " + error.message);
      });
  }
  
  // 회원가입 함수
  function register() {
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 회원가입 성공
        alert("Registration successful!");
      })
      .catch((error) => {
        alert("Registration failed. " + error.message);
      });
  }
  