const file = document.getElementById("file");
const urlInpt = document.querySelector(`input[type=text]`);
const inputs = document.querySelectorAll(".slider");

const img = document.querySelector(".main__img__piker__holder");


function loadLocalImg(e) {
  img.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
//   localStorage.setItem("localUrl", e.target.files[0].name);
//   localStorage.setItem("url", "");
}

function loadURLImg(e) {
  const url = e.target.value;

  img.style.backgroundImage = `url(${url})`;
  urlInpt.value = "";
//   localStorage.setItem("url", url);
//   localStorage.setItem("localUrl", "");
  e.preventDefault();
}

function handleChage() {
  const dataSize = this.dataset.sizing;
  document.documentElement.style.setProperty(`--${this.name}`, this.value + dataSize);
}

file.addEventListener("change", loadLocalImg);
urlInpt.addEventListener("change", loadURLImg);

inputs.forEach((input) => input.addEventListener("change", handleChage));
inputs.forEach((input) => input.addEventListener("mousemove", handleChage));
