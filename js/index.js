import adventBoxes from "./data/api.js";

//Make sure there is a div/container to push to in index
const adventCalendarContainer = document.querySelector(".advent-calendar");

adventBoxes.forEach(adventBox => {
  adventCalendarContainer.innerHTML += `
  <div class="advent-box" style="background-image:url('${adventBox.boxCover}');" data-id="${adventBox.id}" data-name="${adventBox.title}">
    <h2 class="show">${adventBox.box}</h2>
  </div>`;
});

const flipButton = document.querySelectorAll(".advent-box");

// console.log(flipButton);

flipButton.forEach((button) => {
  button.addEventListener("click", handleClick);
})

function handleClick() {
  // console.log(event);
  event.target.classList.toggle("transparent");
  event.target.classList.toggle("show");
}