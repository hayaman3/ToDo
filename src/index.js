import "./assets/style.css";
import "./assets/fonts-6/css/all.css";
import github from "./assets/github.svg";
import TOP from "./assets/TOP.svg";

import { getNotesSectionContent } from "./modules/notes.js";
import { getTodaySectionContent } from "./modules/today.js";
import { weekContent } from "./modules/week.js";
import { projectsSectionContent } from "./modules/projects.js";

const section = document.querySelector("section");
const basicNotesNav = document.querySelector(".basic-notes-nav")

const nav = document.querySelector("nav")
nav.addEventListener("click", (e) => {
  const element = e.target
  if(!element.closest("button"))return
  if(element.closest("button").value==null)return

  const buttonValue = element.closest("button").value
  
  if(element.closest(".basic-notes-nav")){
    toggleActiveNav(element);
    changeSection(buttonValue)
  }
  if(element.closest(".projects-nav")){
    if(element.closest("add-project-handler")){
      // 
      console.log("add")
    }else{//maybe better if used with if or use switch for everything
      toggleActiveNav(element)
      //changeSection(buttonValue,buttonid)
    }
    
  }
  
});

function changeSection(buttonValue) {
  switch (buttonValue) {
    case "notes":
      section.innerHTML = getNotesSectionContent() 
      break;
    case "today":
      section.innerHTML = getTodaySectionContent() 
      break;
    case "week":
      section.innerHTML = weekContent 
      break;
    default:
      break;
  }

}

function toggleActiveNav(element) {
  const activeNav = document.querySelector('.active-nav')
  const activeButton = element.closest("button")
  activeNav.classList.remove("active-nav")
  activeButton.classList.add("active-nav")
}

section.addEventListener("click", (event) => {
  let element = event.target;
  let elementTag = element.tagName.toLowerCase();
  if (event.target.closest(".note-line") && elementTag == "i") {
    iTagEvents(element);
  }
  if (event.target.closest(".section-add-note")) {
    showInputForm(element, ".notes-section")
  }
});

section.addEventListener("change", (event) => {
  let element = event.target;
  if (element.classList.contains("input-text")) return;
  if (element.classList.contains("edit-text")) {
    console.log(element.parentElement.id);
    localStorage.setItem(element.parentElement.id, element.value);
  }
  if (element.classList.contains("date")) {
    const key = element.parentElement.id;
    let value = "";
    if (!element.value) {
      value = element.previousElementSibling.value;
    } else {
      value = element.previousElementSibling.value + "," + element.value;
    }
    localStorage.setItem(key, value);
  }
});

function iTagEvents(element) {
  switch (element.className) {
    case "fa-regular fa-circle-check":
      element.nextElementSibling.classList.remove("checked-note");
      element.className = "";
      element.classList.add("fa-regular", "fa-circle");
      break;
    case "fa-regular fa-circle":
      element.nextElementSibling.classList.add("checked-note");
      element.className = "";
      element.classList.add("fa-regular", "fa-circle-check");
      break;
    case "fa-solid fa-trash-can":
      deleteFromLocalStorage(element);
      element.parentElement.remove();
      break;
    default:
      console.log("iTagEvents");
  }
}

function showInputForm(element, ancestorClass) {
  const showPopup = document.querySelector(`${ancestorClass} .show`);
  const popup = document.querySelector(`${ancestorClass} .popup`);
  const textInput = document.querySelector(`${ancestorClass} .input`);
  const saveInput = document.querySelector(`${ancestorClass} .save`);
  const cancelInput = document.querySelector(`${ancestorClass} .cancel`);


  if(element.closest(".show")){
    showPopup.classList.toggle("hide");
    popup.classList.toggle("hide");
  }

  switch (element.id) {
    case saveInput.id:
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      saveTextInput(textInput.value, section.className);
      textInput.value = "";
      break;
    case cancelInput.id:
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      break;
    default:
      break;
  }
}

function deleteFromLocalStorage(element) {
  const key = element.parentElement.id;
  localStorage.removeItem(key);
}

//refractor to take input from other projects
function saveTextInput(inputValue, localStoragePrefix) {
  console.log(localStoragePrefix);
  let key = idGenerator("note");
  localStorage.setItem(key, inputValue);

  let newNodeContent = `  
      <i class="fa-regular fa-circle"></i>
      <input type="text" class="edit-text" value="${inputValue}">
      <input type="date" class="date">
      <i class="fa-solid fa-trash-can"></i>
    `;
  let newNode = document.createElement("div");
  newNode.classList.add("note-line");
  newNode.id = key;
  newNode.innerHTML = newNodeContent;

  const button = document.getElementById("add-note");
  const parentDiv = button.parentNode;
  parentDiv.insertBefore(newNode, button);
}

const idGenerator = (key) => {
  let date = new Date();
  return key + date.getTime();
};
