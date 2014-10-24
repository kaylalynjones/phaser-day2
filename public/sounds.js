var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sounds', { preload: preload, create: create });

function preload(){
    game.load.image('background', 'assets/skies/underwater2.png');
    game.load.image('image1', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');

    game.load.spritesheet('button', 'assets/buttons/flixel-button.png', 80, 20);
    game.load.bitmapFont('nokia', 'assets/fonts/retroFonts/165.png');

    game.load.audio('music', ['assets/audio/oedipus_wizball_highscore.mp3', 'assets/audio/oedipus_wizball_highscore.ogg']);

}
var background,
    music;
function create(){
  background = game.add.sprite(0, 0, 'background');
  background.name = 'background';
  //new TileSprite(game, x, y, width, height, key, frame)
  background = game.add.tileSprite(0, 0, 200, 600, 'image1');
  game.input.touch.preventDefault = false;

  music = game.add.audio('music');
  music.play();

   game.input.onDown.add(changeVolume, this);
}

function render() {
    game.debug.soundInfo(music, 20, 32);
}
