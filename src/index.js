import "./assets/style.css";
import "./assets/fonts-6/css/all.css";
import github from "./assets/github.svg";
import TOP from "./assets/TOP.svg";

// import {notesUI, todayUI, weekUI, projectsUI,} from './modules/UI'

import { notesSectionContent } from "./modules/notes.js";
import { getTodayContent } from "./modules/today.js";
import { weekContent } from "./modules/week.js";
import { projectsContent } from "./modules/projects.js";

const section = document.querySelector("section");
const noteNav = document.querySelector("#notes-nav");
const todayNav = document.querySelector("#today-nav");
const weekNav = document.querySelector("#week-nav");

noteNav.addEventListener("click", (event) => {
  toggleActiveNav(event.currentTarget)
  changeSection("notes-section", notesSectionContent)
});

todayNav.addEventListener("click", (event) => {
  toggleActiveNav(event.currentTarget)
  changeSection("today-section", getTodayContent())
});

weekNav.addEventListener("click", (event) => {
  toggleActiveNav(event.currentTarget)
  changeSection("today-section", weekContent)
});


function changeSection(sectionClass, sectionContent) {
  section.className = "";
  section.classList.add(sectionClass);
  section.innerHTML = sectionContent;
}

function toggleActiveNav(element) {
  let siblings = element.parentElement.children;
  for (let sib of siblings) {
    sib.classList.remove("active-nav");
  }
  element.classList.add("active-nav");
}

section.addEventListener("click", (event) => {
  let element = event.target;
  let elementTag = element.tagName.toLowerCase();
  event.stopPropagation()
  switch (elementTag) {
    case "button":
      showInputForm(element, ".notes-section");
      break;
    case "i":
      iTagEvents(element);
      break;
    default:
  }
});

section.addEventListener("change", (event) => {
  let element = event.target;
  if (element.classList.contains("input-text")) return;
  if (element.classList.contains("edit-text")) {
    //
    console.log(element.value + " edit");
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
    case "fa-solid fa-plus":
      const showPopup = document.querySelector(`.notes-section .show`);
      const popup = document.querySelector(`.notes-section .popup`);
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      break;  
    default:
      console.log("switch at iTagEvents index.js");
  }
}

function showInputForm(element, ancestorClass) {
  const showPopup = document.querySelector(`${ancestorClass} .show`);
  const popup = document.querySelector(`${ancestorClass} .popup`);
  const textInput = document.querySelector(`${ancestorClass} .input`);
  const saveInput = document.querySelector(`${ancestorClass} .save`);
  const cancelInput = document.querySelector(`${ancestorClass} .cancel`);

  switch (element.id) {
    case showPopup.id:
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      break;
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
function saveTextInput(inputValue,sectionClassName) {
  console.log(sectionClassName)
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

