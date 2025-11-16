// const Person = [
//   {
//     Nom: "omar",
//     age: "33",
//     hobies: ["natation", "swiming", "reading"],
//   },
//   {
//     Nom: "mohammed",
//     age: "66",
//     hobies: ["natation", "swiming", "reading"],
//   },
//   {
//     Nom: "younes",
//     age: "55",
//     hobies: ["natation", "swiming", "reading"],
//   },
// ];
// const globalContainer = document.createElement("div");

// Person.forEach((prsn) => {
//   const nom = document.createElement("h1");
//   const age = document.createElement("p");
//   const container = document.createElement("div");

//   nom.textContent = prsn.Nom;
//   age.textContent = prsn.age;

//   prsn.hobies.forEach((h) => {
//     const hoby = document.createElement("span");
//     hoby.textContent = h;
//     container.append(nom, age, hoby);
//   });
//   globalContainer.appendChild(container);
// });

const btnAjouter = document.getElementById("btn-ajouter");
const btnClose = document.getElementById("close");
const btnSubmit = document.getElementById("btn");
const Form = document.getElementById("form");
const formInformation = document.getElementById("form-container");
const myInputs = document.getElementsByClassName("input");
let storageData = [];
let save = {};

async function GetData() {
  const res = await fetch("formation.json");
  if (res.ok) {
    const data = await res.json();
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(data));
    }
    storageData = JSON.parse(localStorage.getItem("data"));
    displayFormations();
  }
}

GetData();
console.log(storageData);
function displayFormations() {
  const container = document.getElementById("formations-container");
  container.innerHTML = "";
  storageData.forEach((formation) => {
    const card = document.createElement("article");
    card.className =
      "relative p-5 h-100 bg-[#8086f4] w-full rounded-xl md:w-[30%]";
    const title = document.createElement("p");
    title.className =
      "mx-auto w-[100%] bg-[#ddddf5] font-medium mb-5 text-center border-solid border-2 border-[#040dc9] rounded-2xl p-3";
    title.textContent = formation.theme;
    const Div = document.createElement("div");
    Div.className = "leading-12 font-medium";
    const formateur = document.createElement("p");
    formateur.textContent = `Formateur : ${formation.trainer}`;
    const duration = document.createElement("p");
    duration.textContent = `Duration : ${formation.duration} (Semaine)`;
    const capacity = document.createElement("p");
    capacity.textContent = `Capacity : ${formation.capacity}`;
    const participant = document.createElement("p");
    participant.textContent = `Participants : ${formation.participants.length}/${formation.capacity}`;
    Div.append(formateur, duration, capacity, participant);
    const divBtn = document.createElement("div");
    divBtn.className =
      "p-1  mx-auto absolute bottom-3 right-[33%] w-[33%]  bg-[#ddddf5] text-center border-solid border-1 border-[#040dc9] rounded-3xl";
    const btn = document.createElement("button");
    btn.className = "cursor-pointer";
    btn.textContent = "Inscrire";
    divBtn.appendChild(btn);
    card.append(title, Div, divBtn);
    container.appendChild(card);
  });
}

btnAjouter.addEventListener("click", () => {
  Form.style.display = "block";

  for (let i = 0; i < myInputs.length; i++) {
    myInputs[i].addEventListener("input", () => {
      save["id"] = storageData.length + 1;
      save["participants"] = [""];
      save[myInputs[i].id] = myInputs[i].value;
    });
  }
  formInformation.onsubmit = function (e) {
    e.preventDefault();
    let idCount = storageData.length + 1;
    save.id = "form_" + idCount;
    storageData.push(save);
    localStorage.setItem("data", JSON.stringify(storageData));
    Form.style.display = "none";
    displayFormations();
  };
});

btnClose.addEventListener("click", () => {
  Form.style.display = "none";
});
