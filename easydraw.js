try {

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    function size(width = 400, height = 400) {
        if (!document.querySelector("canvas")) {
            canvas.width = width;
            canvas.height = height;
            canvas.id = "canvas";
            document.body.appendChild(canvas);
            
        }
    }
    function background(color = "ff0000") {
        canvas.style.backgroundColor = "#" + color;
    }

    function changeColor(color = "262626") {
        context.fillStyle = "#" + color;
    }

    function stroke() {
        context.stroke();
    }

    function fill() {
        context.fill();
    }


//
    function rect(xPos, yPos, width, height) {
        context.beginPath();
        context.fillRect(xPos, yPos, width, height);
        context.closePath();
    }
    function ellipse(xPos, yPos, radius) {
        context.beginPath();
        context.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
        fill();
        context.closePath();
    }
    function line(startX, startY, endX, endY) {
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY)
        stroke();
        context.closePath();
    }
//
  
    start();
    setInterval(() => {
        context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height);
        update();
        context.closePath();
    }, 10);
} catch (error) {
    console.log(error);
}