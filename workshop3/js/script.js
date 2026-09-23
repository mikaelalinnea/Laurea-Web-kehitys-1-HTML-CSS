//1
const btn1 = document.querySelector('button:nth-of-type(1)');
const btn2 = document.querySelector('button:nth-of-type(2)');

btn1.onclick = function() {
    alert("You clicked me!");
};

function showTable() {
    const animal1 = "Norsu";
    const habitat1 = "Savanni";
    const diet1 = "Kasvit";

    const animal2 = "Tiikeri";
    const habitat2 = "Metsä";
    const diet2 = "Liha";

    const tableHTML = `
        <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal1}</td>
                <td>${habitat1}</td>
                <td>${diet1}</td>
            </tr>
            <tr>
                <td>${animal2}</td>
                <td>${habitat2}</td>
                <td>${diet2}</td>
            </tr>
        </table>
    `;
    document.querySelector('#tableContainer').innerHTML = tableHTML;
}

btn2.onclick = showTable;

//2
const h2_1 = document.querySelector('h2:nth-of-type(1)');
const h2_2 = document.querySelector('h2:nth-of-type(2)');

h2_1.addEventListener('click', () => {
    h2_1.style.color = "red";
    h2_1.innerHTML = "Bye bye mouse!";
});

h2_2.addEventListener('mouseover', () => {
    console.log("Stepped over me with a mouse");
});

//3
const textarea = document.querySelector('#feedback');
const charcount = document.querySelector('#charcount');
const status = document.querySelector('#status');
const preview = document.querySelector('#preview');

textarea.addEventListener('focus', () => {
    status.textContent = "";
    textarea.style.backgroundColor = "#b3b7f0";
});
textarea.addEventListener('blur', () => {
    status.textContent ="";
    textarea.style.backgroundColor = "";
});
textarea.addEventListener('input', () => {
    const text = textarea.value;
    charcount.textContent = `${text.length}/200`;
    preview.textContent = text;
});

//4
const form = document.querySelector('#feedbackForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = textarea.value.trim();
    if (text.length < 10 || text.length > 200) {
        status.textContent = "Palautteen tulee olla 10-200 merkkiä pitkä.";
        status.style.color = "red";
        return;
    }
    status.textContent = "Thank you for your feedback!";
    status.style.color = "green";
    textarea.value = "";
});

//5
let counter = 0;

document.addEventListener('keydown', (event) => {
    console.log(event);

    const key = event.key;
    const code = event.code;

    counter++;

    const info= document.querySelector('#keyinfo');
    info.textContent = `Painettu näppäin: ${key} | Koodi: ${code} | Painalluksia: ${counter}`;
    const box = document.querySelector('#keybox');
    box.textContent = key;
});