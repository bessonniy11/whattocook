let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let ball = {x:0, y:0, dx:1, dy:3 };
let eye1 = {x:190, y:290, dx:1, dy:1};
let eye2 = {x:340, y:290, dx:1, dy:1};

let ballScore = 2;

let Rect = {x:300, speed:20, width:120, height:30};
let omg = {x:600};
// var omg2 = {x:600};

let omgimg = new Image();
omgimg.src = 'img/img.png';

let ballimg = new Image();
ballimg.src = 'img/ball.png';
let eye1img = new Image();
eye1img.src = 'img/eye.png';
let eye2img = new Image();
eye2img.src = 'img/eye.png';
let fonimg = new Image();
fonimg.src = 'img/cat.png';

context.fillStyle = '#5F9EA0';
context.font = '44px Roboto';
let xText = 0;

fonimg.onload = function () {
    game();
}
//основной игровой цикл
function game() {
    update();
    render();
    requestAnimFrame(game);
}
function update() {
    //физика
    ball.x = ball.x + ball.dx * ballScore;
    ball.y = ball.y + ball.dy * ballScore;
    eye1.x = eye1.x + (ball.dx * ballScore) * 0.05;
    eye1.y = eye1.y + (ball.dy * ballScore) * 0.05;
    eye2.x = eye2.x + (ball.dx * ballScore) * 0.05;
    eye2.y = eye2.y + (ball.dy * ballScore) * 0.05;

    //границы
    //eye1
    if (eye1.x > 194) {
        eye1.x = 194;
    }
    if (eye1.y > 308) {
        eye1.y = 308;
    }
    if (eye1.x < 182) {
        eye1.x = 182;
    }
    if (eye1.y < 279) {
        eye1.y = 279;
    }
    //eye2
    if (eye2.x > 347) {
        eye2.x = 347;
    }
    if (eye2.y > 309) {
        eye2.y = 309;
    }
    if (eye2.x < 330) {
        eye2.x = 330;
    }
    if (eye2.y < 280) {
        eye2.y = 280;
    }

    if (ball.x < 0 || ball.x > canvas.width - 50) {
        ball.dx = - ball.dx;

    }
    if (ball.y < 0 ) {
        ball.dy = - ball.dy;
    }
    if (ball.y > canvas.height - 50) {
        ball.x = Rect.x+35;
        ball.y = 490;
        ballScore = 0;
        xText = 0;
        omg.x = omg.x - 120;
        eye1 = {x:190, y:290, dx:1, dy:1};
        eye2 = {x:340, y:290, dx:1, dy:1};
    }
    if (ball.y >= 500 && ball.x+50 >= Rect.x && ball.x+50 <= Rect.x + 120) {

        ball.dy = - ball.dy;
        xText = xText + 1;
        ballScore = ballScore + 0.1;
    }

    //move.Rect
    document.onkeydown = function(event){
        console.log(event);
        if (event.key == 'ArrowRight') {
            Rect.x = Rect.x + 1 * Rect.speed;
        }
        if (event.key == 'ArrowLeft') {
            Rect.x = Rect.x - 1 * Rect.speed;
        }
        if (event.key == 'ArrowUp') {
            // ball.dy = - ball.dy;
            ballScore = 2 ;
            omg.x = omg.x + 120;
        }
        if (event.key == 'ArrowRight' && ball.y >= 490 && ball.x < 545) {
            Rect.x = Rect.x + 1 * Rect.speed;
            ball.x = ball.x + 2 * 20;
        }
        if (event.key == 'ArrowLeft' && ball.y >= 490 && ball.x > 35 ) {
            Rect.x = Rect.x - 1 * Rect.speed;
            ball.x = ball.x - 2 * 20;
        }
        if (Rect.x >= canvas.width - Rect.width) {
            Rect.x = canvas.width - Rect.width;
            // ball.x = canvas.width - (ball.x+50);
        }
        if (Rect.x < 0) {
            Rect.x = 0;
        }
    }
}

function render() {
    context.drawImage(fonimg, 0, 0, canvas.width, canvas.height);
    context.drawImage(eye1img, eye1.x, eye1.y, 40, 40);
    context.drawImage(eye2img, eye2.x, eye2.y, 40, 40);
    context.drawImage(ballimg, ball.x, ball.y, 50, 50);
    context.fillRect(Rect.x, 540, Rect.width, Rect.height);
    context.drawImage(omgimg, omg.x, 0, 150, 150);
    // context.drawImage(omg2img, omg2.x, 0, 150, 150);

    context.fillText("Счёт: ", 200, 40);
    // context.fillText("Вы проиграли, попробуйте ещё", 10, 80);
    context.fillText(xText, 320, 40);
}
let requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // window.mozRequestAnimationFrame ||
        // window.oRequestAnimationFrame ||
        // window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 100 / 20);
        };
})();

// function eyesParallax(event) {
//     this.eye1.forEach(layerbg => {
//         let speed = layerbg.getAttribute('data-speed');
//
//         (eye1).transform = `translate(${event.clientX * speed / 5000}px,${event.clientY * speed / 5000}px)`;
//
//     });
// }
// document.addEventListener('mousemove', eyesParallax);