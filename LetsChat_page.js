var firebaseConfig = {
    apiKey: "AIzaSyDPC8gSWTntXyWYMM4mQ7VvuhYqpe8GtI8",
    authDomain: "kwitter-d4dea.firebaseapp.com",
    databaseURL: "https://kwitter-d4dea-default-rtdb.firebaseio.com",
    projectId: "kwitter-d4dea",
    storageBucket: "kwitter-d4dea.appspot.com",
    messagingSenderId: "116236468260",
    appId: "1:116236468260:web:1efdcdec758bafbc3818b1",
    measurementId: "G-6BBXYH412P"
  };
  
   firebase.initializeApp(firebaseConfig);
   
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
   
   function send()
   {
         msg = document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
           name:user_name,
               message:msg,
               like:0
         });
         document.getElementById("msg").value = "";
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
