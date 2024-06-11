const pics = document.querySelectorAll(".pic");
const lightbox = document.querySelector("#lightbox");
// const container = document.querySelector(".container");
// container.addEventListener("click", (e) => {
//   e.preventDefault();
//   return false;
// });
const lightboxImage = document.querySelector("#lightboxImage");
const prevBt = document.querySelector(".prev");
const nextBt = document.querySelector(".next");
let current = 1; // 현재, lightboxImage로 지정된 사진의 번호
let lightboxIsShow = false;
prevBt.addEventListener("click", showPrevImage);
nextBt.addEventListener("click", showNextImage);
//lightbox.addEventListener("click", hideLightbox);
// 이벤트 전파(bubble) 때문에 이전,다음 버튼 클릭시에도 상자가 닫힘 ==> 닫기 버튼을 별도로 두어
// 해결하거나 이벤트 전파를 막아서 해결해야 함.
function hideLightbox(){
    lightboxIsShow = false;
    lightbox.style.display = "none";
  }
function showPrevImage(e) {
    e.preventDefault();
    let prev = current - 1;
    if (prev <= 0) {
        prev = 6;
    }
    current = prev; // 전역 변수 cureent를 업데이트
    showLightbox(prev); // prev 번호 이미지를 보여주도록 함수 호출
}
function showNextImage(e) {
    e.preventDefault();
    let next = current + 1;
    if (next > 6) {
        next = 1;
    }
    current = next;
    showLightbox(next);
}
pics.forEach(function (pic, index) {
    let _curr = index + 1;
    pic.addEventListener("click", () => {
        lightboxIsShow = true;
        current = _curr; // current 변수 업데이트
        showLightbox(_curr);
    });
});
function showLightbox(num) {
    if (lightboxIsShow) {
        lightbox.style.display = "block";
    }
    let numLocation = `images/tree-${num}.jpg`;
    lightboxImage.setAttribute("src", numLocation);
}