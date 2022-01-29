// SELECTORS
const elDirectorsContent = document.querySelectorAll(".directors-content");
const elDirectorsMeet = document.querySelectorAll(".directors-item-meet");
const elDirectorsBtn = document.querySelectorAll(".directors-item-pulse");

elDirectorsBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.toggle("button-add-active");
    elDirectorsMeet[index].classList.toggle("visually-hidden");
    elDirectorsContent[index].classList.toggle("visually-hidden");
  })
});