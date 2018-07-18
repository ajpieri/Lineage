// $(function()
// {
//    $( ".options" ).button()
//    $( ".ui-button-text" ).css( "display", "table-cell" );
//    $( ".ui-button-text" ).css( "vertical-align", "middle" );
//
//    $("#create_chain").click(function( event )
//    {
//       window.location = "not_logged_in_create_chain.php";
//    });
// });

$(document).ready(function(){
  $( ".options" ).button()
  $( ".ui-button-text" ).css( "display", "table-cell" );
  $( ".ui-button-text" ).css( "vertical-align", "middle" );

  //$('#loginButton').on('click', loginUser);

  // Attach a submit handler to the form
  $( "#loginForm" ).submit(function( event ) {
    // Stop form from submitting normally
    event.preventDefault();
    loginUser();
  });

  $("#create_chain").click(function( event )
  {
     window.location = "not_logged_in_create_chain.php";
  });
  // document.cookie.token =
});

function loginUser(){
  $.post("/users/login", {
    username: $( '#login_input_username' ).val(),
    password: $( '#login_input_password' ).val()
  }).done(function(response){
    console.log("in here 0" + response);
    document.cookie = "token = " + response.token;
    if (response.token){
      console.log("in here2");
      redirectToHome();
    }
    else {
      console.log("in here");
      $('body').html(response);
    }
  });
}

function redirectToHome(){
  console.log("in here3");
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "/home",
    "type": "GET",
    "headers": {
      "authorization": "Bearer " + getCookie('token'),
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log("in here4");
    $('body').html(response);
    //window.history.pushState({str:"home", "home", "home"});
  });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
