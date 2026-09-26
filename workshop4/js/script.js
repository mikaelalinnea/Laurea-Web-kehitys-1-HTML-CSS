//1
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", () => {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", () => {
    taskOneHeading.classList.toggle("highlight");
});

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", () => {
    animalText.textContent = "Tässä on uusi eläinteksti!";
    animalText.textContent += " Uusi lause(jos ymmärsin oikein..).";
});

const changeBackgroundButton = document.querySelector("#changeBackgroundButton");

changeBackgroundButton.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "pink") {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "pink";
    }
});

//2
const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Kissa tykkää nukkumisesta ja rapsutuksista.";

const animalImg = document.createElement("img");
animalImg.src = "images/kissa.jpg";
animalImg.alt = "Kissa";

animalContent.append(animalHeading);
animalContent.append(animalParagraph);
animalContent.append(animalImg);

const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", () => {
    animalContent.hidden = true;
});

showAnimalButton.addEventListener("click", () => {
    animalContent.hidden = false;
});

//3
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", () => {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImage.src ="images/elephant.png";
        animalImage.alt = "Elefantti";
        animalDescription.textContent = "Elefantit ovat maailman suurimpia maaeläimiä.";
    }
    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src ="images/tiger.png";
        animalImage.alt = "Tiikeri";
        animalDescription.textContent = "Tiikerit ovat suuria kissaeläimiä.";
    }
    if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src ="images/penguin.png";
        animalImage.alt = "Pingviini";
        animalDescription.textContent = "Pingviinit eivät osaa lentää.";
    }
    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src ="images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent = "Pandat syövät bambua.";
    }
});

animalImage.addEventListener("mouseenter", () => {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", () => {
    animalImage.classList.remove("image-highlight");
});

//4
const animalForm = document.querySelector("#animalForm");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const animal = document.querySelector("#observationAnimal").value.trim();
    const location = document.querySelector("#observationLocation").value.trim();
    const date = document.querySelector("#observationDate").value;

    if (!animal || !location || !date) {
        alert("Täytä kaikki kentät.");
        return;
    }

    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animal;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    newRow.append(animalCell);
    newRow.append(locationCell);
    newRow.append(dateCell);

    observationTableBody.append(newRow);
});