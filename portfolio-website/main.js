var typed= new typed('.text', {
    strings:['Frontend Developer' , 'Web Developer' , 'Full Stack Developer', 'Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

function myMenuFuction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu"
    }
}