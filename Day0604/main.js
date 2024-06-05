// window.onload = function() {... 로딩되고 나서 실행할 코드}

window.addEventListener("DOMContentLoaded", function(){
    let now = new Date();
    let firstDay = new Date("2024-05-06"); // 실제로는 서버에서 등록된 DB상의 timestamps(년-월-일 시:분:초 타임존)
    let nowTime = now.getTime();
    let firstDayTime = firstDay.getTime();
    let passedTime = nowTime - firstDayTime;
    passedTime = Math.ceil( passedTime / (1000*60*60*24) )
    // console.log("차이 : " + passedTime);
    // const resultDiv = this.document.getElementById("result");
    const resultSpan = this.document.querySelector("#result");
    resultSpan.innerText = passedTime;
});