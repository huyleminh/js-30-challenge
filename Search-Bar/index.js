const cities = [];

window.fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
.then(res => res.json())
.then(resJson => {
  cities.push(...resJson);
})

function searchKeyMatch(key, cities) {
  const reg = new RegExp(key, "gi");
  const re = cities.filter(city => city.city.match(reg) || city.state.match(reg));
  return re;
}

function displayMatches(cities) {
  return cities.map(city => {
    return `<li>${city.city}, ${city.state}, ${city.growth_from_2000_to_2013}</li>`
  })
}

function validateKey(key) {
  const reg = new RegExp(/[a-z]/, "gi")
  return key.match(reg)
}

const box  = document.querySelector(`input[type="text"]`);

box.addEventListener("change", handleInputChange);

function handleInputChange(e) {
  const key = e.target.value;
  const ul = document.querySelector("ul");
  const lists = (validateKey(key)) ? searchKeyMatch(key, cities) : [];
  if (lists.length > 0)
    ul.innerHTML = displayMatches(lists).join("");
  else 
    ul.innerHTML = "No result matched."
}