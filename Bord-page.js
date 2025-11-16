  const storedTheme = localStorage.getItem("color-theme");
  const commingEvents = document.getElementById("comming-events");
  const activeFormation = document.getElementById("active-formation");
  const registeredParticipant = document.getElementById("registered-participant");
  const fillingRate = document.getElementById("filling-rate");

  let numOfEvents = 0;

  fetch("Evenment.json")
    .then((response) => response.json())
    .then((myEvent) => {
      for (const item of myEvent) {
        numOfEvents++;
      }
      commingEvents.innerHTML += `<span class="text-2xl">${numOfEvents}</span>`;
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
      for (const item of formation) {
        item.participants.forEach((element) => {
          numOfParticipants++;
        });

        numOfFormation++;
      }
      percentOffilling = (numOfFormation / numOfParticipants) * 100;
      activeFormation.innerHTML += `<span class="text-2xl">${numOfFormation}</span>`;
      registeredParticipant.innerHTML += `<span class="text-2xl">${numOfParticipants}</span>`;
      fillingRate.innerHTML += `<span class="text-2xl">${percentOffilling}%</span>`;
    })
    .catch((error) => {
      console.log(error);
    });

