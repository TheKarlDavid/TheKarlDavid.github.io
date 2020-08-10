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

  
// LOGIN

//   document.getElementById("login").addEventListener("click", function(e){
//     e.preventDefault();

//     let email = $("#email").val()
//     let password = $("#password").val()

//     // console.log("email is "+email+" and pass is "+password)

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(function (user) {
//         console.log("user signed in");
//         // document.getElementById("bodyLogin").style.display="none"
//         $( "#bodyLogin" ).hide();
//         $( "#bodyEdit" ).show();
  
//         var user = firebase.auth().currentUser;
//         if (user != null) {
//           console.log(user.email);
//         }
//       })
//       .catch(function (error) {
//         if (error.code == "auth/wrong-password") {
//         //   alert("wrong password");
//         // console.log("wrong password")
//           document.getElementById("warning").style.visibility="visible"
//         } else {
//           alert(error.message);
//           document.getElementById("warning").style.visibility="visible"
//         }
//     });
// })



  // db.collection("organizations").add(newObject).then(function(doc) {
  //     console.log("Document written with UID: ", doc.id);
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });

  // db.collection("organizations").doc("3hEeJ37QpmkcHrvrFKjU").delete().then(function(){
  //     console.log("Item deleted");
  // })
  // .catch(function(error){
  //     console.log("Error in deleting item :"+errpr);
  // });


//EDUCATION

  db.collection("educations").orderBy("year_start","desc").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      if(doc.data().awards === undefined){
          if(doc.data().year_end === undefined && doc.data().school === "College"){
            document.getElementById('educationInfo').innerHTML+=`<button class="delButton">Delete</button>
            <div><img class="educ_logo"src="${doc.data().logo}"></div>
            <div class="educName">${doc.data().school}</div>
            <div class="educLevel">${doc.data().education}</div>
            <div class="educCourse">Course: ${doc.data().degree}</div>
            <div class="educYear">A.Y. ${doc.data().year_start} - present</div><br>`;
          }
          else{
            document.getElementById('educationInfo').innerHTML+=`<button class="delButton">Delete</button>
            <div><img class="educ_logo" src="${doc.data().logo}"></div>
            <div class="educName">${doc.data().school}</div>
            <div class="educLevel">${doc.data().education}</div>
            <div class="educYear">A.Y. ${doc.data().year_start} - ${doc.data().year_end}</div><br>`;
          }
      }
      else{
        document.getElementById('educationInfo').innerHTML+=`<button class="delButton">Delete</button>
        <div><img class="educ_logo" src="${doc.data().logo}"></div>
        <div class="educName">${doc.data().school}</div>
        <div class="educLevel">${doc.data().education}</div>
        <div class="educStrand">Strand: ${doc.data().strand}</div>
        <div class="educAward">${doc.data().awards}</div>
        <div class="educYear">A.Y. ${doc.data().year_start} - ${doc.data().year_end}</div><br>`;
      }

    });
  });

  
    //GET modal element, modal button, close button
    var modal = document.getElementById('simpleModal');
    var modalBtn = document.getElementById('addEduc');
    var addBtn = document.getElementById('inputAddEduc');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
  
    //LISTENERS for open click, close click, outside click
    modalBtn.addEventListener('click', openModal);
    addBtn.addEventListener('click', addModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
  
    function openModal(){
      modal.style.display='block';
    }
    
    function addModal(){
      console.log("add new");
      modal.style.display='none';
    }
    
    function closeModal(){
      modal.style.display='none';
    }
  
    function outsideClick(e){
      if(e.target == modal){
        modal.style.display='none';
      }
    }









