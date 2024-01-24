import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAg1Ikj3EFn7DUHkNUJhJFG3kbk4liobLE",
  authDomain: "zugiprojectlogin.firebaseapp.com",
  projectId: "zugiprojectlogin",
  storageBucket: "zugiprojectlogin.appspot.com",
  messagingSenderId: "2627250647",
  appId: "1:2627250647:web:bc1f0d1dec3f50044c8392"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener('click', function(){
  document.getElementById("register-div").style.display = "inline";
  document.getElementById("login-div").style.display = "none";
});

document.getElementById("log-btn").addEventListener('click', function(){
  document.getElementById("register-div").style.display = "none";
  document.getElementById("login-div").style.display = "inline";
});

document.getElementById("login-btn").addEventListener('click', function(){
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("login-div").style.display = "none";
      document.getElementById("result").innerHTML = "Welcome Back<br>" + loginEmail + " was Login Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("login-div").style.display = "none";
      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    });
});

document.getElementById("register-btn").addEventListener('click', function(){
  const registerEmail = document.getElementById("register-email").value;
  const registerPassword = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if(registerPassword !== confirmPassword) {
    alert("Please check the entered password. They don't match.");
    return; // Stop further execution if passwords don't match
  }

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML = "Welcome <br>" + registerEmail + " was Registered Successfully";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML = "Sorry ! <br>" + errorMessage;
    });
});

document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
    document.getElementById("result-box").style.display = "none";
    document.getElementById("login-div").style.display = "inline";
  }).catch((error) => {
    document.getElementById("result").innerHTML = "Sorry ! <br>" + error.message;
  });
});





// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAArllZQ1De8DV9q8-_rJ9s-UpfbJ0opvI",
//   authDomain: "loginsignin-fe1b2.firebaseapp.com",
//   projectId: "loginsignin-fe1b2",
//   storageBucket: "loginsignin-fe1b2.appspot.com",
//   messagingSenderId: "784741297497",
//   appId: "1:784741297497:web:0c32252c3fefae71907048"
// };

//  const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);


//   document.getElementById("reg-btn").addEventListener('click', function(){
//    document.getElementById("register-div").style.display="inline";
//    document.getElementById("login-div").style.display="none";
// });

// document.getElementById("log-btn").addEventListener('click', function(){
//  document.getElementById("register-div").style.display="none";
//  document.getElementById("login-div").style.display="inline";

// });

//   document.getElementById("login-btn").addEventListener('click', function(){
//    const loginEmail= document.getElementById("login-email").value;
//    const loginPassword =document.getElementById("login-password").value;

//    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     document.getElementById("result-box").style.display="inline";
//      document.getElementById("login-div").style.display="none";
//      document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById("result-box").style.display="inline";
//      document.getElementById("login-div").style.display="none";
//      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

//   });
// });


//   document.getElementById("register-btn").addEventListener('click', function(){

//    const registerEmail= document.getElementById("register-email").value;
//    const registerPassword =document.getElementById("register-password").value;

//    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     document.getElementById("result-box").style.display="inline";
//      document.getElementById("register-div").style.display="none";
//      document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById("result-box").style.display="inline";
//      document.getElementById("register-div").style.display="none";
//      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

//   });
// });


// document.getElementById("log-out-btn").addEventListener('click', function(){
//   signOut(auth).then(() => {
//      document.getElementById("result-box").style.display="none";
//        document.getElementById("login-div").style.display="inline";
//   }).catch((error) => {
//      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
//   });

// });
