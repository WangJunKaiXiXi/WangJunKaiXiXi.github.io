var content = document.getElementById('content');
var startDiv = document.getElementById('start');
var main = document.getElementById('main');
var scoreDiv = document.getElementById('score');
var pause = document.getElementById('pause');
var continueDiv = document.getElementById('continue');
// var restart = document.getElementById('restart');
var settlement = document.getElementById('settlement');
var finalText = document.getElementById('final-text');
var finalScore = document.getElementById('final-score');

var score = 0;

var contentClass = content.currentStyle? content.currentStyle : window.getComputedStyle(content, null);
var stageSizeX = parseInt(contentClass.width);
var stageSizeY = parseInt(contentClass.height);

var enemyPlaneS = {
    width: 32,
    height: 24,
    imgSrc: './img/enemy-plane-s.png',
    boomSrc: './img/enemy-plane-s-boom.gif',
    boomTime: 50,
    hp: 1
};

var enemyPlaneM = {
    width: 46,
    height: 60,
    imgSrc: './img/enemy-plane-m.png',
    hitSrc: './img/中飞机挨打.png',
    boomSrc: './img/enemy-plane-m-boom.gif',
    boomTime: 50,
    hp: 3
};

var enemyPlaneL = {
    width: 110,
    height: 164,
    imgSrc: './img/enemy-plane-l.png',
    hitSrc: './img/大飞机挨打.png',
    boomSrc: './img/enemy-plane-l-boom.gif',
    boomTime: 100,
    hp: 8
};

var ourPlaneX = {
    width: 66,
    height: 80,
    imgSrc: './img/our-plane.gif',
    boomSrc: './img/our-plane-boom.gif',
    hp: 1
};

var bullet = {
    width: 6,
    height: 14,
    imgSrc: './img/our-bullet.png',
    speed: 20
};

var Plane = function(centerX, centerY, PlaneL, speed){
    this.centerX = centerX;
    this.centerY = centerY;
    this.sizeX = PlaneL.width;
    this.sizeY = PlaneL.height;
    this.imgSrc = PlaneL.imgSrc;
    this.boomSrc = PlaneL.boomSrc;
    this.boomTime = PlaneL.boomTime;
    this.hp = PlaneL.hp;
    this.speed = speed;
    
    this.currentX = this.centerX - this.sizeX/2;
    this.currentY = this.centerY - this.sizeY/2;
};

Plane.prototype.draw = function(){
    this.imgNode = new Image();
    this.imgNode.src = this.imgSrc;
    this.imgNode.style.top = this.centerY - this.sizeY/2 + 'px';
    this.imgNode.style.left = this.centerX - this.sizeX/2 + 'px';
    main.appendChild(this.imgNode);
};

Plane.prototype.move = function(){
    this.currentY += this.speed; 
    this.centerY = this.currentY + this.sizeY/2; //???
    this.imgNode.style.top = this.currentY + 'px';
    this.leave();
};

Plane.prototype.leave = function(){
    this.isBottomRange = this.currentY > (stageSizeY - this.sizeY);
    this.isTopRange = this.currentY < 0;
};


var Enemies = function(){
    this.allEnemies = [];
    this.allEnemiesCount = 0;
};

var randomNum = function(min,max){
    return Math.round(Math.random() * (max- min)) + min;
}

Enemies.prototype.createEnemy = function(){
    this.allEnemiesCount++;
    if(this.allEnemiesCount%15 == 0){
        this.newEnemy = new Plane(randomNum(enemyPlaneL.width/2, stageSizeX-enemyPlaneL.width/2), 12, enemyPlaneL, 2);
    }else if(this.allEnemiesCount%4 == 0){
        this.newEnemy = new Plane(randomNum(enemyPlaneM.width/2, stageSizeX-enemyPlaneM.width/2), 12, enemyPlaneM, randomNum(3,5));
    }else {
        this.newEnemy = new Plane(randomNum(enemyPlaneS.width/2, stageSizeX-enemyPlaneS.width/2), 12, enemyPlaneS, randomNum(5,9));
    };

    this.allEnemies.push(this.newEnemy);
    this.newEnemy.draw();
};

