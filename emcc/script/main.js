/* DOM : Document Object Model [HTML을 해석한 객체]
0) document : HTML 전체의 문서 객체 정보를 가리킴
1) .getElementById("String") : id값이 일치하는 DOM 요소를 선택하는 메소드
2) .getElementsByClassName(): class 값이 일치하는       "
3) 그 밖에 메소드
*/
/*
menuBtn.onclick = function(){
    alert("클릭했습니다");
}
*/

/* CSSOM : CSS Object Model
.querySelector("css선택자") --> .querySelector("#menu")
.querySelectorAll("css선택자") 
*/

//아디이값이 menu인 DOM 객체를 menuBtn이라는 변수에 할당
var menuBtn = document.querySelector("#menu");
var sideMenu = document.querySelector("#side");
menuBtn.addEventListener("click", function(){
    sideMenu.style.right = 0;
    //숨겨진 사이드 메뉴를 보여줘!
    // 1) 숨겨진 사이드 메뉴 HTML을 추가
    // 2) 사이드메뉴에 ID 또는 CLASS 선택자 지정
    // 3) .querySelector()로 해당 DOM 요소를 선택하고,
    // 4) CSS를 조작해서 결과적으로 숨겨진 메뉴를 보여지게 처리함
});

// #side를 찾아서 클릭하면, display를 none으로 조작
sideMenu.addEventListener("click", function(){
    this.style.right = "-300px";
    // this는 보통 나 자신을 가리키는 대명사(sideMenu, document.querySelector("#side")로 지정하기보다)
});

var detail = document.querySelector("#product_detail");
var detailBtn = document.querySelector("#detail");
// console.log(detailBtn); // HTML 형식으로 출력
// console.dir(detailBtn); // 객체 형식으로 출력
detailBtn.addEventListener("click", showPopup);
function showPopup(){
    // 1. 레이어 구조를 작성 : HTML
    // 2. 제어를 위한 ID를 추가 : #modal
    // 3. DOM 선택 메소드 : .querySelector()로 #modal 선택 & 이벤트 추가
    detail.classList.remove("d-none");
    // document.querySelector("#product_detail")
    // 4. 스타일 제어 : 숨김 --> 표시
    // 5. 닫기 구조를 작성 : HTML
    // 6. 제어를 위한 ID를 추가 : #close_modal
    // 7. DOM 선택 메소드 : #close_madal 선택 & 이벤트 추가
}

var closeBtn = document.querySelector("#closer");
closeBtn.addEventListener("click", hidePopup);
function hidePopup() {
    detail.classList.add("d-none");
}