let input = document.querySelector("form input");
let test = document.getElementById("test");
let results = document.querySelector(".results")

function insert(num) {
  input.value += num;
}
function clean() {
  input.value = "";
}

function back() {
  input.value = input.value.slice(0, -1);
}

function equal() {
  try {
    input.value = eval(input.value);
    test.innerHTML += `<p>${ input.value}</p>`;
  }
  catch {
    input.value = "Error"
  }
}

results.addEventListener('click', (eo) => {
  test.classList.toggle("display");
})



