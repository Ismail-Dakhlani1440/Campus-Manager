let data_evenment;
const eventFilter = document.querySelector('#eventfilter')
const form = document.querySelector('#form')
const veil = document.querySelector('#veil')
const typeinputs = document.querySelector('#typeinputs')
const eventoptions = document.querySelector('#eventoptions')
const modalAddButton = document.querySelector('#modalAddButton')
const modalInputs = document.querySelectorAll('.topform')


eventFilter.addEventListener('change', () => {
  renderevents(localStorage.getItem("account"), eventFilter.value)
})


eventoptions.addEventListener('change', () => {
  renderattributes(eventoptions.value)
})


modalAddButton.addEventListener('click', (e) => {
  handleSublmit(e)
  
  closeForm()
})






async function fetchdata() {
  if (!localStorage.getItem('data_evenment')) {
    try {
      const Response = await fetch("Evenment.json")
      if (!Response.ok) {
        throw new Error("Could not fetch Data")
      }
      const data = await Response.json()

      localStorage.setItem('data_evenment', JSON.stringify(data))

    }
    catch {
      console.error(Error);
    }
  }
  return JSON.parse(localStorage.getItem('data_evenment'))
}

function displayform() {
  form.classList.remove("hidden");
  veil.classList.remove("hidden");
}

function closeForm() {
  form.classList.add("hidden");
  veil.classList.add("hidden");
}

function handleSublmit(e) {
  e.preventdefault;
  console.log(modalInputs)
}

function saveData() {

}


function fillform(id) {
  displayform()

}

function deleteevent(eventid) {
  data_evenment = data_evenment.filter((event) => event.id !== eventid)
  renderevents(localStorage.getItem("account"), eventFilter.value)
  localStorage.setItem('data_evenment', JSON.stringify(data_evenment))
}

function renderattributes(selectedtype) {
  let template = ""
  switch (selectedtype) {
    case 'conférence':
      template += `
      <label for="speakerinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event Speaker :
        </label>
        <input type="text" name="speaker" id="speakerinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg mb-10">
      <label for="durationinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event Duration :
        </label>
        <input type="number" name="duration" id="durationinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg mb-10">
      <label for="registrationLinkinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event RegistrationLink :
        </label>
        <input type="text" name="registrationLink" id="registrationLinkinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg">
    `
      break
    case 'atelier':
      template += `
      <label for="materialsinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event Materials :
        </label>
        <input type="text" name="materials" id="materialsinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg mb-10">
      <label for="skillLevelinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event SkillLevel :
        </label>
        <input type="text" name="skillLevel" id="skillLevelinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg mb-10">
      <label for="maxParticipantsinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event MaxParticipants :
        </label>
        <input type="number" name="maxParticipants" id="maxParticipantsinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg">
    `
      break
    case 'club':
      template += `
      <label for="frequencyinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event Frequency :
        </label>
        <input type="text" name="frequency" id="frequencyinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg mb-10">
      <label for="contactinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event Contact :
        </label>
        <input type="text" name="contact" id="contactinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg mb-10">
      <label for="membershipFeeinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event MembershipFee :
        </label>
        <input type="number" name="membershipFee" id="membershipFeeinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg">
    `
      break
    case 'autre':
      template += `
      <label for="customFieldLabelinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event CustomFieldLabel :
        </label>
        <input type="text" name="customFieldLabel" id="customFieldLabelinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg mb-10">
      <label for="customFieldValueinput" class="block mb-1 font-bold text-2xl text-[#6E76FF] dark:text-[#A5AAFF]">
          Event CustomFieldValue :
        </label>
        <input type="text" name="customFieldValue" id="customFieldValueinput"
          class="topform w-[100%] border-2 border-[#3A3D80] dark:border-[#A5AAFF] px-3 py-2 rounded-lg">
    `
      break
  }
  typeinputs.innerHTML = template
}

async function rendermain() {
  data_evenment = await fetchdata();
  renderevents(localStorage.getItem("account"), 'all')
  renderattributes('conférence')
}

