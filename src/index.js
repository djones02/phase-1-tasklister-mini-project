document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded.")
});

function addToList(text) {
  const li = document.createElement("li")
  li.className = "listElement"
  li.textContent = text

  document.getElementById("tasks").appendChild(li)
}

const form = document.querySelector("form")
form.addEventListener("submit", (e) => handleTask(e))


// 
function handleTask(e) {
  e.preventDefault()
  const input = document.querySelector("input").value
  addToList(input)
}