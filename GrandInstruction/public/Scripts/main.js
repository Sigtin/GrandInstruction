//Auto Updating Copyright Script created with Rapid Purple Webmaster Tools(http://rapidpurple.com).
const y2k = number => { 
    return (number < 1000) ? number + 1900 : number; 
}
const today = new Date();
const year = y2k(today.getYear());
const copyright = document.createTextNode('© ' + year + ' Austin Sigler - All Rights Reserved');
document.getElementById("copyright").appendChild(copyright);

document.getElementById("navbar-right").innerHTML = `<a href="register">Register</a><a href="login">Login</a>`;

if(document.getElementById(`sign-up-btn`) !== null) {
    document.getElementById('sign-up-btn').addEventListener('click', function() {
        window.location.href = "http://localhost:8080/register";
    });
}

const submit = () => {
    
}