function renderevents(profile, type) {
  const eventcontainer = document.getElementById('cardcontainer')
  eventcontainer.innerHTML = ""
  data_evenment.forEach(event => {
    if (event.type == type || type == 'all') {
      let template = ""
      template += `
    <div class="bg-[#E1E3FF] dark:bg-[#23265C] shadow-md rounded-2xl p-5 hover:scale-[1.02] transition-transform flex flex-col justify-between">
      <div>
      <h2 class="text-base sm:text-lg font-semibold text-[#6E76FF] dark:text-[#A5AAFF] mb-2">
        ${event.title}
      </h2>
      <p class="text-sm text-[#000000] dark:text-[#E0E1FF]">
        ${event.date}
      </p>`
      if (profile == "student" || profile == "admin") {
        template += `
      <p class="text-sm text-[#868CFF] mb-3">
        ${event.location}
      </p>`
      }
      template += `
    <p class="text-sm text-[#000000] dark:text-[#E0E1FF]">
        ${event.description}
      </p>
      </div>`
      if (profile == "student" || profile == "admin") {
        switch (event.type) {
          case 'conférence':
            template += `
              <p class="text-sm text-[#868CFF] mb-3">
               Speaker : ${event.speaker}
              </p>
              <p class="text-sm text-[#868CFF] mb-3">
               Duration : ${event.duration}
              </p>
              <p class="text-sm text-[#868CFF] mb-3">
               RegistrationLink : ${event.registrationLink}
              </p>
            `
            break
          case 'atelier':
            template += `
              <p class="text-sm text-[#868CFF] mb-3">
               Materials : ${event.materials}
              </p>
              <p class="text-sm text-[#868CFF] mb-3">
               SkillLevel : ${event.skillLevel}
              </p>
              <p class="text-sm text-[#868CFF] mb-3">
               MaxParticipants : ${event.maxParticipants}
              </p>
            `
            break
          case 'club':
            template += `
            <p class="text-sm text-[#868CFF] mb-3">
               Frequency : ${event.frequency}
              </p>
              <p class="text-sm text-[#868CFF] mb-3">
               contact : ${event.contact}
              </p>
              <p class="text-sm text-[#868CFF] mb-3">
               membershipFee : ${event.membershipFee}
              </p>`
            break
          case 'autre':
            template += `
            <p class="text-sm text-[#868CFF] mb-3">
               ${event.customFieldLabel} : ${event.customFieldValue}
              </p>
            `
            break
        }
        template += `
    <div class="flex flex-row justify-between w-[100%]">
      <span class="bg-[#6E76FF] dark:bg-[#373B7B] text-white text-xs rounded-full px-3 py-1 mt-3">
        ${event.type}
      </span>`
        if (profile == "admin") {
          template += `
      <button class="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium rounded-full px-3 py-1 mt-3 transition-colors" onclick="updateevent('${event.id}')" >modifier</button>
      <button class="bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-full px-3 py-1 mt-3 transition-colors" onclick="deleteevent('${event.id}')" >supprimer</button>
    `
        }
      }
      template += `
      </div>
    </div>`
      eventcontainer.innerHTML += template

    }
  })
  if (profile == "admin") {
    let addCard = `
      <div onclick="displayform()"
        class="cursor-pointer bg-[#E1E3FF] dark:bg-[#23265C] shadow-md rounded-2xl p-5 hover:scale-[1.05] transition-transform flex flex-col items-center justify-center h-full min-h-[200px]">
      <div class="flex flex-col items-center">
        <span class="text-7xl sm:text-8xl font-bold leading-none text-[#6E76FF] dark:text-[#A5AAFF]">+</span>
        <p class="mt-3 text-base sm:text-lg font-semibold text-[#6E76FF] dark:text-[#A5AAFF]">Add Event</p>
      </div>
      </div>`
    eventcontainer.innerHTML += addCard
  }


}
rendermain()


