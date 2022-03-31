// 랜덤 번호 지정 v
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누른다 v
// 만약에 유저가 랜덤번호를 맞추면 맞췄습니다! v
// 랜덤번호 < 유저번호 -> Down v
// 랜덤번호 > 유저번호 -> Up v
// Reset 버튼 누르면 Reset
// 5번의 기회를 다 쓰면 game end -> 더이상 추측 불가하며 버튼이 disable v
// 유저가 1과 100 범위 밖의 순서를 입력하면 알려준다, 기회를 깍지 않는다 v
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깍지 않는다 v



let computerNum = 0;
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let gameOver = false;
let playBtn = document.getElementById("play-btn");
let chance = 5;
let chanceArea = document.getElementById("chance-area");
let history = [];
let resetBtn = document.getElementById("reset-btn");
// 변수 설정

playBtn.addEventListener("click",play)
resetBtn.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})
// 이벤트 설정

function pickComputerNum(){
    computerNum = Math.floor(Math.random()*50+1);
    console.log("랜덤 숫자",computerNum)
}
pickComputerNum()

function play(){
    let userValue = userInput.value; 

    if(userValue<1 || userValue>50){
        resultArea.textContent = "1과 50 사이의 숫자를 입력하세요."
        return;
    }
    // 유효성 검사 1
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 값입니다. 다른 숫자를 입력하세요."
        return;
    }
    // 유효성 검사 2
    
    chance -- ;
    chanceArea.textContent=`남은 기회는 : ${chance}번`;
    console.log("chance", chance)
    // chance

    if(userValue < computerNum){
        resultArea.textContent = "UP!"
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!"
    }else {
        resultArea.textContent = "Right Answer!";
        gameOver = true;
    }

    history.push(userValue)
    console.log(history)


    if(chance<1){
        gameOver = true;
    }
    if(gameOver == true){
        playBtn.disabled = true;
    }
}

function reset(){
    userInput.value = "";
    pickComputerNum();
    resultArea.textContent = "결과값이 여기 나타납니다!"
    playBtn.disabled = false;
}
// 함수 정의