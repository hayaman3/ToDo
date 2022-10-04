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

// basicNotesNav.addEventListener("click", (event) => {
//     console.log(event.currentTarget)
//     console.log(event.target)
//   toggleActiveNav(event.currentTarget.child);
//   switch (event.target.id) {
//     case "notes-nav":
//       changeSection("notes-section", notesSectionContent);
//       break;
//     case "today-nav":
//       changeSection("today-section", getTodayContent());
//       break;
//     case "week-nav":
//       changeSection("today-section", weekContent);
//       break;
//     default:
//   }
// });

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

const noteSection = document.querySelector(".notes-section");

section.addEventListener("click", (event) => {
  let element = event.target;
  let elementTag = element.tagName.toLowerCase();
  switch (elementTag) {
    case "i":
      iTagEvents(element);
      break;
    case "button":
      showInputForm(element, ".notes-section");
      break;
    default:
  }
});

noteSection.addEventListener("change", (event) => {
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
    default:
      console.log("switch at iTagEvents index.js");
  }
}

function deleteFromLocalStorage(element) {
  const key = element.parentElement.id;
  localStorage.removeItem(key);
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
      saveTextInput(textInput.value);
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

function saveTextInput(inputValue) {
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
