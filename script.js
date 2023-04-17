const screen = document.getElementById("menu-input")
const li = document.querySelectorAll(".item-container")
const todoDiv = document.getElementById("todo-list")
const textDiv = document.querySelectorAll(".item-container")
let arr = []

const addEvent = function() {
  const newDiv = document.createElement("div")
  newDiv.classList.add("item-container")
  const newParagraph = document.createElement("p")
  newParagraph.classList.add("list-item")
  newDiv.appendChild(newParagraph)
  newParagraph.innerHTML = screen.value
  const arrLength = arr.push(todoDiv.appendChild(newDiv))
  const numberParagraph = document.createElement("p")
  numberParagraph.classList.add("number-order")
  numberParagraph.innerHTML = arrLength
  newDiv.appendChild(numberParagraph)

  const removeBtn = document.createElement("button")
  removeBtn.addEventListener("click", () => {
    newDiv.remove()
  })

  removeBtn.classList.add("remove-btn")
  const icon = document.createElement("i")
  icon.classList.add("fa-solid", "fa-xmark")
  removeBtn.appendChild(icon)
  newDiv.appendChild(removeBtn)

  screen.value = ""
}