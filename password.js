function addEntry(){
    let site = prompt("Enter name of the site:", "Google");
    let pass = prompt("Enter your password", "password");
    let user = prompt("Enter your username:", "username");
    // add entry
    // figure out how to create new html elements in javascript and set custom ids, set the ids to the entry number
    
}
// remember the default page is temporarily set to home.html!!! should be index.html
function removeEntry(){
    let row = prompt("Enter the number of the row you would like to delete:", "1");
    let item = document.getElementById(row);
    if(selection  === parseInt(selection, 10) ){
        item.style.display = "none";
    }else{
        alert("Enter a number please!");
    }
}

function hide(element) {
    let item = document.getElementById("element");
    if (item.style.display === "none"){
        item.style.display = "block";
    }else{
        item.style.display = "none";
    }
} 
var realPass = "test";
var realUser = "test";
function passChecker(){
    let user = prompt("Enter your username:", "abcde123");
    let pass = prompt("Enter your password:", "1password1");
    if(user ==  realUser && pass == realPass){
        alert("Log in success!");
        location.href='home.html' ;
        // create browser cookie for successful login
        // make system that then avoids 
    }else{
        alert("Incorrect username or password.");
        // no browser cookie
    }
}
function passGen(){
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>,.?/:;[]{}|!@#$%^&*()1234567890_-+=`~".split("");
    //document.getElementById("test").innerHTML = alphabet; 
    var newPass = [];
    for (var i =0; i<20; i++){
        var newIndex = Math.floor(Math.random()*alphabet.length);
        newPass.push(alphabet[newIndex]);
    }
    var final = "Password: " + newPass.join("");
    document.getElementById("test2").innerHTML = final; 
    
    return(newPass);
    

    
}

function logOut(){
    location.href='home.html' ;
    //delete browser cookie

}