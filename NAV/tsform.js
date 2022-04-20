const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyBGzzSOPf33T9KD0212kDT2NCorNePYCOg",
    authDomain: "tutorathome-fa4f4.firebaseapp.com",
    databaseURL: "https://tutorathome-fa4f4-default-rtdb.firebaseio.com",
    projectId: "tutorathome-fa4f4",
    storageBucket: "tutorathome-fa4f4.appspot.com",
    messagingSenderId: "889393178796",
    appId: "1:889393178796:web:7b6a2bd5af72e951c61709",
    measurementId: "G-JQY9430PDK"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var gender = getElementVal("gender");
    var mob = getElementVal("mob");
    var emailid = getElementVal("emailid");
    var quali = getElementVal("quali");
    var lang = getElementVal("lang");
    var sub = getElementVal("sub");
    var exp = getElementVal("exp");

  
    saveMessages(name, gender, mob, emailid, quali, lang, sub, exp);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, gender, mob, emailid, quali, lang, sub, exp) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      gender: gender,
      mob: mob,
      emailid: emailid,
      quali: quali,
      lang: lang,
      sub: sub,
      exp: exp,

    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };