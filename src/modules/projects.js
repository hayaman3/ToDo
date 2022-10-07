import "../assets/fonts-6/css/all.css";
const getProjectsFromLocalStorage = () => {
  let projects = "";
  if (localStorage.length == 0) return "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes("project")&&!key.includes("note")) {
      const value = localStorage.getItem(key)
      const lineTemplate = `
        <button type="button" id="${key}" class="project">  
          <i class="fa-regular fa-square"></i>
          <span> ${value}</span>
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;
      projects = projects + lineTemplate;
      
    }
  }
  return projects
};

const projectNav = document.querySelector(".projects-nav");

function projectsNavContent() {
  const content = `
  <h2>
    <i class="fa-regular fa-folder-open"></i>
    <span>Projects</span>
  </h2>
  ${getProjectsFromLocalStorage()}
  <div id="add-project-handler">
    <button type="button" id="add-project" class="show">
      <i class="fa-solid fa-plus"></i>
      Add Project
    </button>
    <div id="add-project-popup" class="input-popup hide popup">
      <input
        id="input-project"
        class="input-text input"
        type="text"
        maxlength="10"
      />
      <div id="new-project-buttons">
        <button type="button" id="save-project-button" class="save">Save</button>
        <button type="button" id="cancel-project-button" class="cancel">Cancel</button>
      </div>
    </div>
  </div>`;

  return content;
}

projectNav.innerHTML = projectsNavContent();

const ancestorClass = "#add-project-handler";

const showPopupButton = document.querySelector(`${ancestorClass} .show`);
const popup = document.querySelector(`${ancestorClass} .popup`);
const textInput = document.querySelector(`${ancestorClass} .input`);
const saveTextInputButton = document.querySelector(`${ancestorClass} .save`);
const exitPopupButton = document.querySelector(`${ancestorClass} .cancel`);

showPopupButton.addEventListener("click", (event) => {
  toggleClass();
});

saveTextInputButton.addEventListener("click", (event) => {
  toggleClass();
  saveProject("project", textInput.value);
  textInput.value = "";
});

exitPopupButton.addEventListener("click", (event) => {
  toggleClass();
  textInput.value = "";
});

const toggleClass = () => {
  showPopupButton.classList.toggle("hide");
  popup.classList.toggle("hide");
};

function saveProject(idPrefix, inputValue) {
  let key = idGenerator(idPrefix);
  localStorage.setItem(key, inputValue);

  const newNodeContent = `  
    <i class="fa-regular fa-square"></i> ${inputValue}
  `;
  // when clicked <i class="fa-regular fa-square-check"></i>

  const newProjectButton = document.createElement("button");
  newProjectButton.id = key;
  newProjectButton.innerHTML = newNodeContent;

  const addProjectHandler = document.getElementById("add-project-handler");
  const nav = addProjectHandler.parentNode;
  nav.insertBefore(newProjectButton, addProjectHandler);
}

const idGenerator = (idPrefix) => {
  let date = new Date();
  return idPrefix + date.getTime();
};

const addNoteButton = /*html*/ `
  <button type="button" id="add-note" class="show">
    <i class="fa-solid fa-plus"></i> Add Note
  </button>
`;

const inputPopup = /*html*/ `
  <div id="input-note-popup" class="input-popup hide popup">
    <input id="input-note" class="input-text input" type="text"/>
    <div id="input-buttons">
      <button type="button" id="save-input-button" class="green-button save">Save</button>
      <button type="button" id="cancel-input-button" class="red-button cancel">Cancel</button>
    </div>
  </div>
`;

const sectionAddNote = /*html*/`
  <div class="section-add-note">
    ${addNoteButton}
    ${inputPopup}
  </div>
`

function getProjectsSectionContent(id){
  let value = localStorage.getItem(id)

  let content = `
    <h1>${value}</h1>
    ${loopLocalStorage(id)}
    ${sectionAddNote}
  `
  return content;
}

function loopLocalStorage(id) {
  let noteLine = ``;

  if (localStorage.length == 0) return "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let value = localStorage.getItem(key).split(",");

    if (typeof value[1] == "undefined") value[1] = "";

    if (key.includes(`note.${id}`)) {
      const lineTemplate = /*html*/ `
        <div class="note-line" id=${key}>
          <i class="fa-regular fa-circle"></i>
          <input type="text" class="edit-text" value="${value[0]}">
          <input type="date" class="date" value="${value[1]}">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      `;
      noteLine = noteLine + lineTemplate;
    }
  }
  return noteLine;
}


export { getProjectsSectionContent };
