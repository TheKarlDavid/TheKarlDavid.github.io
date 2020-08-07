// FOR FIREBASE

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


  db.collection("contacts").get().then((snapshot) => {
    snapshot.forEach((doc) => {

        document.getElementById('contactInfo').innerHTML+=`<a href="${doc.data().contact}"><img src="${doc.data().logo}" width="75" height="75px"></a></hr>`;
    });
  });

//   db.collection("others").doc("image").get().then((doc) => {
//       document.getElementById('img_github').innerHTML+=`<img src="${doc.data().github}">${doc.data().github}</img>`;
//   });


