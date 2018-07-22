$(document).ready(function () {
 /* function ingresoFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    if(!firebase.auth().currentUser){
      
       provider.addScope('public_profile');
  
       firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        //var name = result.user.displayName;
  
        console.log(user);
  
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          if(errorCode==='auth/account-exists-with-different-credential'){
            alert('Es el mismo usuario');
            }
        });
    }else{
        firebase.auth().signOut();
    }
  }
  
  document.getElementById('btn-facebook').addEventListener('click',ingresoFacebook,false);*/
  


   // Login tradicional
   $("#login").click(function () {
    var email = $("#first_name").val();
    var password = $("#password").val();
    if (email == '' || password == '') {
      alert("Por favor llena todos los datos");
    } else if ((password.length) < 6) {
      alert("La clave no debe ser menor a 6 caracteres");
    } else {
      window.location.href = '../views/newsfeed.html';
    }
  });
  
 
  var providerFacebook = new firebase.auth.FacebookAuthProvider();
 $('#btn-facebook').on('click', function() {
   console.log('hola facebook');
    event.preventDefault();
    firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
      var token = result.credential.accessToken;

      var user = result.user;
        console.log(user);
       /* firebase.database().ref('users/' + user.uid).set({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        profilePhoto: user.photoURL,
        posterPhoto: 'NONE'
        }).then(
        user => {
          $(location).attr('href', 'home.html');
        }); */
    }).catch(function(error) {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    // ...
    });
  });

 



  // Funcion para correr el slider
  $(document).ready(function () {
    $('.slider').slider();
  });

});