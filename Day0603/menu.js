/* DOM 선택
I. 옛날코드
document.getElementById(),
document.get어쩌구~()

II. 요즘코드
document.querySelector("CSS선택자") : 일치하는 첫번째 요소 선택 메소드
document.querySelectorAll("CSS선택자") : 일치하는 모든 요소 선택 메소드
*/

const greenBt = document.querySelector("#greenBt");
const orangeBt = document.querySelector("#orangeBt");
const purpleBt = document.querySelector("#purpleBt");
const colorBox = document.querySelector("#box");
greenBt.addEventListener("click", function(){
    // console.log(this.innerText);
    let color = this.innerText;
    컬러변경함수(color); //컬러변경함수 호출
    // console.log(color, typeof color);
    // colorBox.style.backgoundColor = color;
    // console.log(colorBox);
});
// greenBtn.addEventListener("click", () => {
    orangeBt.addEventListener("click", function(){
    let color = this.innerText;
    컬러변경함수(color); //컬러변경함수 호출
    // console.log(color, typeof color);
    // colorBox.style.backgoundColor = color;
    });
    
    purpleBt.addEventListener("click", function(){
    let color = this.innerText;
    컬러변경함수(color);
    // console.log(color, typeof color);
    // colorBox.style.backgoundColor = color;
    });

    function 컬러변경함수(colorName){
        colorBox.style.backgroundColor = colorName;
    }