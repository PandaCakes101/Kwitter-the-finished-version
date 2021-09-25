//YOUR FIREBASE LINKS

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
roomname = localStorage.getItem("roomname");

function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: message,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });

}
