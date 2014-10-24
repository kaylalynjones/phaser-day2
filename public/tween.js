var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

function preload(){
    game.load.image('background', 'assets/skies/underwater1.png');
    game.load.image('p1', 'assets/sprites/spinObj_01.png');
    game.load.image('p2', 'assets/sprites/spinObj_02.png');
    game.load.image('p3', 'assets/sprites/spinObj_03.png');
    game.load.image('p4', 'assets/sprites/spinObj_04.png');
    game.load.image('p5', 'assets/sprites/spinObj_05.png');
    game.load.image('p6', 'assets/sprites/spinObj_06.png');
    game.load.image('p7', 'assets/sprites/spinObj_07.png');
    game.load.image('p8', 'assets/sprites/spinObj_08.png');

    game.load.image('carrot', 'assets/sprites/carrot.png');
    game.load.image('star', 'assets/misc/star_particle.png');
    game.load.image('diamond', 'assets/sprites/diamond.png');
    game.load.spritesheet('button', 'assets/buttons/buttons/button-diagonal.png', 100, 95);

    game.load.audio('music', ['assets/audio/oedipus_wizball_highscore.mp3', 'assets/audio/oedipus_wizball_highscore.ogg']);

}
var background,
    text,
    emitter,
    music;

function create(){
  background = game.add.sprite(0, 0, 'background');
  background.name = 'background';
  game.input.touch.preventDefault = false;

  music = game.add.audio('music');
  music.play();
  makeButton('sing', 600, 98);

	var style = { font: "20px Arial", fill: "#fff", align: "rigth" };
  var text = game.add.text(695, 170, "Touch for Sound.", style);
  text.anchor.set(0.5);

  p1 = game.add.sprite(350, 350, 'p1');
  p1.anchor.setTo(0.5, 0.5);
  p2 = game.add.sprite(450, 450, 'p2');
  p2.anchor.setTo(0.5, 0.5);
  p3 = game.add.sprite(250, 250, 'p3');
  p3.anchor.setTo(0.5, 0.5);
  p4 = game.add.sprite(50, 50, 'p4');
  p4.anchor.setTo(0.5, 0.5);
  p5 = game.add.sprite(150, 150, 'p5');
  p5.anchor.setTo(0.5, 0.5);
  p6 = game.add.sprite(550, 550, 'p6');
  p6.anchor.setTo(0.5, 0.5);


  game.add.tween(p1).from( { y: -200 }, 2000, Phaser.Easing.Bounce.In, true, 0, 4)
  .to({ y: 100 }, 1000, Phaser.Easing.Sinusoidal.None)
  .to({x:600}, 1000, Phaser.Easing.Elastic.None)
  .to({x:350, y:350}, 2000, Phaser.Easing.Linear.Out);
  game.add.tween(p2).from( { x: 200 }, 2000, Phaser.Easing.Bounce.Out, true, 0, 4)
  .to({ x: 300 }, 1000, Phaser.Easing.Linear.None)
  .to({y:500}, 1000, Phaser.Easing.Elastic.None)
  .to({x:450, y:450}, 2000, Phaser.Easing.Linear.Out);
  game.add.tween(p3).from( { x: -200 }, 2000, Phaser.Easing.Bounce.In, true, 0, 3)
  .to({ y: 300 }, 1000, Phaser.Easing.Linear.None)
  .to({x:600}, 1000, Phaser.Easing.Elastic.None)
  .to({x:250, y:250}, 2000, Phaser.Easing.Linear.Out);
  game.add.tween(p4).from( { y: -100 }, 2000, Phaser.Easing.Bounce.Out, true, 0, 3)
  .to({ x: 450 }, 1000, Phaser.Easing.Linear.None)
  .to({y:240}, 1000, Phaser.Easing.Elastic.None)
  .to({x:50, y:50}, 2000, Phaser.Easing.Linear.Out);
  game.add.tween(p5).from( { x: 400 }, 2000, Phaser.Easing.Bounce.Out, true, 0, 2)
  .to({ y: 700 }, 1000, Phaser.Easing.Linear.None)
  .to({x:100}, 1000, Phaser.Easing.Elastic.None)
  .to({x:150, y:150}, 2000, Phaser.Easing.Linear.Out);
  game.add.tween(p6).from( { y: -700 }, 2000, Phaser.Easing.Bounce.Out, true, 0, 2)
  .to({ x: 650 }, 1000, Phaser.Easing.Linear.None)
  .to({y:100}, 1000, Phaser.Easing.Elastic.None)
  .to({x:550, y:550}, 2000, Phaser.Easing.Linear.Out);
  game.add.tween(p7).from( { x: -500 }, 2000, Phaser.Easing.Bounce.Out, true, 0, 3)
  .to({ x: 300 }, 1000, Phaser.Easing.Linear.None)
  .to({y:320}, 1000, Phaser.Easing.Elastic.None)
  .to({x:210, y:650}, 2000, Phaser.Easing.Linear.Out);

  p1.angle = 32;

  emitter = game.add.emitter(game.world.centerX - 120, 200, 200);

    //  Here we're passing an array of image keys. It will pick one at random when emitting a new particle.
  emitter.makeParticles(['diamond', 'carrot', 'star']);
  emitter.start(false, 5000, 20);
}

function makeButton(name, x, y) {

    var button = game.add.button(x, y, 'button', click, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;
}

function click(button) {
  if(music.isPlaying){
    music.pause();
  } else {
    music.resume();
  }
}
