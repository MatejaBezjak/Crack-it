var enterNum = [];
var count = 0;
var clickCount = 0;

var mainTtl = document.getElementById("mainTtl");
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
var instruct = document.getElementById("instruct");


cButton.addEventListener("click", function countClicks(){
    if(count == 4){

      document.body.style.background = "#e68a00";
      mainTtl.innerHTML = "THAT'S THAT FOR NOW <br> TO BE CONTINUED ...";
      mainTtl.style.color = "#001a00";
      cButton.remove();
      instruct.remove();
      mssg.innerHTML = "Cracked it!!!";
      mssg.style.color = "#99ff66";

    } else {
          if((cif1.value != "") && (cif2.value != "") && (cif3.value != "") && (cif4.value != "") ){
          var arrMssg = ["You can do it!", "For fuck's sake!", "Oh come on!", "Really???"];
          var rndmMssg = Math.floor(Math.random()*arrMssg.length);
          mssg.innerHTML = arrMssg[rndmMssg];
          return true;
          }

    }
  })


for(var x = 0; x < 4; x++){
  enterNum.push(Math.floor(Math.random()*6));
}

function crack(){

  var guess = [cif1.value, cif2.value, cif3.value, cif4.value];
  if((guess[0] != "") && (guess[1] != "") && (guess[2] != "") && (guess[3] != "")){
    if(guess[0] == enterNum[0]){cif1.disabled = "True";}
    if(guess[1] == enterNum[1]){cif2.disabled = "True";}
    if(guess[2] == enterNum[2]){cif3.disabled = "True";}
    if(guess[3] == enterNum[3]){cif4.disabled = "True";}
    if(hl1.innerHTML != 'Correct!'){ hl1.innerHTML = checkCif(guess[0], enterNum[0]); }
    if(hl2.innerHTML != 'Correct!'){ hl2.innerHTML = checkCif(guess[1], enterNum[1]); }
    if(hl3.innerHTML != 'Correct!'){ hl3.innerHTML = checkCif(guess[2], enterNum[2]); }
    if(hl4.innerHTML != 'Correct!'){ hl4.innerHTML = checkCif(guess[3], enterNum[3]); }
    return true;
  }

}


function checkCif(a, b){
  if(a>b){return "Lower";}
  if(a<b){return "Higher";}
  if(a == b){
    count++;
    return "Correct!";

  }
}
