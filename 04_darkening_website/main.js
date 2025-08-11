
var r = 255;
var g = 0;
let b = 0;


setInterval(function() {
  $("body").css("background-color", "rgb("+r+","+g+","+b+")");
  // i = Number(i);
  r -= 5;
  g -= 5;
  b -= 5;
  // i.toString();
  console.log(r)
  console.log(g)
  console.log(b)
  $("p").html("rgb("+r+","+g+","+b+")");
}, 300);
