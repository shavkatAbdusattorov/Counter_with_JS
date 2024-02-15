let div = document.querySelector(".div");
let inc = document.querySelector(".inc");
let h1 = document.querySelector(".vel");
let dec = document.querySelector(".dec");
let div1 = document.querySelector(".div1");
let h2 = document.querySelector(".vel1");

inc.onclick = () => {
  dec.style.color = "black";
  inc.style.color = "green";
  if (h1.innerHTML < 9) {
    h1.innerHTML++;
    h2.innerHTML++;
  } else {
    h1.innerHTML = 1;
    h2.innerHTML = 1;
  }
  if (h1.innerHTML > 0 && h1.innerHTML <= 3) {
    h1.style.color = "red";
    div1.style.background = "orange";
    h2.style.color = "red";
  } else if (h1.innerHTML > 3 && h1.innerHTML <= 6) {
    h1.style.color = "yellow";
    h2.style.color = "yellow";
    div1.style.background = "blue";
  } else {
    h1.style.color = "green";
    div1.style.background = "gray";
    h2.style.color = "green";
  }
};
dec.onclick = () => {
  dec.style.color = "red";
  inc.style.color = "black";
  if (h1.innerHTML > 1) {
    h1.innerHTML--;
    h2.innerHTML--;
  } else {
    h1.innerHTML = 1;
    h2.innerHTML = 1;
  }

  if (h1.innerHTML > 0 && h1.innerHTML <= 3) {
    div1.style.color = "red";
    h1.style.color = "red";
    h2.style.color = "red";
  } else if (h1.innerHTML > 3 && h1.innerHTML <= 6) {
    div1.style.background = "blue";
    h1.style.color = "yellow";
    h2.style.color = "yellow";
  } else {
    div1.style.background = "gray";
    h1.style.color = "green";
    h2.style.color = "green";
  }
};
