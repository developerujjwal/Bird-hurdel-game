var life = 5;
function ujjwal() {
  if (life == 0) {
  } else {
    life = life - 1;
    document.querySelector("h2").innerText = "LIFE" + life;
    if (life == 0) {
      document.querySelector("button").classList.remove("st");
      document.querySelector(".go").classList.add("go1");
      for (let i = 0; i < 8; i++) {
        document.querySelectorAll("marquee")[i].stop();
      }
      document.querySelector(".container").innerHTML = "";
    }
  }
}

document.querySelector(".btn").addEventListener("click", function (e) {
  console.log("event", e);
  createMarq();
  life = 6;
  ujjwal();
  document.querySelector(".btn").classList.add("st");
  document.querySelector(".go").classList.remove("go1");
  for (let i = 0; i < 8; i++) {
    var allElements = document.querySelectorAll("marquee");
    console.log("elements All", allElements);
    allElements[i].start();
  }
});
let createMarq = () => {
  let speed = 20;
  for (let i = 0; i < 8; i++) {
    let marqueeElement = document.createElement("marquee");
    console.log(marqueeElement);
    marqueeElement.setAttribute("scrollamount", `${speed}`);
    marqueeElement.innerHTML = `<span onmouseover="ujjwal()"  class="hurdel">  <img src="cloud1.png" height="90" width="90"></span>`;
    let container = document.querySelector(".container");
    container.appendChild(marqueeElement);
    console.log(speed);
    speed++;
  }
};
