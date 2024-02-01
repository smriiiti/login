function signUp() {
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email && password) {
        var email=localStorage.setItem(email,'email');
        var password =localStorage.setItem(password,'password');
        alert('Sign-in successful! User information stored locally.');
    } else {
        alert('Please enter both email and password.');
    }
}