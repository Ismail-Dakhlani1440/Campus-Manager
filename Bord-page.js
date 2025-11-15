const storedTheme = localStorage.getItem("color-theme");
const commingEvents = document.getElementById("comming-events");
const activeFormation = document.getElementById("active-formation");
const registeredParticipant = document.getElementById("registered-participant");
const fillingRate = document.getElementById("filling-rate");
const formationPopulare = document.getElementById("formation-populare");

let numOfEvents = 0;

fetch("evenements.json")
  .then((response) => response.json())
  .then((myEvent) => {
    for (const obj of myEvent) {
      numOfEvents++;
    }
    commingEvents.textContent = numOfEvents;
  })
  .catch((error) => {
    console.log(error);
  });

let numOfFormation = 0;
let numOfParticipants = 0;
let percentOffilling = 0;

fetch("formations.json")
  .then((response) => response.json())
  .then((formation) => {
    for (const obj of formation) {
      participantsObject = obj.participants;
      numOfParticipants += participantsObject.length;
      console.log(participantsObject);
      numOfFormation++;
    }
    percentOffilling = (numOfFormation /numOfParticipants) * 100;
    console.log(activeFormation);
    activeFormation.textContent = numOfFormation;
    registeredParticipant.textContent = numOfParticipants;
    fillingRate.textContent = percentOffilling + "%";
  })
  .catch((error) => {
    console.log(error);
  });

for (let i = 0; i < 3; i++) {
  formationPopulare.innerHTML += `
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium text-body"></span>
              <span class="text-sm font-medium text-body">%</span>
            </div>
            <div class="w-full bg-[#e0e1ff] dark:bg-[#232438] rounded-full h-4">
              <div
                class="bg-[#6E76FF] h-4 rounded-full transition-all duration-500 ease-in-out"
                style="width: 45%"
              ></div>
            </div>`;
}
