var provider = new firebase.auth.GoogleAuthProvider();
var providerfb = new firebase.auth.FacebookAuthProvider();
var providergh = new firebase.auth.GithubAuthProvider();

$("#login").click(function () {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
      $("#login").hide();
      $("#root").append("<h1>" + result.user.displayName + "</h1>");
      $("#root").append("<img src='" + result.user.photoURL + "'/>");
      guardarDatos(result.user);
    });
});

$("#facebook").click(function () {
  firebase
    .auth()
    .signInWithPopup(providerfb)
    .then(function (result) {
      console.log(result.user);
      $("#facebook").hide();
      $("#root").append("<h1>" + result.user.displayName + "</h1>");
      $("#root").append("<img src='" + result.user.photoURL + "'/>");
      guardarDatos(result.user);
    });
});

$("#github").click(function () {
  firebase
    .auth()
    .signInWithPopup(providergh)
    .then(function (result) {
      console.log(result.user);
      $("#github").hide();
      $("#root").append("<h1>" + result.user.displayName + "</h1>");
      $("#root").append("<img src='" + result.user.photoURL + "'/>");
      guardarDatos(result.user);
    });
});

function guardarDatos(user) {
  console.log(user);
  var usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL,
  };
  firebase
    .database()
    .ref("usuarios/" + user.uid)
    .set(usuario);
}
