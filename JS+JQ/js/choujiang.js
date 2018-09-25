// var box1 = document.getElementsByClassName("box1");
// var pic = box1[0].getElementsByTagName("img");

// var box2 = document.getElementsByClassName("box2");
// var imgs = box2[0].getElementsByTagName("img");

// var i = Math.random();
// var k = i * 30;
// var y = Math.ceil(k);
// var j = i * 100;
// var x = Math.floor(j);



var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

var lottery = function(){
    // 定义随机数
    var randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    // 设置中奖概率
    if(randomNumber < 1){
        return {
            code: 1,
            text: "一等奖！"
        };
    }else if(randomNumber < 5){
        return {
            code: 2,
            text: "二等奖！"
        };
    }else if(randomNumber < 10){
        return {
            code: 3,
            text: "三等奖！"
        };
    }else if(randomNumber < 18){
        return {
            code: 4,
            text: "四等奖！"
        };
    }else if(randomNumber < 40){
        return {
            code: 5,
            text: "五等奖！"
        };
    }else if(randomNumber < 70){
        return {
            code: 6,
            text: "六等奖！"
        };
    }else{
        return {
            code: 7,
            text: "特等奖！"
        };
    }
};    

var rotate = function(){
    box1.style.transition = "all 3s";
    var x = lottery();
    console.log(x);

    var turnAngle = 30 + (360/7) * ( x.code - 1);
    box1.style.transform = "rotate(" + (turnAngle + 360*3) +"deg)";

    setTimeout(function(){
        box1.style.transition = 'all 0s';
        box1.style.transform = "rotate(" + turnAngle + "deg)";
        alert(x.text);
        canClick = true;
    },3100)
}

var canClick = true;
box2.onclick = function(){
    if(canClick===true){
        rotate();
    }
    canClick = false;
}


// imgs.onclick = function(){
//     if(x < 30){
//         pic.style.transform = "rotate(1778deg)";
//         console.log("1");
//         if(pic.style.transform == "rotate(1778deg)"){
//             clearInterval(timer);
//            var timer = setInterval(function(){
//                 pic.style.transition = 'all 0s';
//                 pic.style.transform = "rotate(338deg)";
//                 alert("恭喜你中大奖啦！");
//                 clearInterval(timer);
//            },5500);                  
            
//             z = Math.floor(Math.random()*100);
//             // console.log(x);
//             return;
//         }
        
        
//     }else if(x < 80){
//         pic.style.transform = "rotate(2345deg)";
//         console.log("2");
//         if(pic.style.transform == "rotate(2345deg)"){
//             clearInterval(timer);
//            var timer = setInterval(function(){
//                 alert("运气不错哦 铁汁！");
//                 clearInterval(timer);
//            },5500);                  
//         }    
//             z = Math.floor(Math.random()*100);
//             // console.log(x);
//             return;
//         // alert("运气不错哦 铁汁！");
//     }else{
//         pic.style.transform = "rotate(1975deg)";
//         console.log("3");
//         if(pic.style.transform == "rotate(1975deg)"){
//             clearInterval(timer);
//            var timer = setInterval(function(){
//                 alert("哇！特等奖！！");
//                 clearInterval(timer);
//            },5500);                  
            
//             z = Math.floor(Math.random()*100);
//             // console.log(x);
//             return;
//         // alert("哇！特等奖！！");
//     }
// }
// }
// if(x < 20){
//     imgs.onclick = function(){
//     pic.style.transform = "rotate(1778deg)";
    
//     }
//     alert("你这辈子都不可能中奖的！");
    
// }else if(x >= 20 && x < 50){
//     imgs.onclick = function(){
//     pic.style.transform = "rotate(1962deg)";
    
//     }
//     alert("恭喜！一等奖");
// }else if(x >= 50 && x < 70){
//     imgs.onclick = function(){
//     pic.style.transform = "rotate(2048deg)";
    
//     }
//     alert("嘻嘻嘻！");
// }else if(x >= 70 && x < 90){
//     imgs.onclick = function(){
//     pic.style.transform = "rotate(1860deg)";
    
//     }
//     alert("恭喜你中大奖啦！");
// }else{
//     imgs.onclick = function(){
//     pic.style.transform = "rotate(1950deg)";
    
//     }
//     alert("哇！特等奖！！");
// }