Enemies.prototype.moveAllPlane = function(){
    for(var i = 0; i < this.allEnemies.length; i++){
        this.allEnemies[i].move();
    
        if(this.allEnemies[i].isBottomRange){
            main.removeChild(this.allEnemies[i].imgNode);
            this.allEnemies.splice(i,1);
        }

        //检测子弹碰撞
        for(var j = 0; j < ourPlane.segement.length; j++){
            //如果飞机还未死亡就挡住子弹
            if(this.allEnemies[i].hp > 0){
                var horizontalCollision = Math.abs(this.allEnemies[i].centerX - ourPlane.segement[j].centerX) < (this.allEnemies[i].sizeX/2 + ourPlane.segement[j].sizeX/2);
                var verticalCollision = Math.abs(this.allEnemies[i].centerY - ourPlane.segement[j].centerY) < (this.allEnemies[i].sizeY/2 + ourPlane.segement[j].sizeY/2)
                var checkBulletCollision = horizontalCollision && verticalCollision;

                if(checkBulletCollision){
                    //飞机挨打
                    score++;
                    scoreDiv.innerHTML = score;
                    this.allEnemies[i].imgNode.src = this.allEnemies[i].hitSrc ? this.allEnemies[i].hitSrc : this.allEnemies[i].boomSrc;
                    this.allEnemies[i].hp--;

                    //子弹击中飞机消失
                    main.removeChild(ourPlane.segement[j].imgNode);
                    ourPlane.segement.splice(j,1);
                }
            }
        }

        // 检测与我方飞机的碰撞
        var ourHorizontalCollision = Math.abs(this.allEnemies[i].centerX - ourPlane.centerX) < (this.allEnemies[i].sizeX/2 + ourPlane.sizeX/2);
		var ourVerticalCollision = Math.abs(this.allEnemies[i].centerY - ourPlane.centerY) < (this.allEnemies[i].sizeY/2 + ourPlane.sizeY/2);
        var checkOurCollision = ourHorizontalCollision && ourVerticalCollision;
        
        if (checkOurCollision) {
			this.allEnemies[i].hp = 0;
			ourPlane.hp--;
        }
        
        //检测敌方飞机是否死亡
        if(this.allEnemies[i].hp <= 0){
            this.allEnemies[i].imgNode.src = this.allEnemies[i].boomSrc;
            this.allEnemies[i].boomTime -=10;
            // 干掉敌方飞机
            if(this.allEnemies[i].boomTime <= 0){
                main.removeChild(this.allEnemies[i].imgNode);
                this.allEnemies.splice(i,1);
            }
        }
    }
}

var enemies = new Enemies();

var ourPlane = new Plane(stageSizeX/2, stageSizeY-ourPlaneX.height/2, ourPlaneX, 0);
ourPlane.draw();
main.onmousemove = function (ev) {

    ourPlane.centerX = ev.clientX - content.offsetLeft;
    if(ourPlane.centerX < 0){
        ourPlane.centerX = 0;
    }
    if(ourPlane.centerX > stageSizeX){
        ourPlane.centerX = stageSizeX;
    }

    ourPlane.centerY = ev.clientY - content.offsetTop;
    if(ourPlane.centerY < 0){
        ourPlane.centerY = 0;
    }
    if(ourPlane.centerY > (stageSizeY - ourPlane.sizeY/2)){
        ourPlane.centerY = (stageSizeY - ourPlane.sizeY/2);
    }

    ourPlane.currentX = ourPlane.centerX - ourPlane.sizeX/2;
    ourPlane.currentY = ourPlane.centerY - ourPlane.sizeY/2;

    ourPlane.imgNode.style.left = ourPlane.currentX + 'px';
    ourPlane.imgNode.style.top = ourPlane.currentY + 'px';
}

ourPlane.segement = [];

var Bullet = Plane;

var createNewBullet = function(){
    ourPlane.newBullet = new Bullet(ourPlane.centerX, ourPlane.centerY - ourPlane.sizeY/2, bullet, -10);
    ourPlane.segement.push(ourPlane.newBullet);
    ourPlane.newBullet.draw();
}

var moveNewBullet = function(){
    for(var i = 0; i < ourPlane.segement.length; i++){
        ourPlane.segement[i].move();
        if(ourPlane.segement[i].isTopRange){
            main.removeChild(ourPlane.segement[i].imgNode);
            ourPlane.segement.splice(i,1);
        }
    }
}

var gameOver = function(){
    ourPlane.imgNode.src = ourPlane.boomSrc;
    clearInterval(timeID);
    settlement.style.display = 'block';
	document.querySelector('p#final-score').innerText = score;
}



var time = 0;
var timeID;
var start = function(){
    // 隐藏开始页面
    startDiv.style.display = 'none';
    // 显示游戏页面
    main.style.display = 'block';
    //
    pause.style.display = 'none';
    settlement.style.display = 'none';

    timeID = setInterval(function(){
        time++;
        if(time%20 == 0){
            enemies.createEnemy();
        }
        enemies.moveAllPlane();

        if(time%5 == 0){
            createNewBullet();
        }
        moveNewBullet();

        if(ourPlane.hp <= 0){
            gameOver();
        }
    },30)

    ourPlane.imgNode.style.visibility = 'visible';
}


var restart = function(){
    window.location.reload();
};

continueDiv.onclick = function(ev){
    ev.stopPropagation();
    // this.appendChild(ourPlane.imgNode);
    start();
};

main.onclick = function(){
    clearTimeout(timeID);
    pause.style.display = 'block';
    ourPlane.imgNode.style.visibility = 'hidden';

};



// var planeA = new Plane(60, 0, enemyPlaneL, 5);
// planeA.draw();
// planeA.move();

// setInterval(function(){
//     planeA.move();
// },50)