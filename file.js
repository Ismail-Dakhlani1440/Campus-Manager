const btnAjouter = document.getElementById("btn-ajouter");
const Form = document.getElementById("form");
const btnClose = document.getElementById("close");
const myInputs = document.querySelectorAll(".form-container input");
const btnSubmit = document.getElementById("btn");






// function displayFormations(data) {
//   const container = document.getElementById("formations-container");
//   data.forEach((formation) => {
//     const card = document.createElement("article");
//     card.className =
//       "relative p-5 h-100 bg-[#8086f4] w-full rounded-xl md:w-[30%]";
//     const title = document.createElement("p");
//     title.className =
//       "mx-auto w-[100%] bg-[#ddddf5] font-medium mb-5 text-center border-solid border-2 border-[#040dc9] rounded-2xl p-3";
//     title.textContent = formation.theme;
//     const Div = document.createElement("div");
//     Div.className = "leading-12 font-medium";
//     const formateur = document.createElement("p");
//     formateur.textContent = `Formateur : ${formation.trainer}`;
//     const duration = document.createElement("p");
//     duration.textContent = `Duration : ${formation.duration} (Semaine)`;
//     const capacity = document.createElement("p");
//     capacity.textContent = `Capacity : ${formation.capacity}`;
//     const participant = document.createElement("p");
//     participant.textContent = `Participants : ${formation.participants.length}/${formation.capacity}`;
//     Div.append(formateur, duration, capacity, participant);
//     const divBtn = document.createElement("div");
//     divBtn.className =
//       "p-1  mx-auto absolute bottom-3 right-[33%] w-[33%]  bg-[#ddddf5] text-center border-solid border-1 border-[#040dc9] rounded-3xl";
//     const btn = document.createElement("button");
//     btn.className = "cursor-pointer";
//     btn.textContent = "Inscrire";
//     divBtn.appendChild(btn);
//     card.append(title, Div, divBtn);
//     container.appendChild(card);
//   });
// }

// btnAjouter.addEventListener("click", () => {
//   Form.style.display = "block";
// });
// btnClose.addEventListener("click", () => {
//   Form.style.display = "none";
// });
// btnSubmit.addEventListener("submit", () => {});
