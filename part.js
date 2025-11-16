let phrase = document.getElementById("phrese");
let next = document.getElementById("next");
let mott = document.getElementById("mot");
let clavie = document.getElementById("bnt");
let help = document.getElementById("help");
let repitition = document.getElementById("repetition");
let corect = document.getElementById("level");
let prog_dy = document.getElementById("prog");
let compt = 1;
let comp = 0;

let alphabet = "abcdefghijklmnopqrstuvwxyz";
const alpha = alphabet.split("");
let data = [];

fetch("https://mocki.io/v1/f64d2ff5-72de-47ea-a59d-c8e8bfae08ef")
  .then((res) => res.json())
  .then((srcc) => {
    // data = srcc <= une méthode de travaille tres simpel et bonne pratique
    console.log(srcc);
    srcc.forEach((element) => {
      data.push(element);
    });
    phrase.textContent = data[0].hint;
    action_clavie();
  });

function next_part() {
  
 
  if (compt < data.length) {
    console.log(compt)
    phrase.textContent = data[compt].hint


    if (compt * 10 == 50) {
      prog_dy.classList.replace(`w-[${0 * 10}%]`, `w-[${compt * 10}%]`);
      corect.textContent = 1;
    }
    if (compt * 10 == 140) {
      prog_dy.classList.replace(`w-[${5 * 10}%]`, `w-[${compt * 10}%]`);
      corect.textContent = 2;
    }
    compt++;
    afichage_clavie()
    action_clavie()
    console.log(compt)
  }
}

 next.addEventListener("click", next_part);

function afichage_clavie() {
  clavie.innerHTML=""
  alpha.forEach((rep) => {
    clavie.innerHTML += `<button class="btn  bg-[#9A9FFF] w-12 h-12 rounded-[40PX]">${rep}</button>`;
  });

}

function action_clavie() {
  
  let mot_cach = data[comp].word.split("");
  let mot_cach2 = data[comp].word.split("");
  comp++;
  for (let i = 0; i < mot_cach2.length; i++) {
    mot_cach2[i] = "_";
    console.log("mot cach", mot_cach[i]);
  }

  mott.textContent = mot_cach2.join(" ");
  let button_clavie = document.querySelectorAll(".btn");
  let rep = mot_cach.length + 2;
  repitition.textContent = rep;

  button_clavie.forEach((button) => {
    button.addEventListener("click", function () {
      if (rep > 0) {
        repitition.textContent = rep--;
      }else{
        repitition.textContent = rep;
        phrase.textContent = "you lost"
        mott.textContent = ""
      }


      for (let i = 0; i < mot_cach.length; i++) {
        if (button.textContent == mot_cach[i]) {
          mot_cach2[i] = button.textContent;
          mott.textContent = mot_cach2.join(" ");
          button.textContent = " ";
        }
      }
    });
  });
help.addEventListener("click", function () {
  let trouv = false;  

  mot_cach2 = mot_cach2.map((aide, index) => {

    if (!trouv && aide == "_") {
      console.log("l9aha");
      trouv = true;
      help.setAttribute("disabled", true);
      return mot_cach[index]; 
    }

    return aide; 
  });

  // if (mot_cach == mot_cach2)
  // {

  // }

  document.getElementById("mot").textContent = mot_cach2.join(" ");
});
  
}

afichage_clavie();
