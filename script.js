// function to open dashboard menu
function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.display = "none";
}

// function to  close dashboard menu
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
}

// function to open login popup
document.querySelector('.login').addEventListener('click', function() {
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.querySelector('.login-footer').addEventListener('click', function() {
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});
// function to close login popup
function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
document.getElementById('overlay').addEventListener('click', closePopup);

document.querySelector('.close-button').addEventListener('click', closePopup);

// get user's inputs
document.getElementById('login-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    closePopup();
});
