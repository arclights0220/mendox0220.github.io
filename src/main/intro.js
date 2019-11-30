function openLNav() {
    document.getElementById("LeftSidenav").style.width = "500px";
    isOpen = 0;
}

function closeLNav() {
    document.getElementById("LeftSidenav").style.width = "0";
    isOpen = 1;
}
var isOpen = 1;

var lnav = document.getElementById("Lnbtn");
document.addEventListener("keydown", (event) => {
    var x = event.which;
    if (x == 9) {
        if (isOpen == 1) {
            openLNav();
        }
        else if (isOpen == 0) {
            closeLNav();
        }
        event.preventDefault();
    }
})
var p = 0;
function look(e) {
    if (e == 1) {
        var x = document.getElementsByClassName("tip-content")[0];
        x.style.opacity = "1";
    }
    else if (e == 2) {
        var x = document.getElementsByClassName("tip-content2")[0];
        x.style.opacity = "1";
        x.style.transitionDelay = p + "s";
        p++;
    }
    else {
        var x = document.getElementsByClassName("deleteObject")[0];
        x.style.opacity = "1";
    }
   
}
function Nlook(e) {
    if (e == 1) {
        var x = document.getElementsByClassName("tip-content")[0];
        x.style.opacity = "0";
    }
    else if (e == 2) {
        var x = document.getElementsByClassName("tip-content2")[0];
        x.style.opacity = "0";
    }
    else {
        var x = document.getElementsByClassName("deleteObject")[0];
        x.style.opacity = "0";
    }
}

