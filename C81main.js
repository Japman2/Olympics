canvas = document.getElementById("Canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("Input").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y, 37);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(mouse_x, mouse_y, 37, 0, 2*Math.PI);
    ctx.stroke();
}
