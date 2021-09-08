var firebaseConfig = {
      apiKey: "AIzaSyACQvbrZUG2V4FnMsfFyJDohhq3mHDsyVg",
      authDomain: "kwitter1-3d8f5.firebaseapp.com",
      databaseURL: "https://kwitter1-3d8f5-default-rtdb.firebaseio.com",
      projectId: "kwitter1-3d8f5",
      storageBucket: "kwitter1-3d8f5.appspot.com",
      messagingSenderId: "234713390898",
      appId: "1:234713390898:web:c3f2ea928a5cdc942e412b",
      measurementId: "G-DDBWVBMDWN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding rooom"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }

