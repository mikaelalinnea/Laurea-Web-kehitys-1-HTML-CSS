const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";

    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    let hasError = false;

    if (!name) {
        nameError.textContent = "Kirjoita nimi.";
        hasError = true;
    }
    if (!species) {
        speciesError.textContent = "Kirjoita laji.";
        hasError = true;
    }
    if (note.length < 1 || note.length > 150) {
        noteError.textContent = "Muistion pituus 1-150 merkkiä.";
        hasError = true;
    }
    if (hasError) return;
    // TODO: If valid, show the result / Näytä hyväksytty tulos.
    formResult.textContent = `${name} / ${species} / ${note}`;

    const animalObj = {
        name: name,
        species: species,
        note: note
    };
    localStorage.setItem("ws05Animal", JSON.stringify(animalObj));
});

// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const yearlyPrice = Number(animalType.value);
    const years = Number(yearsInput.value);

    let total = yearlyPrice * years;
    let discountText = "";

    if (years > 2) {
        total = total * 0.8;
        discountText = "20% alennus yli 2 vuodesta";
    }
    if (years >= 5) {
        total = total - 5;
        discountText += " Lisäksi -5€ vähintään 5 vuodesta.";
    }

    cost.textContent = `Yhteensä: €${total.toFixed(2)}`;
    discountMessage.textContent = discountText;
});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {

    const saved = localStorage.getItem("ws05Animal");
    
    if (!saved) {
        savedAnimal.textContent = "Ei vielä tallennettua eläintä.";
        return;
    }

    const obj = JSON.parse(saved);

    savedAnimal.textContent = `${obj.name} / ${obj.species} / ${obj.note}`;
}

loadButton.addEventListener("click", loadAnimal);

    clearButton.addEventListener("click", function () {
        localStorage.removeItem("ws05Animal"); 
        savedAnimal.textContent = "Tallennettu eläin poistettu.";
    });

loadAnimal();