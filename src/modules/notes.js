const contentConstructor = (text) => {
    const lineContent = `
        <div class="note-line">
            <i class="fa-regular fa-circle"></i>
            <input type="text" class="edit-text" value="${text}">
            <input type="date" class="date">
            <i class="fa-solid fa-trash-can"></i>
        </div>
    `
    return {lineContent};
};

const example1 = contentConstructor("Lorem ipsum dolor sit amet");
const example2 = contentConstructor("consectetur adipiscing elit")

// loop through saved data
// function notesContent(){
    
// }

const addNoteButton = 
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

// let noteContent = localStorage.key()

let notesSectionContent =
`   
    ${""}
    ${addNoteButton}
    ${inputPopup}
`
const section = document.querySelector("main > section");
const defaultUI = (() => {
    const notes = document.getElementById("notes-nav");
    notes.classList.add("active-nav");
    section.className = "";
    section.classList.add("notes-section")
    section.innerHTML = notesSectionContent;
})();

const noteSection = document.querySelector("section.notes-section")

noteSection.addEventListener("click", (event) => {
    let element = event.target;
    let elementTag = element.tagName.toLowerCase()
    switch(elementTag){
        case "i":
            iTagEvents(element)
            break;
        case "button":
            const ancestorClass = ".notes-section"
            showInputForm(element,ancestorClass)   
            break;
        default:
    }
})

noteSection.addEventListener("change", (event) => {
    let element = event.target
    if(element.classList.contains("input-text"))return
    if(element.classList.contains("edit-text")){
         // 
    console.log(element.value+" edit")
    }
    if(element.classList.contains("date")){
        // 
    console.log(element.value+" date")
    }
  
})


function iTagEvents(element){
    switch(element.className){
        case "fa-regular fa-circle-check":
            element.nextElementSibling.classList.remove("checked-note");
            element.className = "";
            element.classList.add("fa-regular","fa-circle");
            break;
        case "fa-regular fa-circle":
            element.nextElementSibling.classList.add("checked-note");
            element.className = "";
            element.classList.add("fa-regular","fa-circle-check");
            break;
        case "fa-solid fa-trash-can":
            element.parentElement.remove();
            //remove from storage
        default:
            console.log("switch at iTagEvents index.js")
    }
}

function showInputForm(element,ancestorClass){
    const showPopup = document.querySelector(`${ancestorClass} .show`)
    const popup = document.querySelector(`${ancestorClass} .popup`)
    const textInput = document.querySelector(`${ancestorClass} .input`)
    const saveInput = document.querySelector(`${ancestorClass} .save`)
    const cancelInput = document.querySelector(`${ancestorClass} .cancel`)
   
    switch (element.id){
        case showPopup.id:
            showPopup.classList.toggle("hide")
            popup.classList.toggle("hide")
            break;
        case saveInput.id:
            showPopup.classList.toggle("hide")
            popup.classList.toggle("hide")
            addNoteLocalStorage(textInput.value)
            break;
        case cancelInput.id:
            showPopup.classList.toggle("hide")
            popup.classList.toggle("hide")
            break;
        default:
            break;
    }
}
let localStorageObj={}

const initLocalStorageObj = (() => {
    if (localStorage.length > 0){
        localStorageObj.notes = JSON.parse(localStorage.getItem("notes"))
        localStorageObj.projects = JSON.parse(localStorage.getItem("projects"))
        console.log(localStorageObj)
    }else{
        localStorageObj = {
            "notes":[
            ["work","wt"],
            ["2d","ar"]
            ],
            "projects":[],
        }
        localStorage.setItem("notes",JSON.stringify(localStorageObj.notes))
        // console.log(localStorageObj.notes)
    }
})();

function addNoteLocalStorage(text){
    console.log(localStorageObj.notes)
    // localStorage.setItem()
    
}


function addNoteToLocal(inputValue){
    // let index = document.querySelector(".notes-section").childElementCount-1
    console.log(localStorageObj)

    // localStorage.setItem(index,inputValue)
}
export {notesSectionContent as notesContent}
