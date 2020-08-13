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

  db.collection("others").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      document.getElementById('introAbout').innerHTML+=`${doc.data().value}`;
    });
  });

  db.collection("contacts").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      // document.getElementById('contactAbout').innerHTML+=`<a href="${doc.data().contact}"><img src="${doc.data().logo}" width="75" height="75px">${doc.data().username}</a>`;  
      document.getElementById('contactAbout').innerHTML+=`<a href="${doc.data().contact}"${doc.data().username}><img class="contact_logo" src="${doc.data().logo}" width="75" height="75px">${doc.data().username}</a>`;   
    });
  });

  db.collection("organizations").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      document.getElementById('orgAbout').innerHTML+=`<img class="orgImg" src="${doc.data().logo}">
      <div id="orgName">${doc.data().name}</div>
      <div id="orgPosition">${doc.data().position}</div><br>`;

    });
  });

  db.collection("skills").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        document.getElementById('skillsAbout').innerHTML+=`<div>${doc.data().name}</div>`;  
        document.getElementById('skillsAbout').innerHTML+=`<div class="skillLevel">${doc.data().level}</div>`;  
      });
  });

  db.collection("hobbies").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      document.getElementById('hobbiesAbout').innerHTML+=`<div>${doc.data().name}</div>`;  
      document.getElementById('hobbiesAbout').innerHTML+=`<img class="hobbiesImg" src= "${doc.data().logo}">`;  
    });
  });

