// function a() {
//     var i = 0;
//     function b() {
//         console.log(i--);
//     }
//     function c() {
//         console.log(i++)
//     }
     
//     return [b, c]
// }
// var m = a();
// m[0]();
// m[0]();
// m[0]();
// m[1]();
// m[1]();
// m[1]();

// console.log(m[0]);
// console.log(m[1]);

// function xxx(){
//     console.log('first');
//     setTimeout(function(){
//         console.log("second");
//     },5000);
// }

// for(var i=0;i<12;i++){
//     xxx();
// }

// var a = [1,1,2,3,4];
// var b = [3,4,6,8,9];
// document.write(a.concat(b));

// var c = a.concat(b);
// for(var i = 0;i <a.length; i++){
//     console.log(a[i]);
//     console.log(b[i]);
// }

// c.splice(x,y)

var array1 = ['a','b','c','e'];
var array2 = ['d','e','f','f'];
// var array3 = array1.concat(array2);

// array3.splice(5,3);
// document.write(array3);

function unique(array1){
    var newarray = [];
    var arr = {};
    for(var i = 0; i < array1.length; i++){
        if(!arr[array1[i]]){
            newarray.push(array1[i]);
        }
    }
    return newarray;
    console.log(newarray);
}
