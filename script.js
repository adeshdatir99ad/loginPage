function func(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(email == 'adeshdatir99@gmail.com' && password == 'Pass@123'){
        // alert("Successfull !")
        window.location.assign("https://shorturl.at/4JtTQ")
    }else{
        alert("Wrong username and password")
    }
}

