const firebaseConfig = {
    apiKey: "AIzaSyCbbFfSIlf302iI-dPhECjrvBTyVPT7a_w",
    authDomain: "fir-social-2437e.firebaseapp.com",
    databaseURL: "https://fir-social-2437e-default-rtdb.firebaseio.com",
    projectId: "fir-social-2437e",
    storageBucket: "fir-social-2437e.appspot.com",
    messagingSenderId: "467197800838",
    appId: "1:467197800838:web:36a3c8b9578cdb5be47c07",
    measurementId: "G-SLQ67FFKEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";

}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";


}
