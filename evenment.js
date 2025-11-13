let profile ="admin"
localStorage.setItem("profile",profile)
let data_evenment;




async function fetchdata() {
if(!localStorage.getItem('data_evenment')){
  try {
    const Response = await fetch("Evenment.json")
    if (!Response.ok) {
      throw new Error("Could not fetch Data")
    }
    const data = await Response.json()
    
      localStorage.setItem('data_evenment',JSON.stringify(data))
    
  }
    catch {
    console.error(Error);
  }
} 
return JSON.parse(localStorage.getItem('data_evenment'))
}

function addevent() {
// coming soon
}

function updateevent(){
// coming soon
}

function deleteevent(){
// coming soon
}

async function rendermain() {
  data_evenment = await fetchdata();
  renderevents(localStorage.getItem("profile"))
}

function renderevents(profile) {
  const eventcontainer = document.getElementById('cardcontainer')
  eventcontainer.innerHTML = ""
  data_evenment.forEach(event => {
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
    if(profile=="etudiant" || profile=="admin"){
    template +=`
      <p class="text-sm text-[#868CFF] dark:text-[#2C2F66] mb-3">
        ${event.location}
      </p>`
    }
    template +=`
    <p class="text-sm text-[#000000] dark:text-[#E0E1FF]">
        ${event.description}
      </p>
      </div>`
  if(profile=="etudiant" || profile=="admin" ){
    template +=`
    <div class="flex flex-row justify-between w-[100%]">
      <span class="bg-[#6E76FF] dark:bg-[#373B7B] text-white text-xs rounded-full px-3 py-1 mt-3">
        ${event.type}
      </span>`
  if(profile=="admin"){
    template +=`
      <button class="bg-[#00B473] text-white text-xs rounded-full px-3 py-1 mt-3" onclick="updateevent(${event.id})" >modifier</button>
      <button class="bg-[#F0242D] text-white text-xs rounded-full px-3 py-1 mt-3" onclick="deleteevent(${event.id})" >supprimer</button>
    `
  }
  }
  template+=`
      </div>
    </div>

    `
    eventcontainer.innerHTML += template
  });

}
rendermain()


