firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var user = firebase.auth().currentUser;
      if(user!=null)
      {
        var email_id = user.email;

        document.getElementById("welcome").innerHTML = 'WELCOME USER  : '+email_id;
      }
    } else {
      // No user is signed in.
    }
  });
function login()
{
  // window.alert('welcome');
    var useremail = document.getElementById('email').value;
    var userpassword = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
    .then((userCredential) => {
      // Signed in
      window.alert('Logged In'); 
      window.open("need_plasma.html","_blank");
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert('Error : '+errorMessage);
    });
}
function logout()
{
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.close("need_plasma.html");
  }).catch((error) => {
    // An error happened.
  });
}