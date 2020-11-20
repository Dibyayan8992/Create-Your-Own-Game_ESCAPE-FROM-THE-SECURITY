var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2fe49fd3-2fe1-4353-9e96-6242217f4bfb","897a92de-e6c7-4be4-a499-2067932305c5"],"propsByKey":{"2fe49fd3-2fe1-4353-9e96-6242217f4bfb":{"name":"download (1).jpg_1.png_1","sourceUrl":null,"frameSize":{"x":59,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lv7Gnk7aFgGg.fmv28OfbMC3gl_SD1az","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":45},"rootRelativePath":"assets/2fe49fd3-2fe1-4353-9e96-6242217f4bfb.png"},"897a92de-e6c7-4be4-a499-2067932305c5":{"name":"pieceYellow_single16_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iMnRjAlbM4xGSX.OUSFN.i.FbWaipLNU/category_gameplay/pieceYellow_single16.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"iMnRjAlbM4xGSX.OUSFN.i.FbWaipLNU","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iMnRjAlbM4xGSX.OUSFN.i.FbWaipLNU/category_gameplay/pieceYellow_single16.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var diamond = createSprite(380,20);
diamond.setAnimation("pieceYellow_single16_1");
var theif = createSprite(20, 380, 20,20);
theif.shapeColor = "Grey";
var laser1 = createSprite(0, 300, 680, 5);
laser1.shapeColor = "green";
var laser2 = createSprite(400, 100, 680, 5);
laser2.shapeColor = "green";
var taser1 = createSprite(330,310, 10, 10);
taser1.shapeColor = "blue";
taser1.velocityX = 0;
taser1.velocityY = 4;
var taser2 = createSprite(340,300, 10, 10);
taser2.shapeColor = "blue";
taser2.velocityX = 3;
taser2.velocityY = 0;
var taser3 = createSprite(300,100, 10, 10);
taser3.shapeColor = "blue";
taser3.velocityX = 0;
taser3.velocityY =9;
var taser4 = createSprite(160,290, 10, 10);
taser4.shapeColor = "blue";
taser4.velocityX = 0;
taser4.velocityY = 8;
var taser5 = createSprite(70,100,10,10);
taser5.shapeColor = "blue";
taser5.velocityX = 0;
taser5.velocityY = 8;
var taser6 = createSprite(60,100, 10, 10);
taser6.shapeColor = "blue";
taser6.velocityX = -3;
taser6.velocityY = 0;
var taser7 = createSprite(200,20,10,10);
taser7.shapeColor = "blue";
taser7.velocityX = -4;
taser7.velocityY = 4;

playSound("assets/534391__eliot-beats__edm-beat-3.mp3",true);
function draw() {
background("cyan");
createEdgeSprites();
theif.bounceOff(edges);
taser1.bounceOff(edges);
taser2.bounceOff(edges);
taser6.bounceOff(edges);
taser7.bounceOff(edges);
taser1.bounceOff(laser1);
taser2.bounceOff(laser1);
taser3.bounceOff(laser1);
taser3.bounceOff(laser2);
taser4.bounceOff(laser1);
taser4.bounceOff(laser2);
taser5.bounceOff(laser1);
taser5.bounceOff(laser2);
taser6.bounceOff(laser2);
taser7.bounceOff(laser2);

if (keyDown(UP_ARROW)){
  theif.velocityX=0;
  theif.velocityY=-5;
}

if (keyDown(DOWN_ARROW)){
  theif.velocityX=0;
  theif.velocityY=5;
}

if (keyDown(RIGHT_ARROW)){
  theif.velocityX=5;
  theif.velocityY=0;
}

if (keyDown(LEFT_ARROW)){
  theif.velocityX=-5;
  theif.velocityY=0;
}

if (keyWentUp(UP_ARROW)){
theif.velocityX=0;
theif.velocityY=0;
}

if (keyWentUp(DOWN_ARROW)){
theif.velocityX=0;
theif.velocityY=0;
}

if (keyWentUp(RIGHT_ARROW)){
theif.velocityX=0;
theif.velocityY=0;
}

if (keyWentUp(LEFT_ARROW)){
theif.velocityX=0;
theif.velocityY=0;
}
if(taser7.y>100){
  taser7.x=200;
  taser7.y=20;
}
if (theif.isTouching(laser1)){
  theif.velocityX=0;
  theif.velocityY=0;
  textFont('Arial');
  textSize(25);
  text("You've failed, press 'R' to restart",30,180);
  theif.velocityX=0;
}
if (theif.isTouching(laser2)){
  theif.velocityX=0;
  theif.velocityY=0;
  textFont('Arial');
  textSize(25);
  text("You've failed, press 'R' to restart",30,180);
}
if (theif.isTouching(taser1)){
  theif.velocityX=0;
  theif.velocityY=0;
  theif.x = 10;
  theif.y = 380;
}
if (theif.isTouching(taser2)){
  theif.velocityX=0;
  theif.velocityY=0;
  theif.x = 10;
  theif.y = 380;
}
if (theif.isTouching(taser3)){
  theif.velocityX=0;
  theif.velocityY=0;
  theif.x = 10;
  theif.y = 380;
}
if (theif.isTouching(taser4)){
  theif.velocityX=0;
  theif.velocityY=0;
  theif.x = 10;
  theif.y = 380;
}
if (theif.isTouching(taser5)){
  theif.velocityX=0;
  theif.velocityY=0;
  theif.x = 10;
  theif.y = 380;
}
if (theif.isTouching(taser6)){
  theif.velocityX=0;
  theif.velocityY=0;
  theif.x = 10;
  theif.y = 380;
}
if (theif.isTouching(taser7)){
  theif.velocityX=0;
  theif.velocityY=0;
  theif.x = 10;
  theif.y = 380;
}
if (keyDown("r")){
  theif.x = 10;
  theif.y = 380;
}
if (theif.isTouching(diamond)){
  theif.velocityX=0;
  theif.velocityY=0;
  taser1.velocityX=0;
  taser1.velocityY=0;
  taser2.velocityX=0;
  taser2.velocityY=0;
  taser3.velocityX=0;
  taser3.velocityY=0;
  taser4.velocityX=0;
  taser4.velocityY=0;
  taser5.velocityX=0;
  taser5.velocityY=0;
  taser6.velocityX=0;
  taser6.velocityY=0;
  taser7.velocityX=0;
  taser7.velocityY=0;
  
  textSize(10);
  text("CONGRATULATONS!!You've SuccessFully Passed The World's Hardest Game",20,180);
}

drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
