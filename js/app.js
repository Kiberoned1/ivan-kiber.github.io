function helo() {
    document.getElementById('example').innerHTML = 'привет мир'
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text
}

function submit() {
    var name  = document.getElementById("name").value;
    var phone  = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    