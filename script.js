function playGame(){
var hole = document.querySelectorAll('.block');
var hitPosition;
var hitPosition2;
var hitPosition3;
var score = 0; 
var pointGainedOnce=0;
var gameSpeed = 1000;

var timer__html = document.querySelector('#timer');
var timeLeft = document.querySelector('#dur__drop').value;
gameSpeed = document.querySelector('#gameSpeed').value;


var timerID = setInterval(function(){
    if (timeLeft<1) {
        clearInterval(timerID);
        gameStatus="stale";
        document.querySelector('#play__text').textContent='Play Again';
        startButton.style.background='#27ae60';    
        startButton.style.fontWeight='Initial'; 
        modal.style.display = "block";
        document.querySelector('#modal--score').textContent=score;
        document.querySelector('#dur__drop').disabled=false;
        document.querySelector('#gameSpeed').disabled=false;
        document.querySelector('.box').style.cursor='pointer';
        document.querySelector('#gameSpeed').style.cursor='pointer';
        document.querySelector('.duration').style.cursor='pointer';
        document.querySelector('#dur__drop').style.cursor='pointer';
    }

    timer__html.textContent=timeLeft;
    timeLeft--;
 }, 1000);

function popJerry(randomBLockNo, randomBLockNo2, randomBLockNo3){
    
    hole[randomBLockNo].classList.add("jerry");
    hole[randomBLockNo2].classList.add("jerry");
    hole[randomBLockNo3].classList.add("jerry");
}

function removeJerry(){
    hole.forEach(element => {
        element.classList.remove("jerry");
    });
}



window.onbeforeunload = function() {
    if(timeLeft>0){

        return "";
    }
}
hole.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.id == hitPosition+1 || element.id==hitPosition2+1 || element.id==hitPosition3+1 && timeLeft > 0 && pointGainedOnce){
            score++;
            document.querySelector('#score__text').textContent = score;
            pointGainedOnce=0;           
        }
    })
});

var jerryTimer = setInterval(() => {
    if (timeLeft < 1) {
        clearInterval(jerryTimer)
    }
    removeJerry();
        let randomBLockNo = Math.floor((Math.random())*24);
        hitPosition = randomBLockNo;
        let randomBLockNo2 = Math.floor((Math.random())*24);
        hitPosition2 = randomBLockNo2;
        let randomBLockNo3 = Math.floor((Math.random())*24);
        hitPosition3 = randomBLockNo3;
        popJerry(randomBLockNo, randomBLockNo2,randomBLockNo3);
    pointGainedOnce=1;
}, gameSpeed);

}


var startButton = document.querySelector('#play');
var gameStatus = "stale";


startButton.addEventListener('click',()=>{
    if (gameStatus == "stale") {
        playGame();
        document.querySelector('#score__text').textContent='0';
        document.querySelector('#dur__drop').disabled=true;
        document.querySelector('#gameSpeed').disabled=true;
        document.querySelector('.box').style.cursor='auto';
        document.querySelector('#gameSpeed').style.cursor='auto';
        document.querySelector('.duration').style.cursor='auto';
        document.querySelector('#dur__drop').style.cursor='auto';
        gameStatus='Running';
        startButton.style.background='#2980b9';     
        document.querySelector('#play__text').textContent='Game is ON!!'; 
    }   

})



var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
