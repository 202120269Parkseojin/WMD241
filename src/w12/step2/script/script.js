//  chatGPT에서 나오는 var 명령어는 다 let으로 수정
// document.querySelector(".card"); -> 하나만 찾아줌
// document.querySelectorAll(".card"); -> 해당되는 카드 다 찾아줌
console.log("안녕하세요");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.8 0.05 0)";

let aCard = document.querySelector(".card");
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");
  // aCard.style.backgroundColor = "#ff0000";
  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classList);
});

// document.querySelectorAll(".card");
