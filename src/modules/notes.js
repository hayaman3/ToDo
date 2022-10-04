const section = document.querySelector("section");

const note = (() => {
  section.classList.add("notes-section");

  const addNoteButton = /*html*/ `
    <button id="add-note" class="show">
      <i class="fa-solid fa-plus"></i><span> Add Note</span>
    </button>
  `;
  const inputPopup = /*html*/ `
    <div id="input-note-popup" class="input-popup hide popup">
      <input id="input-note" class="input-text input" type="text"/>
      <div id="input-buttons">
        <button id="save-input-button" class="green-button save">Save</button>
        <button id="cancel-input-button" class="red-button cancel">Cancel</button>
      </div>
    </div>
    `;

  function loopLocalStorage() {
    let noteLine = ``;
    if (localStorage.length > 0) {
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
    } else {
      return "";
    }
  }

  let noteContent = `
    ${loopLocalStorage()}
    ${addNoteButton}
    ${inputPopup}
  `;

  section.innerHTML = noteContent;

  return {
    noteContent,
  };
})();

let notesSectionContent = note.noteContent;
export { notesSectionContent };

