window.addEventListener('load', () => {
    const canvas = document.querySelector("canvas");

    const ctx = canvas.getContext('2d');

    // resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // solid rect(x, y, width, height)
    ctx.fillRect(50, 50, 200, 200);
    
    // lined Rect(x, y, width, height)
    ctx.strokeStyle="red";
    ctx.lineWidth = 5;
    ctx.strokeRect(100, 100, 200, 500);

    // drawing a line
    ctx.beginPath();
    // starting coordinates (right, down)
    ctx.moveTo(200, 300);
    // ending coordinates (right, down)
    ctx.lineTo(500, 300);
    // another line (same starting position, up)
    ctx.lineTo(500, 200);
    ctx.closePath();
    ctx.stroke();

    // variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);
});