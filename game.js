const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 500 },
          debug: false,
      },
  },
  scene: {
      preload: preload,
      create: create,
      update: update,
  },
};

const game = new Phaser.Game(config);

let player;
let cursors;
let platforms;
let weapons;
let boss;
let bossHealth = 100;
let bossHealthText;
let collectedWeapons = 0;
let collectedWeaponsText;

// Mobile controls
let leftButton, rightButton, jumpButton;
let moveLeft = false;
let moveRight = false;
let isJumping = false;

function preload() {
  // Load assets
  this.load.image('player', 'https://via.placeholder.com/40'); // Replace with player sprite
  this.load.image('ground', 'https://via.placeholder.com/800x40'); // Replace with ground sprite
  this.load.image('weapon', 'https://via.placeholder.com/20'); // Replace with weapon sprite
  this.load.image('boss', 'https://via.placeholder.com/100?text=Boss'); // Replace with boss sprite
  this.load.image('button', 'https://via.placeholder.com/50'); // Button placeholder
}

function create() {
  // Create platforms
  platforms = this.physics.add.staticGroup();
  platforms.create(400, 580, 'ground');
  platforms.create(800, 450, 'ground');
  platforms.create(150, 350, 'ground');
  platforms.create(600, 200, 'ground');

  // Add lava below
  this.add.rectangle(500, 600, 1000, 20, 0xff0000); // Lava indicator (optional)

  // Create player
  player = this.physics.add.sprite(100, 500, 'player');
  player.setCollideWorldBounds(true);

  // Weapons group
  weapons = this.physics.add.group({
      key: 'weapon',
      repeat: 3,
      setXY: { x:

