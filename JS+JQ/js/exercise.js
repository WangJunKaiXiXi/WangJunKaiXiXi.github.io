var pic = document.getElementsByClassName("picture");
var imgs = pic[0].getElementsByTagName("img");

var prev = document.getElementById("prev");
var next = document.getElementById("next");

var i = 0;
// var j = 0;

next.onclick = function(){
    i++;
    if(i > imgs.length-1){
        i = 0;
    }
    for(var j = 0; j < imgs.length; j++){
        imgs[j].style.opacity = "0";
    }
    imgs[i].style.opacity = "1";
}

prev.onclick = function(){
    i--;
    if(i < 0){
        i = imgs.length-1;
    }
    for(var j = 0; j < imgs.length; j++){
        imgs[j].style.opacity = "0";
    }
    imgs[i].style.opacity = "1";
}