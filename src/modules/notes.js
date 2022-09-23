import {imNew} from '../index.js'

const contentConstructor = (priority, text) => {
    const getPriorityColor = (priority) => {
        switch(priority) {
            case "high":
                return "red"
            case "medium":
                return "yellow"
            case "low":
                return "green"
            default:
                return "grey"
          }
    }
    const lineContent = `
        <div class="note-line">
            <i class="fa-regular fa-circle"></i>
            <input type="text" class="edit-text" value="${text}">
            <input type="date" class="date">
            <i class="fa-solid fa-trash-can"></i>
        </div>
    `
    return { lineContent, getPriorityColor};
};

const example1 = contentConstructor("high", "Lorem ipsum dolor sit amet");
const example2 = contentConstructor("medium", "consectetur adipiscing elit")

// loop through saved data
// function notesContent(){
    
// }

const addNote = 
    `<button id="add-note" class="show">
        <i class="fa-solid fa-plus"></i> Add Note
    </button>`

const inputPopup = 
    `<div id="input-note-popup" class="input-popup hide popup">
        <input id="input-note" class="input-text input" type="text"/>
        <div id="input-buttons">
            <button id="save-input-button" class="green-button save">Save</button>
            <button id="cancel-input-button" class="red-button cancel">Cancel</button>
        </div>
    </div>`



let notesContent =
`   ${example1.lineContent}
    ${example2.lineContent}
    ${addNote}
    ${inputPopup}
`
const section = document.querySelector("main > section");
const defaultUI = (() => {
    const notes = document.getElementById("notes-nav");
    notes.classList.add("active-nav");
    section.className = "";
    section.classList.add("notes-section")
    section.innerHTML = notesContent;
})();

const noteSection = document.querySelector("section.notes-section")

console.log(noteSection)
// noteSection.addEventListener("click", (event) => {
//     let element = event.target;
//     let elementTag = element.tagName.toLowerCase()
//     switch(elementTag){
//         case "i":
//             iTagEvents(element)
//             break;
//         case "button":
//             let ancestorClass = ".notes-section"
//             addButton(element,ancestorClass)   
//             break;
//         default:
//     }
// })

// noteSection.addEventListener("change", (event) => {
//     let element = event.target
//     if(element.classList.contains("input-text"))return
//     if(element.classList.contains("edit-text")){
//          // 
//     console.log(element.value+" edit")
//     }
//     if(element.classList.contains("date")){
//         // 
//     console.log(element.value+" date")
//     }
  
// })

// function addButton(element,ancestorClass){
//     const showPopup = document.querySelector(`${ancestorClass} .show`)
//     const popup = document.querySelector(`${ancestorClass} .popup`)
//     const textInput = document.querySelector(`${ancestorClass} .input`)
//     const saveInput = document.querySelector(`${ancestorClass} .save`)
//     const cancelInput = document.querySelector(`${ancestorClass} .cancel`)
   
//     switch (element.id){
//         case showPopup.id:
//             showPopup.classList.toggle("hide")
//             popup.classList.toggle("hide")
//             break;
//         case saveInput.id:
//             showPopup.classList.toggle("hide")
//             popup.classList.toggle("hide")
//             // 
//             console.log(textInput.value)
//             break;
//         case cancelInput.id:
//             showPopup.classList.toggle("hide")
//             popup.classList.toggle("hide")
//             break;
//         default:
//             break;
//     }
// }

// function iTagEvents(element){
//     switch(element.className){
//         case "fa-regular fa-circle-check":
//             element.nextElementSibling.classList.remove("checked-note");
//             element.className = "";
//             element.classList.add("fa-regular","fa-circle");
//             break;
//         case "fa-regular fa-circle":
//             element.nextElementSibling.classList.add("checked-note");
//             element.className = "";
//             element.classList.add("fa-regular","fa-circle-check");
//             break;
//         case "fa-solid fa-trash-can":
//             element.parentElement.remove();
//             //remove from storage
//         default:
//             console.log("switch at iTagEvents index.js")
//     }
// }

export {notesContent}
