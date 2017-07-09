var square = 20;
var lost = true;
var gridSize = {x:0, y:0};
var canvas;
var frames = 5;
var touchPos;
var swiping = false;
var startText = "(press arow keys or WASD to start)";;
var highscore = 0;

var snake;
var enemies = [];
var food;
var decorations = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 50);
  snake = new Snake();
  food = new Food();
  canvas.parent('canvas');
  calculateGrid();
  background('#FFEB3B');
}

function calculateGrid() {
  square = sqrt(windowWidth * (windowHeight-50))/15;
  gridSize = {x: ~~(windowWidth/square), y:~~((windowHeight-50)/square)};
  square--;
  canvas.position((windowWidth-gridSize.x * square)/2, 50 + (windowHeight-50-gridSize.y * square)/2);
  resizeCanvas(gridSize.x * square, gridSize.y * square);
  lost = true;
  if (windowWidth > 450) {
    startText = "(press arow keys or WASD to start)";
  } else {
    startText = "(swipe to start)";
  }
}

function draw() {
  background('#FFEB3B');
  for (var i = 0; i < decorations.length; i++) {
    decorations[i].draw();
  }
  if (frameCount/2 % 1== 0) {
    if (decorations.length > 49) {
      decorations.pop();
    }
    decorations.splice(0, 0, (new Decoration()).position());
  }
  if (getURL().split('#').pop() !== '/home') {
    lost = true;
    return;
  }
  if (lost) {
    fill(0);
    textFont("Montserrat");
    textAlign(CENTER);
    text(startText, gridSize.x*square/2, gridSize.y*square - 10);
    if (highscore !== 0) {
      text('Highscore: '+highscore, gridSize.x*square/2, gridSize.y*square - 30);
    }
  } else {
    food.draw();
    if (frameCount % frames == 0) {
      snake.tick();
    }
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].draw();
    }
    snake.draw();
  }
}

function keyPressed() {
  if (getURL().split('#').pop() !== '/home') {
    return;
  }
  if (keyCode === UP_ARROW || keyCode === 87) {
    startGame();
    snake.setDirection(0, -1);
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    startGame();
    snake.setDirection(0, 1);
  } else if (keyCode === RIGHT_ARROW  || keyCode === 68) {
    startGame();
    snake.setDirection(1, 0);
  } else if (keyCode === LEFT_ARROW || keyCode === 65) {
    startGame();
    snake.setDirection(-1, 0);
  } else if (keyCode === ESCAPE) {
    lost = true;
    if (getURL().split('#').pop() === '/home') {
      select('#home-container').style('opacity', '1');
    }
  }
}

function startGame() {
  if (lost) {
    lost = false;
    snake.reset();
    food.move();
    enemies = [];
    if (getURL().split('#').pop() === '/home') {
      select('#home-container').style('opacity', '0');
    }
  }
}

function Snake() {
  this.body = [];
  this.direction = {x:0, y:0};
  this.alphas = [];
  this.tail;

  this.draw = function() {
    stroke('#FFEB3B');
    for (var i = 0; i < this.body.length; i++) {
      fill(255, 255, 255, this.alphas[i]);
      rect(this.body[i].x * square, this.body[i].y * square, square, square);
    }
  }

  this.tick = function() {
    this.body.splice(0, 0, {x:(gridSize.x+this.body[0].x+this.direction.x)%gridSize.x,y:(gridSize.y+this.body[0].y+this.direction.y)%gridSize.y, direction:this.direction});
    // CALCULATE FOOD GRABBING AND ENEMY COLLISION
    if (this.body[0].x === food.x && this.body[0].y === food.y) {
      this.alphas.push(random(200, 255));
      food.move();
      enemies.push((new Enemy()).position());
      if (this.body.length > highscore) {
        highscore = this.body.length;
      }
    } else {
      for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].x === this.body[0].x && enemies[i].y === this.body[0].y) {
          lost = true;
          if (getURL().split('#').pop() === '/home') {
            select('#home-container').style('opacity', '1');
          }
          break;
        }
      }
      this.body.pop();
    }
    // CALCULATE COLLISION WITH BODY
    for (var i = 0; i < this.body.length; i++) {
      if (i!==0 && this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y) {
        lost = true;
        if (getURL().split('#').pop() === '/home') {
          select('#home-container').style('opacity', '1');
        }
        break;
      }
    }
  }

  this.setDirection = function(x, y) {
    this.direction = {x:x, y:y};
  }

  this.reset = function() {
    this.body = [{x:5,y:5, direction: this.direction}];
    this.alphas = [random(240, 255)];
  }
}

