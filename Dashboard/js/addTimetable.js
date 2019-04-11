var config = {
  apiKey: "AIzaSyCJKDwtk29W3zq89GvgVkjpyxS1z-7Pd6c",
  authDomain: "cloud-cafe-9c804.firebaseapp.com",
  databaseURL: "https://cloud-cafe-9c804.firebaseio.com",
  projectId: "cloud-cafe-9c804",
  storageBucket: "cloud-cafe-9c804.appspot.com",
  messagingSenderId: "522301092944"
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
const storage = firebase.storage();
let timetable;
const upload_widget = document.querySelector("#featuredImage");

var myWidget = cloudinary.createUploadWidget({
  cloud_name: 'cyuket',
  upload_preset: 'cyuket',
  maxFiles: 1
}, (error, result) => {
  let id = "RxbL42EDq0SnVbqhAtRS"
  timetable = result[0].url;
  document.querySelector("#imageURL").src = result[0].url;
  db.collection('timetable').doc(id).update({
      timetable
    })
    .then(() => {
      window.location.href = "./timetable.html";
    })

})

upload_widget.addEventListener("click", function () {
  myWidget.open();
}, false);
