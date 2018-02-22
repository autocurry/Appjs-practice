function onSubmission() {

  
    var uname = document.getElementById("uname").value;
    var pwrd = document.getElementById("pwrd").value;

    

    if ( uname=="sandeep" && pwrd == "123") {
        alert('Login successful')
    }
    else {
        alert('login failed');
    }
}
