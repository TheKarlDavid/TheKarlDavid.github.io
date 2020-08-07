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
  

    db.collection("educations").orderBy("year_start","desc").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if(doc.data().awards === undefined){
            if(doc.data().year_end === undefined){
              document.getElementById('educationInfo').innerHTML+=`<div><img class="educ_logo" id="College" src="${doc.data().logo}"></>
              <div class="educName">${doc.data().school}</div>
              <div class="educLevel">${doc.data().education}</div>
              <div class="educCourse">Course: ${doc.data().degree}</div>
              <div class="educYear">A.Y. ${doc.data().year_start} - present</div><br>`;
            }
            else{
              if(doc.data().education === "Elementary"){
                document.getElementById('educationInfo').innerHTML+=`<div><img class="educ_logo" id="Elementary" src="${doc.data().logo}"></div>
                <div class="educName">${doc.data().school}</div>
                <div class="educLevel">${doc.data().education}</div>
                <div class="educYear">A.Y. ${doc.data().year_start} - ${doc.data().year_end}</div><br>`;
              }
              else{
                document.getElementById('educationInfo').innerHTML+=`<div><img class="educ_logo" id="JHS" src="${doc.data().logo}"></div>
                <div class="educName">${doc.data().school}</div>
                <div class="educLevel">${doc.data().education}</div>
                <div class="educYear">A.Y. ${doc.data().year_start} - ${doc.data().year_end}</div><br>`;
              }  
            }
        }
        else{
          document.getElementById('educationInfo').innerHTML+=`<div><img class="educ_logo" id="SHS" src="${doc.data().logo}"></div>
          <div class="educName">${doc.data().school}</div>
          <div class="educLevel">${doc.data().education}</div>
          <div class="educStrand">Strand: ${doc.data().strand}</div>
          <div class="educAward">${doc.data().awards}</div>
          <div class="educYear">A.Y. ${doc.data().year_start} - ${doc.data().year_end}</div><br>`;
        }

      });
    });
  

  

