//Facebook
window.fbAsyncInit = function() {
  FB.init({
    appId      : '260158550205238',
    cookie     : true,
    xfbml      : true,
    version    : 'v18.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    if (response.status === 'connected') {
      console.log(response.authResponse.accessToken);
    }
  });
}

function customFacebookLogin() {
  FB.login(function(response) {
    if (response.authResponse) {
         console.log('Bienvenido!  Gracias por tu informacion.... ');
         FB.api('/me', {fields: 'name, email'}, function(response) {
          alert("Tu nombre es, " + response.name + ". y tu email es " + response.email);
         });
    } else { 
         console.log('Inicio de Sesion Cancelado'); }
  });
}

FB.api('/me', function(response) {
  console.log(JSON.stringify(response));
});



//GOOGLE
// Función para inicializar el botón de Inicio de Sesión de Google
function initGoogleSignIn() {
  google.accounts.id.initialize({
    client_id: 'TU_ID_DE_CLIENTE_DE_GOOGLE',
    callback: handleCredentialResponse,
    cancel_on_tap_outside: false,
  });

  // Renderiza el botón de Inicio de Sesión de Google
  google.accounts.id.renderButton(document.getElementById('signin-button'));
}

// Función que maneja la respuesta de credenciales de Google
function handleCredentialResponse(response) {
  if (response.credential) {
    var credential = response.credential;

    // Muestra la información en una ventana emergente
    alert("ID de usuario: " + credential.id + "\nNombre: " + credential.name + "\nEmail: " + credential.email);

    // O muestra la información en un contenedor en tu página
    var userInfoGoogle = "ID de usuario: " + credential.id + "<br>";
    userInfoGoogle += "Nombre: " + credential.name + "<br>";
    userInfoGoogle += "Email: " + credential.email;
    document.getElementById('user-info-google').innerHTML = userInfoGoogle;
  }
}

// Llama a la función de inicialización cuando la página se carga
window.onload = initGoogleSignIn;
