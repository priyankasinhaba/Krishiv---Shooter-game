var splashscreen, bullet, bulletGroup, enemy, enemyGroup, bg_play, enemy1_img, enemy2_img
var aboutbutton
var playbutton, player_img, bullet_img
var score =0;
var gameState = "wait";




function preload() {
startScreen = loadImage("Shooter Game.gif"); 
bg_play = loadImage("2d game.jpeg")
Robot1 = loadImage("Robot1.png")
Robot2 = loadImage("Robot2.png")
Robot3 = loadImage("Robot3.png")
Shooter = loadImage("Shooter.png")
bullet_img = loadImage("bullet.png")
bulletSound = loadSound("laserSound.mp3")
explosionSound = loadSound("explosionSound.mp3")
}

function setup(){
    createCanvas(900,900);
playbutton = createImg("start.png")
aboutbutton = createImg("about.png")
playbutton.position(400,250);
playbutton.size(100,100)
playbutton.hide();
aboutbutton.position(300,300);
aboutbutton.size(100,100)
aboutbutton.hide();

player = createSprite(100, 300)
    player.addImage(Shooter)
    player.visible = false; 
    

    enemyGroup = new Group()
    bulletGroup = new Group()
}

function draw(){
    if (gameState === "wait") {
        background(startScreen);
        //player.visible = false;
        score = 0;
        playbutton.show()
        aboutbutton.show()
    }
    playbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "play";
    })
    
    aboutbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "about";
    
    })
if (gameState=="about"){
    aboutgame()
}

if (gameState == "play") {
    
    background(bg_play)

    player.visible = true;
    player.scale=0.2;
    
//put conditions so that player does not move out of screen
 

//put conditions for movement of player using arrow keys

   

  
    spawnRobots()
    
//put conditions for bullet touching enemies
   

    //put condition for game lose
   



 //put condition for game win
   
 

}
drawSprites();

//add score

}



function spawnRobots() {

    if (frameCount % 100 == 0) {

        var rand = Math.round(random(50, 600))
        enemy = createSprite(width, rand);
        enemy.scale = 0.25
        enemy.velocityX = -8;

        var randimg = Math.round(random(1,4))
        switch (randimg) {

            case 1:
                enemy.addImage(Robot1)
                enemy.setCollider("rectangle", 0, 0, 250, 300)
                break;

            case 2:
                enemy.addImage(Robot2)
                enemy.setCollider("rectangle", 0, 0, enemy.width, enemy.height)
                break;

                case 3:
                    enemy.addImage(Robot3)
                    enemy.setCollider("rectangle", 0, 0, 250, 300)
                    break;
    
                
            default: break;

        }

        enemy.depth = player.depth;
        player.depth = player.depth + 1;

        enemyGroup.add(enemy);

    }

}

//add function for spawning Bullets







function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "Shoot the robots using space button !!",
        textAlign: "center",
        //imageUrl: "spaceImg.jpg",
        //imageSize: "200x200",
        confirmButtonText: "Lets destroy the robots!!",
        confirmButtonColor: "blue",
    },
        function () {
            gameState = "wait"
        }
  
    )
  
  
  }

  //add pop up for lose condition






  //add pop up for win condition
  
  