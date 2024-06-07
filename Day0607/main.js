/**
 * 팝업 관련 메서드 : 열기, 닫기
 * 파라미터 : null
 * 작성자 : 홍길동, 일시 : 2024.06.07
 */
document.addEventListener("DOMContentLoaded", function () {
    function pops() {
        const opener = document.querySelector(".opener"); // button 태그를 선택한다.
        const closer = document.querySelector(".closer"); // button 태그를 선택한다.
        const POPUP = document.querySelector("#popup");
        // Q.닫기 버튼이 아닌 창 전체(빈곳)를 클릭했을때 닫게 하려면??
        window.addEventListener("click", (event) => {
            if (event.target === POPUP) {
                closePopup();
            }
        });
        opener.addEventListener("click", openPopup);
        closer.addEventListener("click", closePopup);
        function openPopup() {
            POPUP.classList.remove("hidden");
        }
        function closePopup() {
            POPUP.classList.add("hidden");
        }
    }
    pops();
})