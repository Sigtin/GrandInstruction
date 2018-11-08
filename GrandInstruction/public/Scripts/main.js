//Auto Updating Copyright Script created with Rapid Purple Webmaster Tools(http://rapidpurple.com).
const y2k = number => { 
    return (number < 1000) ? number + 1900 : number; 
}
const today = new Date();
const year = y2k(today.getYear());
const copyright = document.createTextNode('© ' + year + ' Austin Sigler - All Rights Reserved');
document.getElementById("copyright").appendChild(copyright);

document.getElementById("navbar-right").innerHTML = `<a href="register">Register</a><a href="login">Login</a>`;

// if(document.getElementById(`sign-up-btn`) !== null) {
//     document.getElementById('sign-up-btn').addEventListener('click', function() {
//         window.location.href = "http://localhost:8080/register";
//     });
// }

// const submit = () => {
    
// }


// Drawing
let canvas = document.getElementById(`canvas`);


if(canvas !== null && canvas !== undefined) {
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    
    // Attach the mousedown, mousemove and mouseup event listeners
    canvas.addEventListener('mousedown', ev_canvas, false);
    canvas.addEventListener('mousemove', ev_canvas, false);
    canvas.addEventListener('mouseup', ev_canvas, false);
}

if(document.getElementById(`pencil-tool`) !== null && document.getElementById(`pencil-tool`).checked) {
    tool = new tool_pencil();
}

function tool_pencil () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button
    // This starts the pencil drawing
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only
    // draws if the tool.started state is set to true (when you are holding down
    // the mouse button)
    this.mousemove = function (ev) {
        if (tool.started) {
            context.lineTo(ev._x, ev._y);
            context.stroke();
        }
    };

    // This is called when you release the mouse button
    this.mouseup = function (ev) {
        if (tool.started) {
            tool.mousemove(ev);
            tool.started = false;
        }
    };
}

function ev_canvas(ev) {
    // Firefox
    if (ev.layerX || ev.layerX == 0) {
        ev._x = ev.layerX;
        ev._y = ev.layerY;
        // Opera
    } else if (ev.offsetX || ev.offsetX == 0) {
        ev._x = ev.offsetX;
        ev._y = ev.offsetY;
    }

    // Call the event handler of the tool
    var func = tool[ev.type];
    if (func) {
        func(ev);
    }
}