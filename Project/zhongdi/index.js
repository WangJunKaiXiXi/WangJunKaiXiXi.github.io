// var center = document.getElementsByClassName("center");
var center = document.querySelector("header .center");


    // center.classList.add("scaleCenter");



// document.body.onscroll = function(){
//     console.log(window.pageYOffset);
// }

// var i = 1;
// $(document).ready(function(){
//     if(i = 1){
//         $(".center").addClass("scaleCenter");
//     }

// })

// document.body.onmousemove = function(){
//     center.classList.add("scaleCenter");
// }

var w = window.innerHeight;
function scale(){
    if(w >= 0){
        center.classList.add("scaleCenter");
    }
    // var h = window.innerWidth;
}

var timr = setTimeout(function() {
    scale();
},2000);







// 900 1300 1900 2600 3300 3525