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

// Function to open login popup with a transition effect
function openPopup() {
    const popupContainer = document.getElementById('popup-container');
    const overlay = document.getElementById('overlay');

    popupContainer.style.opacity = '0';
    overlay.style.opacity = '0';

    setTimeout(() => {
        popupContainer.style.display = 'block';
        overlay.style.display = 'block';

        setTimeout(() => {
            popupContainer.style.opacity = '1';
            overlay.style.opacity = '1';
        }, 10);
    }, 10);
}
document.querySelectorAll('.login').forEach(function(element) {
    element.addEventListener('click', openPopup);
});
document.querySelectorAll('.login-footer').forEach(function(element) {
    element.addEventListener('click', function() {
        setTimeout(openPopup, 400);
    });
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
