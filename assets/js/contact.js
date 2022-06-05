

function send_message() {
 
 var name = document.getElementById('name');
 var subject = document.getElementById('subject');
 var message = document.getElementById('message');
 var email = document.getElementById('email');
 

 
 alert(name); //"Message sent!"


}

function isEmail(email) {
 let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return regex.test(String(email).toLowerCase());
}