

var form = document.getElementById("form");


$(document).ready(function(){
    $(".alert").hide();
});

form.addEventListener('submit',function(event){
    event.preventDefault();           // prevents auto submit (? thing)
    
    var username = document.getElementById("name").value;
    console.log(username);

    var email = document.getElementById("email").value;
    console.log(email);

    var message = document.getElementById("message").value;
    console.log(message);

    // var aler = document.getElementsByClassName("alert")[0];
    // aler.classList.add("show");
    // console.log(aler.classList);
    $(".alert").show();
    console.log("helo");
})