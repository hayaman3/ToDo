const contentConstructor = (priority, text) => {
    const getPriorityColor = (priority) => {
        switch(priority) {
            case "high":
                return "red"
                break;
            case "medium":
                return "yellow"
                break;
            case "low":
                return "green"
                break;
            default:
                return "grey"
          }
    }
    const lineContent = `
        <p class="note-line">
            <i class="fa-regular fa-circle"></i>
            <span id="note-detail" contenteditable="true" data-max-length="30">${text}</span>
            <input type="date" class="date">
            <i class="fa-solid fa-trash-can"></i>
        </p>
    `
    return { lineContent, getPriorityColor};
};

const example1 = contentConstructor("high", "Lorem ipsum dolor sit amet");
const example2 = contentConstructor("medium", "consectetur adipiscing elit")

// loop through saved data
// function notesContent(){
    
// }

const addNote = 
    `<button id="add-note">
        <i class="fa-solid fa-plus"></i> Add Note
    </button>`

const inputPopup = 
// class="hide"
    `<div id="input-note-popup" class="input-popup">
        <input id="input-note" class="input-text" type="text"/>
        <div id="input-buttons">
            <button id="save-input-button" class="green-button">Save</button>
            <button id="cancel-input-button" class="red-button">Cancel</button>
        </div>
    </div>`

let notesContent =
`   ${example1.lineContent}
    ${example2.lineContent}
    ${addNote}
    ${inputPopup}
`

export {notesContent}