function Food() {
  this.x = 5;
  this.y = 5;
  this.size = square;

  this.move = function() {
    this.x = ~~random(0, gridSize.x);
    this.y = ~~random(0, gridSize.y);
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].x === this.x && enemies[i].y === this.y) {
        this.move();
        break;
      }
    }
  }
  this.draw = function() {
    this.size = sin(frameCount / frames) * 2 + square;
    stroke('#FFEB3B');
    fill('#000000');
    var offset = (square - this.size) / 2;
    rect(this.x * square + offset, this.y * square + offset, this.size, this.size);
  }
}

function Enemy() {
  this.x = ~~random(0, gridSize.x - 1);
  this.y = ~~random(0, gridSize.y - 1);
  this.size = square;

  this.draw = function() {
    this.size = sin((frameCount + this.y - this.x) / frames) * 2 + square;
    stroke('#FFEB3B');
    fill('#FF0000');
    var offset = (square - this.size) / 2;
    rect(this.x * square + offset, this.y * square + offset, this.size, this.size);
  }

  this.position = function() {
    this.x = ~~random(0, gridSize.x - 1);
    this.y = ~~random(0, gridSize.y - 1);
    if (food.x === this.x && food.y === this.y) {
      this.position();
    } else {
      for (var i = 0; i < 5; i++) {
        if (snake.body[0].x + snake.direction.x * i == this.x && snake.body[0].y + snake.direction.y * i == this.y) {
          this.position();
        }
      }
    }
    return this;
  }
}

function Decoration() {
  this.x = ~~random(0, gridSize.x - 1);
  this.y = ~~random(0, gridSize.y - 1);
  this.maxSize = square;
  this.startFrame = frameCount;

  this.draw = function() {
    var size = sin((frameCount + this.y - this.x) / 10) * 2 + this.maxSize;
    if (frameCount - this.startFrame < 10) {
      size *= (frameCount - this.startFrame) / 10;
    } else if (this.startFrame + 20 * frames - frameCount < 10) {
      size *= (this.startFrame + 20 * frames - frameCount) / 10;
    }
    noStroke();
    fill('#FFF59D');
    var offset = (square - size) / 2;
    rect(this.x * square + offset, this.y * square + offset, size, size);
  }

  this.position = function() {
    this.x = ~~random(0, gridSize.x - 1);
    this.y = ~~random(0, gridSize.y - 1);
    this.maxSize = random(square * 0.3, square * 0.6);
    return this;
  }
}

function windowResized() {
  if (getURL().split('#').pop() === '/home') {
    select('#home-container').style('opacity', '1');
  }
  calculateGrid();
}

function touchMoved() {
  if (!swiping) {
    return;
  }
  if (abs(touchPos.y - mouseY) > abs(touchPos.x - mouseX)) {
    if (touchPos.y - mouseY > 5) {
      startGame();
      snake.setDirection(0, -1);
      swiping = false;
    } else if (mouseY - touchPos.y > 5) {
      startGame();
      snake.setDirection(0, 1);
      swiping = false;
    }
  } else {
    if (mouseX - touchPos.x > 5) {
      startGame();
      snake.setDirection(1, 0);
      swiping = false;
    } else if (touchPos.x - mouseX > 5) {
      startGame();
      snake.setDirection(-1, 0);
      swiping = false;
    }
  }
}

function touchStarted() {
  if (getURL().split('#').pop() !== '/home') {
    return;
  }
  touchPos = {x: mouseX, y: mouseY};
  swiping = true;
}
