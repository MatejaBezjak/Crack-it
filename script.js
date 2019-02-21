var enterNum = [];
var count = 0;
var clickCount = 0;

var hl1 = document.getElementById("hl1");
var hl2 = document.getElementById("hl2");
var hl3 = document.getElementById("hl3");
var hl4 = document.getElementById("hl4");
var cif1 = document.getElementById("cif1");
var cif2 = document.getElementById("cif2");
var cif3 = document.getElementById("cif3");
var cif4 = document.getElementById("cif4");
var cButton = document.getElementById("cButton");
var mssg = document.getElementById("mssg");



cButton.addEventListener("click", function countClicks(){
    if(count == 4){
      changeBkgr('#290033');
      cButton.disabled = "true";
      mssg.innerHTML = "Cracked it!!!";
    } else {

          var arrMssg = ["You can do it!", "For fuck's sake!", "Oh come on!", "Really???"];
          var rndmMssg = Math.floor(Math.random()*arrMssg.length);
          mssg.innerHTML = arrMssg[rndmMssg];

    }
  })


for(var x = 0; x < 4; x++){
  enterNum.push(Math.floor(Math.random()*6));
}

function crack(){

  var guess = [cif1.value, cif2.value, cif3.value, cif4.value];
  if(guess[0] == enterNum[0]){cif1.disabled = "True";}
  if(guess[1] == enterNum[1]){cif2.disabled = "True";}
  if(guess[2] == enterNum[2]){cif3.disabled = "True";}
  if(guess[3] == enterNum[3]){cif4.disabled = "True";}
  if(hl1.innerHTML != 'Correct!'){ hl1.innerHTML = checkCif(guess[0], enterNum[0]); }
  if(hl2.innerHTML != 'Correct!'){ hl2.innerHTML = checkCif(guess[1], enterNum[1]); }
  if(hl3.innerHTML != 'Correct!'){ hl3.innerHTML = checkCif(guess[2], enterNum[2]); }
  if(hl4.innerHTML != 'Correct!'){ hl4.innerHTML = checkCif(guess[3], enterNum[3]); }

}


function checkCif(a, b){
  if(a>b){return "Lower";}
  if(a<b){return "Higher";}
  if(a == b){
    count++;
    return "Correct!";

  }
}


function changeBkgr (color){
  document.body.style.background = color;
}
