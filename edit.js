// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBfMr-HPtVbpuCs_OTllKPhammy8GhSXSs",
    authDomain: "ccapdev-mp1-fafd7.firebaseapp.com",
    databaseURL: "https://ccapdev-mp1-fafd7.firebaseio.com",
    projectId: "ccapdev-mp1-fafd7",
    storageBucket: "ccapdev-mp1-fafd7.appspot.com",
    messagingSenderId: "969176707422",
    appId: "1:969176707422:web:aa312cb444d9757f931fcf",
  };
  // Initialize Firebase
  var defaultProject = firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  document.getElementById("login").addEventListener("click", function(e){
    e.preventDefault();

    let email = $("#email").val()
    let password = $("#password").val()

    console.log("email is "+email+" and pass is "+password)

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log("user signed in");
  
        var user = firebase.auth().currentUser;
        if (user != null) {
          console.log(user.email);
        }
      })
      .catch(function (error) {
        if (error.code == "auth/wrong-password") {
        //   alert("wrong password");
          console.log("wrong password")
        } else {
        //   alert(error.message);
          console.log(error.message);
        }
    });
})

//   firebase.auth().onAuthStateChanged(function(user){
//       if(user){
//         var user = firebase.auth().currentUser;
//         if(user != null){
//             let email_id = user.email;
//         }
//       }
//       else{
          
//       }
//   });

//   function login(){
//     e.preventDefault();
//       let userEmail = document.getElementById("email").value;
//       let userPass = document.getElementById("password").value;

//       firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
        
//         window.alert("Error : " +errorMessage);
//       }) 
//   }




