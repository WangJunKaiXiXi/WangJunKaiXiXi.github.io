var prev = document.getElementById("prev");
var next = document.getElementById("next");

var box = document.getElementsByClassName("box");
var imgs = box[0].getElementsByTagName("img");
var dian = document.querySelectorAll("#dian i");

var i = 0;
var intItem = function(){
    for(var i = 0; i < dian.length; i++){
        dian[i].style.background = 'rgba(0, 0, 0, 0.5)';
    }
}

var intImg = function(){
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.opacity = '0';
    }
}
next.onclick = function(){
    i++;
    if(i > imgs.length-1){
        i = 0;
    }

    intImg();
    imgs[i].style.opacity = "1";
    console.log(i);
    intItem();
    dian[i].style.background = 'white';
}
prev.onclick = function(){
    i--;
    if(i < 0){
        i = imgs.length-1;
    }

    intImg();
    imgs[i].style.opacity = "1";

    intItem();
    dian[i].style.background = 'white';
}

for(var h = 0; h < dian.length; h++){
    dian[h].index = h;
}

for(var j = 0; j < dian.length; j++){
    dian[j].onclick = function(){
        intItem();
        this.style.background = 'white';

        console.log(this.index);

        intImg();
        imgs[this.index].style.opacity = '1';

        i = this.index;
    }
}












// var top = document.getElementsByClassName("top");
// var pic = top[0].getElementsByTagName("img");
// var img = document.getElementsByClassName("pic");

// var nz1 = document.getElementById("nz1");
// var nz2 = document.getElementById("nz2");
// var nz3 = document.getElementById("nz3");
// var nz4 = document.getElementById("nz4");


// nz1.onclick = function(){
//     var a = 0;
//     if(a = 0){
//         a = 0;
//     }
//     for(var k = 0; k < img.length; k++){
//         img[k].style.opacity = "0";
//     }
//     img[a].style.opacity = "1";
// }
// nz2.onclick = function(){
//     var a = 1;
//     if(a = 1){
//         a = 1;
//     }
//     for(var k = 0; k < img.length; k++){
//         img[k].style.opacity = "0";
//     }
//     img[a].style.opacity = "1";
// }
// nz3.onclick = function(){
//     var a = 2;
//     if(a = 2){
//         a = 2;
//     }
//     for(var k = 0; k < img.length; k++){
//         img[k].style.opacity = "0";
//     }
//     img[a].style.opacity = "1";
// }
// nz4.onclick = function(){
//     var a = 3;
//     if(a = 3){
//         a = 3;
//     }
//     for(var k = 0; k < img.length; k++){
//         img[k].style.opacity = "0";
//     }
//     img[a].style.opacity = "1";
// }


var images = document.querySelectorAll(".top img");
var spans = document.querySelectorAll(".bottom span b");

var classActive = function(){
    for(var i = 0; i < spans.length; i++){
        spans[i].className = '';
    }
}
var classXxx = function(){
    for(var i = 0; i < images.length; i++){
        images[i].style.opacity = '0';
        //images[i].className = 'pic';
    }
}

for(var i = 0; i < spans.length; i++){
    spans[i].index = i;
}

for(var i = 0; i < spans.length; i++){
    spans[i].onclick = function(){
        classActive();
        var classArray = this.className.split(" ");
        classArray.push("Active");
        this.className = classArray.join(" ");

        classXxx();
        // var classImgs = this.className.split(" ");
        // classImgs.push("xxx");
        // this.className = classImgs.join(" ");
        images[this.index].style.opacity = '1';
    }
}