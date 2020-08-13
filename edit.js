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


//ABOUT ME
db.collection("others").get().then((snapshot) => {
  snapshot.forEach((doc) => {
    document.getElementById('introAbout').innerHTML+=`${doc.data().value}`;
  });
});

db.collection("contacts").get().then((snapshot) => {
  snapshot.forEach((doc) => {
    document.getElementById('contactAbout').innerHTML+=`<button class="editContact"  id="${doc.id}" onclick=editContactInfo(this)>Edit</button> 
    <img class="contact_logo" src="${doc.data().logo}" width="75" height="75px">${doc.data().username}`; 
    document.getElementById('contactAbout').innerHTML+=`<a href="${doc.data().contact}"${doc.data().username}></a>`    
  });
});

db.collection("organizations").get().then((snapshot) => {
  snapshot.forEach((doc) => {
    document.getElementById('orgAbout').innerHTML+=`<img class="orgImg" src="${doc.data().logo}">
    <div id="orgName">${doc.data().name}</div>
    <div id="orgPosition">${doc.data().position}</div>
    <button class="delBtnOrg" id="${doc.id}" onclick=deleteOrg(this)>Delete</button>`;    
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
    document.getElementById('hobbiesAbout').innerHTML+=`<button class="delBtnHobby" id="${doc.id}" onclick=deleteHobby(this)>Delete</button>`;
  });
});

//EDIT INTRO MODAL
  var introModal = document.getElementById('introModal');
  var modalBtnIntro = document.getElementById('editIntro');
  var inputIntro = document.getElementById('inputIntro');
  var editBtnIntro = document.getElementById('inputEditIntro');
  var closeBtnIntro = document.getElementsByClassName('closeBtnIntro')[0];

  //LISTENERS for open click, close click, outside click
  modalBtnIntro.addEventListener('click', openModalIntro);
  closeBtnIntro.addEventListener('click', closeModalIntro);
  window.addEventListener('click', outsideClickIntro);

  function openModalIntro(){
    introModal.style.display='block';
    editBtnIntro.addEventListener('click', function(e){
      e.preventDefault();
      
      if((inputIntro.value != null) && (inputIntro.value != "")){
        db.collection("others").doc("intro").update({
          value: inputIntro.value
        }).catch(function(error) {
          console.error("Error editing document: ", error);
        });  
        console.log("introduction edited");
        introModal.style.display='none';
        clearEditIntro();
      }

    });
  }
  
  function closeModalIntro(){
    introModal.style.display='none';
  }

  function outsideClickIntro(e){
    if(e.target == introModal){
      introModal.style.display='none';
    }
  }

  // EDIT CONTACT LINNKS MODAL

  function editContactInfo(elem){
    var contactModal = document.getElementById('contactModal');
    var inputContact = document.getElementById('formContact');
    var editBtnContact = document.getElementById('inputEditContact');
    var closeBtnContact = document.getElementsByClassName('closeBtnContact')[0];
  
    //LISTENERS for open click, close click, outside click
    closeBtnContact.addEventListener('click', closeModalContact);
    window.addEventListener('click', outsideClickContact);

    contactModal.style.display='block';
      editBtnContact.addEventListener('click', function(e){
        e.preventDefault();
        if((inputContact.inputContactUser.value != "") && (inputContact.inputContactUser.value != null)
          && (inputContact.inputContactLink.value != "") && (inputContact.inputContactLink.value != "")){
          db.collection("contacts").doc(elem.id).update({
            contact: inputContact.inputContactLink.value,
            logo: inputContact.inputContactLogo.value,
            name: inputContact.inputContactSite.value,
            username: inputContact.inputContactUser.value
          })
          console.log("edited contact");
          contactModal.style.display='none';
          clearEditContact();
        }
      });
  
    function closeModalContact(){
      contactModal.style.display='none';
    }
  
    function outsideClickContact(e){
      if(e.target == contactModal){
        contactModal.style.display='none';
      }
    }
  }




// ADD ORG
var orgModal = document.getElementById('orgModal');
var modalBtnOrg = document.getElementById('addOrg');
var inputOrg = document.getElementById('formAddOrg');
var addBtnOrg = document.getElementById('inputAddOrg');
var closeBtnOrg = document.getElementsByClassName('closeBtnOrg')[0];

//LISTENERS for open click, close click, outside click
modalBtnOrg.addEventListener('click', openModalOrg);
closeBtnOrg.addEventListener('click', closeModalOrg);
window.addEventListener('click', outsideClickOrg);

