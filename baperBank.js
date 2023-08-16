document.getElementById('submitBttn').addEventListener('click', function(){
    const mailDhorlam = document.getElementById('emailInput');
    const passwordDhorlam = document.getElementById('passwordInput');

    const mailMelabo = mailDhorlam.value;
    const passwordMelabo = passwordDhorlam.value;
    
    if(mailMelabo == "baperbank@gmail.com" && passwordMelabo == 12191413)
    {
        window.location.href = ('after_login.html');
        
    }
    else{
        alert ("Your Password Or Email Is Wrong Please Enter Correctly  :( ") ;
    }

    mailMelabo = " ";
    passwordMelabo = " ";
})


document.getElementById('checkerBttn').addEventListener('click', function(){
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  })




//  <------------------- index.html JS file ------------------->






