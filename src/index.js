import {notesUI, todayUI, weekUI, projectsUI} from './modules/UI'

const basicNotesNav = document.querySelector(".basic-notes-nav")
const projectsNav = document.querySelector(".projects-nav")
const noteSection = document.querySelector("section.notes-section")


basicNotesNav.addEventListener("click", (event) =>{
    toggleActiveNav(event.target);
    switch (event.target.id) {
        case "notes-nav":
            notesUI();
            break;
        case "today-nav":
            todayUI();
            break;
        case "week-nav":
            weekUI();
            break;
        default:
            break;
    }
})

projectsNav.addEventListener("click", (event) =>{
    let element = event.target
    let ancestorClass = ".projects-nav"
    addButton(element,ancestorClass)    
})



noteSection.addEventListener("click", (event) => {
    let element = event.target;
    let elementTag = element.tagName.toLowerCase()
    switch(elementTag){
        case "i":
            iTagEvents(element)
            break;
        case "button":
            let ancestorClass = ".notes-section"
            addButton(element,ancestorClass)   
            break;
        default:
    }
})

function addButton(element,ancestorClass){
    const showPopup = document.querySelector(`${ancestorClass} .show`)
    const popup = document.querySelector(`${ancestorClass} .popup`)
    const textInput = document.querySelector(`${ancestorClass} .input`)
    const saveInput = document.querySelector(`${ancestorClass} .save`)
    const cancelInput = document.querySelector(`${ancestorClass} .cancel`)
   
    switch (element.id) {
        case showPopup.id:
            showPopup.classList.toggle("hide")
            popup.classList.toggle("hide")
            break;
        case saveInput.id:
            showPopup.classList.toggle("hide")
            popup.classList.toggle("hide")
            console.log(textInput.value)
            break;
        case cancelInput.id:
            showPopup.classList.toggle("hide")
            popup.classList.toggle("hide")
            break;
        default:
            break;
    }
}

noteSection.addEventListener("input", (event) => {
    let element = event.target
    if(element.classList.contains("input-text"))return
    
    console.log(element.value)
})

function toggleActiveNav(element){
    let siblings = element.parentElement.children;
    for(let sib of siblings) {
        sib.classList.remove('active-nav')
    }
    element.classList.add("active-nav")
}

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


