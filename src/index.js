import "./assets/style.css";
import "./assets/fonts-6/css/all.css";
import github from "./assets/github.svg";
import TOP from "./assets/TOP.svg";

import { getNotesSectionContent } from "./modules/notes.js";
import { getTodaySectionContent } from "./modules/today.js";
import { weekContent } from "./modules/week.js";
import { getProjectsSectionContent } from "./modules/projects.js";

const section = document.querySelector("section");
const nav = document.querySelector("nav");

//nav control ||
nav.addEventListener("click", (e) => {
  const element = e.target;
  const buttonId = element.closest("button").id;

  if (!element.closest("button")) return;
  if (element.closest("#add-project-handler")) return; //project added handled @ project.js

  if (element.closest(".basic-notes-nav") || element.closest(".projects-nav")) {
    toggleActiveNav(element);
    changeSection(buttonId);
  }
});

function changeSection(buttonId) {
  section.classList = "";
  switch (buttonId) {
    case "notes":
      section.classList = "note";
      section.innerHTML = getNotesSectionContent();
      break;
    case "today":
      section.classList = "today";
      section.innerHTML = getTodaySectionContent();
      break;
    case "week":
      section.classList = "week";
      section.innerHTML = weekContent;
      break;
    default:
      section.classList = buttonId;
      section.innerHTML = getProjectsSectionContent(buttonId);
      break;
  }
}

function toggleActiveNav(element) {
  const removeActive = document.querySelector(".active-nav");
  const newActive = element.closest("button");
  removeActive.classList.remove("active-nav");
  newActive.classList.add("active-nav");
}

//section control ||
section.addEventListener("click", (event) => {
  let element = event.target;
  let elementTag = element.tagName.toLowerCase();
  if (event.target.closest(".note-line") && elementTag == "i") {
    iTagEvents(element);
  }
  if (event.target.closest(".section-add-note")) {
    showInputForm(element, `.${section.className}`);
  }
});

section.addEventListener("change", (event) => {
  let element = event.target;
  if (element.classList.contains("input-text")) return;
  if (element.classList.contains("edit-text")) {
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

// utility functions ||
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

  const toggleClass = () => {
    showPopup.classList.toggle("hide");
    popup.classList.toggle("hide");
  };

  if (element.closest(".show")) {
    toggleClass();
  }

  switch (element.id) {
    case saveInput.id:
      toggleClass();
      saveTextInput(textInput.value, ancestorClass);
      textInput.value = "";
      break;
    case cancelInput.id:
      toggleClass();
      break;
    default:
      break;
  }
}

function deleteFromLocalStorage(element) {
  const key = element.parentElement.id;
  localStorage.removeItem(key);
}

function saveTextInput(inputValue, localStoragePrefix) {
  let key = idGenerator("note" + localStoragePrefix);
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

  const button = document.querySelector(".section-add-note");
  const parentDiv = button.parentNode;
  parentDiv.insertBefore(newNode, button);
}

const idGenerator = (key) => {
  let date = new Date();
  return key + date.getTime();
};
