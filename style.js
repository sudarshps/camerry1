function navScroll(){
    var navbar = document.getElementById('navBgcolor')
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('navBg');
    }else{
        navbar.classList.add('navBg');
    }
}
window.addEventListener('scroll', navScroll);


function upArrow() {
    var arrowIcon = document.getElementById('arrowup');
    var btnScroll = window.scrollY;
    
    if (btnScroll > 200) {
        arrowIcon.style.display = 'block'; // Show the icon
    } else {
        arrowIcon.style.display = 'none'; // Hide the icon
    }
}

window.addEventListener('scroll', upArrow);
