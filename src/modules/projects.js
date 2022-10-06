const head = `<h1>Projects</h1>`;

const inputPopup = `<div>
  <input type="text" />
  <div>
    <button>Add</button>
    <button>Cancel</button>
  </div>
</div>`;

const loopLocalStorage = () => {
  let projects = "";
  if (localStorage.length == 0) return "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes("project")) {
      const value = localStorage.getItem(key)
      const lineTemplate = `
        <button type="button" id="${key}" class="project" value=${value}>  
          <i class="fa-regular fa-square"></i> ${value}
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
  ${loopLocalStorage()}
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
  showPopupButton.classList.toggle("hide");
  popup.classList.toggle("hide");
});

saveTextInputButton.addEventListener("click", (event) => {
  showPopupButton.classList.toggle("hide");
  popup.classList.toggle("hide");
  saveProject("project", textInput.value);
  textInput.value = "";
});

exitPopupButton.addEventListener("click", (event) => {
  showPopupButton.classList.toggle("hide");
  popup.classList.toggle("hide");
  textInput.value = "";
});

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

function projectsSectionContent(){

}

export { projectsSectionContent };
