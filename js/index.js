import adventBoxes from "./data/api.js";

//Make sure there is a div/container to push to in index
const adventCalendarContainer = document.querySelector(".advent-calendar");

const savedBoxes = getExistingBoxes();

adventBoxes.forEach(adventBox => {

  let cssClass = "show";

  const doesObjectExist = savedBoxes.find(function (opened) {
    console.log(opened);

    return parseInt(opened.id) === adventBox.id;
  });

  console.log(doesObjectExist);

  if (doesObjectExist) {
    cssClass = "transparent";
  }

  adventCalendarContainer.innerHTML += `
  <div class="advent-container">
    <div class="advent-box" style="background-image:url('${adventBox.boxCover}');" data-id="${adventBox.id}" data-title="${adventBox.title}">
      <h2 class="${cssClass}">${adventBox.boxNr}</h2>
    </div>
  </div>
  `;
});

const flipButton = document.querySelectorAll(".advent-box");


flipButton.forEach((button) => {
  button.addEventListener("click", handleClick);
})

function handleClick() {
  event.target.classList.toggle("transparent");
  event.target.classList.toggle("show");

  const id = this.dataset.id;
  const title = this.dataset.title;

  const currentOpenedBoxes = getExistingBoxes();

  const productExists = currentOpenedBoxes.find(function (opened) {
    return opened.id === id;
  });

  if (!productExists) {
    const product = { id: id, title: title };
    currentOpenedBoxes.push(product);
    saveOpenedBoxes(currentOpenedBoxes);
  }
  else {
    const newOpenedBoxes = currentOpenedBoxes.filter(opened => opened.id !== id);
    saveOpenedBoxes(newOpenedBoxes);
  }


}

function getExistingBoxes() {
  const openedBox = localStorage.getItem("openedBoxes");


  if (!openedBox) {
    return [];
  }
  else {
    return JSON.parse(openedBox);
  }

}

function saveOpenedBoxes(openedBox) {
  localStorage.setItem("openedBoxes", JSON.stringify(openedBox));
}