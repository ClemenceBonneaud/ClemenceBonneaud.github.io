<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <router-link to="/game"><h1>{{ title }}</h1></router-link>
    </header>

    <div class="score">
      <p>Play : flèches</p>
      <p>Pause : barre d'espace</p>
      <p>Score : {{ score }}</p>
    </div>

    <div id="snake-div">
      <canvas ref="snake" id="snake" :width="width*cellSize" :height="height*cellSize" />
    </div>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>

export default {
  name: "Game",
  path: "/game",
  props: [""],
  data() {
    return {
        hover: "",
        title: "Un petit jeu ?",
        score: 0,
        width: 20,
        height: 20,
        cellSize: 20,
        food: {x:0,y:0},
        snake: [{x:0,y:0}],
        nextDirection: null,
        status: 1,
        directions: [
          { // left
            keyCode: 37,
            move: {
              x: -1,
              y: 0
            }
          },
          { // top
            keyCode: 38,
            move: {
              x: 0,
              y: -1
            }
          },
          {
            direction: "right",
            keyCode: 39,
            move: {
              x: 1,
              y: 0
            }
          },
          {
            direction: "bottom",
            keyCode: 40,
            move: {
              x: 0,
              y: 1
            }
          },
          {
            direction: "pause",
            keyCode: 32,
            move: {
              x: 0,
              y: 0
            }
          }
        ]
    };
  },
  mounted() {
    this.boardContext = this.$refs.snake.getContext("2d");
    this.resetGame();
    this.interval = setInterval(this.nextMove, 150);
    window.addEventListener("keydown", this.onKeyPress);
  },
  methods: {
    resetGame() {

      // Clear the canvas
      this.clear();

      // Create the head of the snake in the middle of the canvas
      this.snake = [{x: Math.round(this.width / 2), y: Math.round(this.height / 2)}];
      this.drawGame();

      // Create the food of the snake from an empty random place
      this.moveFoodToFreePlace();
    },

    clear() {
      this.boardContext.clearRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);
    },

    drawGame() {

      // Clear canvas
      this.clear();

      // Start drawing on the canvas
      this.boardContext.beginPath();

      // Draw the snake
      this.snake.forEach((snakePart) => {
          this.boardContext.rect(snakePart.x * this.cellSize, snakePart.y * this.cellSize, this.cellSize, this.cellSize);
          this.boardContext.fillStyle = "#6667AB";
          this.boardContext.fill();
      });

      // Stop drawing on the canvas
      this.boardContext.closePath();

      // Draw the food
      if (this.food != null)
      {
        this.boardContext.beginPath();
        this.boardContext.rect(this.food.x * this.cellSize, this.food.y * this.cellSize, this.cellSize, this.cellSize);
        this.boardContext.fillStyle = "#E9967A";
        this.boardContext.fill();
        this.boardContext.closePath();
      }
    },

    nextMove() {

      // If there is no direction for the moment : nothing to do
      if (this.nextDirection == null)
      {
        return;
      }

      // And we compute a new header depending on the next direction
      this.snake.unshift({ 
        x: this.snake[0].x + this.nextDirection.move.x,
        y: this.snake[0].y + this.nextDirection.move.y
      });

      // Check if the new position of the head of the snake is not out of the canvas
      if (this.status == 1 && this.snake[0].x < 0 || this.snake[0].x >= this.width || this.snake[0].y < 0 || this.snake[0].y >= this.height)
        {
          this.resetGame();
          window.alert('Le serpent est sorti du jeu : perdu !');
          this.score = 0;
          return;
        } 

      // Check if the new position of the head of the snake is not in collision with its body
      for (var cpt = 1; cpt < this.snake.length; cpt++) {
        if (this.status == 1 && 
            this.snake[cpt].x === this.snake[0].x &&
            this.snake[cpt].y === this.snake[0].y) {
            this.resetGame();
            window.alert('Le serpent entre en collision avec lui-même : perdu !');
            this.score = 0;
            return;
        }
      }

      // Else we can remove the last element of the snake
      // If we touch the food : we just create a new food place
      if (this.food != null && this.snake[0].x === this.food.x && this.snake[0].y === this.food.y)
        {
          this.score += 1;
          this.moveFoodToFreePlace();
        }
      else
        {
          // Else we can remove the last element of the snake
          this.snake.pop();
        }

      // Draw on the canvas
      this.drawGame();
    },

    onKeyPress(event) {

      // Get the status
      if(event.keyCode == 32){
        if(this.status == 1) {
          this.status = 0;
        }
      } else {
        this.status = 1;
      }
      
      // Get the new direction
      const newDirection = this.directions.find(c => c.keyCode === event.keyCode);

      // If the key pressed is no a direction key : nothing to do
      if (!newDirection) {
        return;
      }

      // From up, we can go right or left but not down and so on for other directions so we use the following code to know if the next direction can be set
      if (this.nextDirection == null || Math.abs(newDirection.keyCode - this.nextDirection.keyCode) !== 2) {
        this.nextDirection = newDirection;
      }
    },

    moveFoodToFreePlace() {
      this.food = null;
      while (this.food === null)
      {
        // Random x and y
        const x = Math.floor(Math.random() * this.width);
        const y = Math.floor(Math.random() * this.height);

        // Check if this coord = a snake part
        const snakePart = this.snake.find(snakeP => snakeP.x == x && snakeP.y == y);

        // // If it is not a snake part, we can use it
        if (!snakePart)
        {
           this.food = { x, y };
        }
      }
    }
  },
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.score {
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  padding-top:    70px;
  padding-bottom: 40px;
  & p {
    color: black;
    font-size: 25px;
    font-weight: bolder;
  }
}

#snake-div {
    display: flex;
    justify-content: center;
    margin-top: 5%;
}

#snake {
    margin-right: auto;
    margin-left:  auto;
  }

</style>