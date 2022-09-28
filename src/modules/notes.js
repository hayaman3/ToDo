let localStorageObj={}

const initLocalStorageObj = (() => {
    if (localStorage.length > 0){
        localStorageObj.notes = JSON.parse(localStorage.getItem("notes"))
        localStorageObj.projects = JSON.parse(localStorage.getItem("projects"))
        // console.log(localStorageObj)
        // console.log("ip")
    }else{
        localStorageObj = {
            "notes":[
            ["work","wt"],
            ["2d","ar"]
            ],
            "projects":[],
        }
        localStorage.setItem("notes",JSON.stringify(localStorageObj.notes))
        localStorage.setItem("projects",JSON.stringify(localStorageObj.projects))
        // console.log(localStorageObj)
        // console.log("else")
    }
})();

const noteInnerHtml = (() => {
    const addNoteButton = 
        `
            <button id="add-note" class="show">
                <i class="fa-solid fa-plus"></i> Add Note
            </button>
        `
    const inputPopup = 
        `
            <div id="input-note-popup" class="input-popup hide popup">
                <input id="input-note" class="input-text input" type="text"/>
                <div id="input-buttons">
                    <button id="save-input-button" class="green-button save">Save</button>
                    <button id="cancel-input-button" class="red-button cancel">Cancel</button>
                </div>
            </div>
        `
    const mapLocalStorageNotes = () => {
        let noteLine =``;
        let localStorageNotes = JSON.parse(localStorage.getItem("notes"))
        localStorageNotes.forEach(arr => 
            noteLine = noteLine+
            `
                <div class="note-line">
                    <i class="fa-regular fa-circle"></i>
                    <input type="text" class="edit-text" value="${arr[0]}">
                    <input type="date" class="date">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            `
        )
        return noteLine
    };
    const notesSectionContent = () =>{
        let noteContent = 
            `
                ${mapLocalStorageNotes()}
                ${addNoteButton}
                ${inputPopup}
            `
        return noteContent
    }  
    return {
        notesSectionContent
    };
  })();

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

const section = document.querySelector("main > section");
(function(){
    const notes = document.getElementById("notes-nav");
    notes.classList.add("active-nav");
    section.className = "";
    section.classList.add("notes-section")
    section.innerHTML = noteInnerHtml.notesSectionContent();
})();

function addNoteLocalStorage(text){
    console.log(localStorageObj.notes)
    // localStorage.setItem()
    
}

// function mapLocalStorageObj(getSpecificContent){
//     if(getSpecificContent=="notes"){

//     }
// }


function mapLocalStorageNotes(asddddd){
    let noteLine =``;
    let localStorageNotes = JSON.parse(localStorage.getItem("notes"))
    localStorageNotes.forEach(arr => 
        noteLine = noteLine+
        `
            <div class="note-line">
                <i class="fa-regular fa-circle"></i>
                <input type="text" class="edit-text" value="${arr[0]}">
                <input type="date" class="date">
                <i class="fa-solid fa-trash-can"></i>
            </div>
        `
    )
    return noteLine
}
// mapLocalStorageNotes()

function notesSectionContent(){
    let noteContent = 
        `
            ${mapLocalStorageNotes()}
            ${addNoteButton}
            ${inputPopup}
        `
    return noteContent
}



function addNoteToLocal(inputValue){
    // let index = document.querySelector(".notes-section").childElementCount-1
    console.log(localStorageObj)

    // localStorage.setItem(index,inputValue)
}

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






export {notesSectionContent}
