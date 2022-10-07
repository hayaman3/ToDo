const section = document.querySelector("section");
section.classList.add("note")

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

function loopLocalStorage() {
  let noteLine = ``;

  if (localStorage.length == 0) return "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let value = localStorage.getItem(key).split(",");

    if (typeof value[1] == "undefined") value[1] = "";

    if (key.includes("note")) {
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

function getNotesSectionContent(){
  return `${loopLocalStorage()}${sectionAddNote}`;
}

section.innerHTML = getNotesSectionContent();

export { getNotesSectionContent };
