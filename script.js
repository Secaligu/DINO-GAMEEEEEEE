class DinoGame{
    constructor(){
        this.gameContainer = document.getElementById('gameContainer');
        this.dino = document.getElementById("dino")
        this.scoreElement= document.getElementById('score')
        this.gameOverElement = document.getElementById('gameOver')
        this.finalScoreElement= document.getElementById('finalScore')

        this.isGameRunning = false;
        this.isJumping = false;
        this.score = 0;
        this.highScore = localStorage.getItem('dinoHighScore')||0;
        this.gamespeed - 2;
        this.obstacles = [];
        this.obstacletime= 0;


    }
        