function openModalOrg(){
  orgModal.style.display='block';
  addBtnOrg.addEventListener('click', function(e){
    e.preventDefault();
    
    if(((inputOrg.inputOrgName.value != null) && (inputOrg.inputOrgName.value != ""))&&
      ((inputOrg.inputOrgPos.value != null) && (inputOrg.inputOrgPos.value != ""))){
      console.log("organization added");
      db.collection("organizations").add({
        name: inputOrg.inputOrgName.value,
        logo: inputOrg.inputOrgLogo.value,
        position: inputOrg.inputOrgPos.value

      }).catch(function(error) {
        console.error("Error adding document: ", error);
    });  
      orgModal.style.display='none';
      clearAddOrg();
    }

  });
}

function closeModalOrg(){
  orgModal.style.display='none';
}

function outsideClickOrg(e){
  if(e.target == orgModal){
    orgModal.style.display='none';
  }
}





// ADD HOBBY
var hobbyModal = document.getElementById('hobbyModal');
var modalBtnHobby = document.getElementById('addHobby');
var inputHobby = document.getElementById('formAddHobby');
var addBtnHobby = document.getElementById('inputAddHobby');
var closeBtnHobby = document.getElementsByClassName('closeBtnHobby')[0];

//LISTENERS for open click, close click, outside click
modalBtnHobby.addEventListener('click', openModalHobby);
closeBtnHobby.addEventListener('click', closeModalHobby);
window.addEventListener('click', outsideClickHobby);

function openModalHobby(){
  hobbyModal.style.display='block';
  addBtnHobby.addEventListener('click', function(e){
    e.preventDefault();
    
    if((inputHobby.inputHobbyName.value != null)&&(inputHobby.inputHobbyName.value != "")){
      console.log("hobby added");
      db.collection("hobbies").add({
        name: inputHobby.inputHobbyName.value,
        logo: inputHobby.inputHobbyLogo.value

      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });  
      hobbyModal.style.display='none';
      clearAddHobby();
    }

  });
}

function closeModalHobby(){
  hobbyModal.style.display='none';
}

function outsideClickHobby(e){
  if(e.target == hobbyModal){
    hobbyModal.style.display='none';
  }
}



