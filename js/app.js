// FOR NAVIGATION WINDOW
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlist");
  const navLinks = document.querySelectorAll(".navlist li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
          }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle(`toggle`);
  });
};
navSlide();


// // FOR FIREBASE

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBfMr-HPtVbpuCs_OTllKPhammy8GhSXSs",
//     authDomain: "ccapdev-mp1-fafd7.firebaseapp.com",
//     databaseURL: "https://ccapdev-mp1-fafd7.firebaseio.com",
//     projectId: "ccapdev-mp1-fafd7",
//     storageBucket: "ccapdev-mp1-fafd7.appspot.com",
//     messagingSenderId: "969176707422",
//     appId: "1:969176707422:web:aa312cb444d9757f931fcf",
//   };
//   // Initialize Firebase
//   var defaultProject = firebase.initializeApp(firebaseConfig);

//   var db = firebase.firestore();

//   db.collection("educations").get().then(function(querySnapshot) {
//       querySnapshot.forEach(function(doc){
//           console.log(`${doc.id} => ${doc.data()}`);
//       });
//   });

//   db.collection("others").get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//       document.getElementById('intro').innerHTML+=`${doc.data().value}`;
//     });
//   });



//   db.collection("organizations").add(newObject).then(function(doc) {
//       console.log("Document written with UID: ", doc.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });

//   db.collection("organizations").doc("3hEeJ37QpmkcHrvrFKjU").delete().then(function(){
//       console.log("Item deleted");
//   })
//   .catch(function(error){
//       console.log("Error in deleting item :"+errpr);
//   });

//   var email = "karl_david@dlsu.edu.ph";
//   var password = "password1026";

//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(function (user) {
//       console.log("user signed in");

//       var user = firebase.auth().currentUser;
//       if (user != null) {
//         console.log(user.email);
//       }
//     })
//     .catch(function (error) {
//       if (error.code == "auth/wrong-password") {
//         alert("wrong password");
//       } else {
//         alert(err.message);
//       }
//     });



// SVG logo check dashoffset
// const logo = document.querySelectorAll("#svglogo path");
// for(let i=0; i<logo.length; i++){
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
