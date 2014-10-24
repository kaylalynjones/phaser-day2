var game = new Phaser.Game(800, 600, Phaser.AUTO, 'buttons', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);

    game.load.image('sky0','assets/skies/space2.png');
    game.load.image('sky1','assets/skies/cavern1.png');
    game.load.image('sky2','assets/skies/chrome.png');
    game.load.image('sky3','assets/skies/fire.png');
    game.load.image('sky4','assets/skies/fog.png');
    game.load.image('sky5','assets/skies/sky1.png');
    game.load.image('sky6','assets/skies/toxic.png');

}
var background,
 button1,
 button2,
 button3,
 button4,
 button5,
 button6;

function create() {

    background = game.add.sprite(0, 0, 'sky0');
    background.name = 'background';

    //  Standard button (also used as our pointer tracker)
    button1 = game.add.button(100, 100, 'button', changeSky, this, 2, 1, 0);
    button1.name = 'sky1';
    button1.anchor.setTo(0.5, 0.5);

    //  Rotated button
    button2 = game.add.button(300, 150, 'button', changeSky, this, 2, 1, 0);
    button2.name = 'sky2';
    button2.angle = 24;
    button2.anchor.setTo(0.5, 0.5);

    //  Width scaled button
    button3 = game.add.button(100, 300, 'button', changeSky, this, 2, 1, 0);
    button3.name = 'sky3';
    button3.width = 300;
    button3.anchor.setTo(0, 0.5);
    //button3.angle = 0.1;

    //  Scaled button
    button4 = game.add.button(300, 450, 'button', changeSky, this, 2, 1, 0);
    button4.name = 'sky4';
    button4.scale.setTo(2, 2);

    //  Shrunk button
    button5 = game.add.button(100, 450, 'button', changeSky, this, 2, 1, 0);
    button5.name = 'sky5';
    button5.scale.setTo(3, 2);

    //  Scaled and Rotated button
    button6 = game.add.button(570, 200, 'button', changeSky, this, 2, 1, 0); // anchor 0.5
    button6.name = 'sky6';
    button6.angle = 60;
    button6.scale.setTo(4, 4);
    button6.anchor.setTo(0.5, 0.5);
    var tween = game.add.tween(button6);
    tween.to({ x: 300 }, 2000);
    tween.start();

    //  works regardless of world angle, parent angle or camera position
    // game.world.setBounds(0, 0, 2000, 2000);
    // game.world.angle = 10;
    // game.camera.x = 300;

}

function changeSky (button) {

    background.loadTexture(button.name);

}

function render () {

}