//EDUCATION

  db.collection("educations").orderBy("year_start","desc").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      if(doc.data().awards === undefined){
          if(doc.data().year_end === undefined && doc.data().education === "College"){
            document.getElementById('educationInfo').innerHTML+=`<button class="delBtnEduc" id="${doc.id}" onclick=deleteEduc(this)>Delete</button>
            <div><img class="educ_logo"src="${doc.data().logo}"></div>
            <div class="educName">${doc.data().school}</div>
            <div class="educLevel">${doc.data().education}</div>
            <div class="educCourse">Course: ${doc.data().degree}</div>
            <div class="educYear">A.Y. ${doc.data().year_start} - present</div><br>`;
          }
          else{
            document.getElementById('educationInfo').innerHTML+=`<button class="delBtnEduc"  id="${doc.id}" onclick=deleteEduc(this)>Delete</button>
            <div><img class="educ_logo" src="${doc.data().logo}"></div>
            <div class="educName">${doc.data().school}</div>
            <div class="educLevel">${doc.data().education}</div>
            <div class="educYear">A.Y. ${doc.data().year_start} - ${doc.data().year_end}</div><br>`;
          }
      }
      else{
        document.getElementById('educationInfo').innerHTML+=`<button class="delBtnEduc"  id="${doc.id}" onclick=deleteEduc(this)>Delete</button>
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
    var modal = document.getElementById('educModal');
    var modalBtn = document.getElementById('addEduc');
    var inputEduc = document.getElementById('formAddEduc');
    var addBtn = document.getElementById('inputAddEduc');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
   
  
    //LISTENERS for open click, close click, outside click
    modalBtn.addEventListener('click', openModal);
    // addBtn.addEventListener('click', addModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);


    function openModal(){
      modal.style.display='block';
      addBtn.addEventListener('click', function(e){
        e.preventDefault();

        if(((inputEduc.inputEducName.value != null) && (inputEduc.inputEducName.value != ""))
          &&((inputEduc.inputEducStart.value != null) && (inputEduc.inputEducStart.value != ""))){
          console.log("education added");
          db.collection("educations").add({
            education: inputEduc.inputEducName.value,
            logo: inputEduc.inputEducLogo.value,
            school: inputEduc.inputEducLevel.value,
            year_start:inputEduc.inputEducStart.value,
            year_end: inputEduc.inputEducEnd.value
    
          }).catch(function(error) {
            console.error("Error adding document: ", error);
          });  
          modal.style.display='none';
          clearAddEduc();
        }

  
      });
    }
    
    function closeModal(){
      modal.style.display='none';
    }
  
    function outsideClick(e){
      if(e.target == modal){
        modal.style.display='none';
      }
    }

//PROJECTS

db.collection("projects").orderBy("year_start","desc").get().then((snapshot) => {
  snapshot.forEach((doc) => {
      document.getElementById('projectInfo').innerHTML+=`<button class="delBtnProj"  id="${doc.id}" onclick=deleteProj(this)>Delete</button>
      <div class="projName"><a href="${doc.data().link}">${doc.data().name}</a></div>
      <div class="projDesc">${doc.data().desc}</div>
      <div class="projType">Type:   ${doc.data().type}</div>
      <div class="projYear">Year Created:   ${doc.data().year_start}</div><br>`;
  });
});


//GET modal element, modal button, close button
var projModal = document.getElementById('projModal');
var modalBtnProj = document.getElementById('addProj');
var inputProj = document.getElementById('formAddProj');
var addBtnProj = document.getElementById('inputAddProj');
var closeBtnProj = document.getElementsByClassName('closeBtnProj')[0];


//LISTENERS for open click, close click, outside click
modalBtnProj.addEventListener('click', openModalProj);
closeBtnProj.addEventListener('click', closeModalProj);
window.addEventListener('click', outsideClickProj);


function openModalProj(){
  projModal.style.display='block';
  addBtnProj.addEventListener('click', function(e){
    e.preventDefault();

    if(((inputProj.inputProjName.value != null) && (inputProj.inputProjName.value != ""))
      &&((inputProj.inputProjYear.value != null) && (inputProj.inputProjYear.value != ""))){
      console.log("project added");
      db.collection("projects").add({
        desc: inputProj.inputProjDesc.value,
        link: inputProj.inputProjLink.value,
        name: inputProj.inputProjName.value,
        type:inputProj.inputProjType.value,
        year_start: inputProj.inputProjYear.value

      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });  
      projModal.style.display='none';
      clearAddProj();
    }


  });
}


function closeModalProj(){
  projModal.style.display='none';
}

function outsideClickProj(e){
  if(e.target == projModal){
    projModal.style.display='none';
  }
}


//CLEARING
function clearEditIntro(){
  $("form textarea#inputIntro").val("");
}

function clearEditContact(){
  $("form input#inputContactSite").val("");
  $("form input#inputContactUser").val("");
  $("form input#inputContactLink").val("");
  $("form input#inputContactLogo").val("");
}

function clearAddOrg(){
  $("form input#inputOrgName").val("");
  $("form input#inputOrgPos").val("");
  $("form input#inputOrgLogo").val("");
}

function clearAddHobby(){
  $("form input#inputHobbyName").val("");
  $("form input#inputHobbyLogo").val("");
}

function clearAddEduc(){
  $("form input#inputEducName").val("");
  $("form input#inputEducLevel").val("");
  $("form input#inputEducLogo").val("");
  $("form input#inputEducStart").val("");
  $("form input#inputEducEnd").val("");
}

function clearAddProj(){
  $("form input#inputProjName").val("");
  $("form input#inputProjDesc").val("");
  $("form input#inputProjType").val("");
  $("form input#inputProjLink").val("");
  $("form input#inputProjYear").val("");
}



//DELETING
function deleteOrg(elem){
  db.collection("organizations").doc(elem.id).delete().then(function(){
    console.log("Organization item deleted "+elem.id);
    alert("Organization Doc ID:" + elem.id+ " deleted");
  })
  .catch(function(error){
      console.log("Error in deleting item :"+error);
  });
}

function deleteHobby(elem){
  db.collection("hobbies").doc(elem.id).delete().then(function(){
    console.log("Hobby item deleted "+elem.id);
    alert("Hobby Doc ID:" + elem.id+ " deleted");
  })
  .catch(function(error){
      console.log("Error in deleting item :"+error);
  });
}

function deleteEduc(elem){
  db.collection("educations").doc(elem.id).delete().then(function(){
    console.log("Education item deleted "+elem.id);
    alert("Education Doc ID:" + elem.id+ " deleted");
  })
  .catch(function(error){
      console.log("Error in deleting item :"+error);
  });
}

function deleteProj(elem){
  db.collection("projects").doc(elem.id).delete().then(function(){
    console.log("Project item deleted "+elem.id);
    alert("Project Doc ID:" + elem.id+ " deleted");
  })
  .catch(function(error){
      console.log("Error in deleting item :"+error);
  });
}










