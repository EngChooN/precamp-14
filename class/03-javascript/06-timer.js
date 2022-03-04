let isStarted = false;

const auth__btn = () => {
    if (isStarted === false) {
        isStarted = true;
        
        const number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("auth").innerText = number
        document.getElementById("correct").disabled = false;
        
        let timer = null;
        let time = 10;
        
        timer = setInterval(function () {
        if (time >= 0) {
            const min = String(Math.floor(time/ 60)).padStart(2, "0")
            const sec = String(time%60).padStart(2,"0")
            document.getElementById("timer").innerText = min + ":" + sec
            time = time - 1
        } else {
            document.getElementById("correct").disabled = true;
            isStarted = false;
            clearInterval(timer) //타이머 여러번 눌렀을 때, 겹치지 않게 하기 위해서, 초기화
        }
    }, 1000)
    } else {
        alert("타이머가 동작 중 입니다")
    }
}



