var boxshadow = "";

for (var i = 0; i <= 2000; i++) {
  px = Math.random() < 0.5 ? "-" : "";
  py = Math.random() < 0.5 ? "-" : "";
  x = Math.floor(Math.random() * window.innerWidth + 1);
  y = Math.floor(Math.random() * window.innerHeight + 1);
  s = Math.floor(Math.random() * 2 - 1);
  boxshadow += px + x + "px " + py + y + "px 0 " + s + "px #fff,";
}

boxshadow = boxshadow.slice(0, -1);

stars.style.boxShadow = boxshadow;
let ocenka = document.getElementById("ocenka");
let params = new URL(document.location).searchParams;
let a = params.get("ocen");
console.log(params.get("ocen"));
ocenka.innerHTML = `${a}`;
