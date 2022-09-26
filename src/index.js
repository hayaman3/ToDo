import './assets/style.css'
import './assets/fonts-6/css/all.css'


// import {notesUI, todayUI, weekUI, projectsUI,} from './modules/UI'

import {notesSectionContent} from './modules/notes.js'
import {todayContent} from './modules/today.js'
import {weekContent} from './modules/week.js'
import {projectsContent} from './modules/projects.js'

const section = document.querySelector("main > section");

const basicNotesNav = document.querySelector(".basic-notes-nav")

basicNotesNav.addEventListener("click", (event) =>{
    toggleActiveNav(event.target);
    switch (event.target.id) {
        case "notes-nav":
            changeSection("notes-section",notesContent)
            break;
        case "today-nav":
            changeSection("today-section",todayContent)
            break;
        case "week-nav":
            changeSection("today-section",weekContent)
            break;
        default:
            break;
    }
})

function changeSection(sectionClass,sectionContent){
    section.className = "";
    section.classList.add(sectionClass)
    section.innerHTML = sectionContent;
}

function toggleActiveNav(element){
    let siblings = element.parentElement.children;
    for(let sib of siblings) {
        sib.classList.remove('active-nav')
    }
    element.classList.add("active-nav")
}
const projectsNav = document.querySelector(".projects-nav")

projectsNav.addEventListener("click", (event) =>{
    let element = event.target
    let ancestorClass = ".projects-nav"
    console.log(element.id)
    if(element.id==="add-project"){
        showInputForm(element,ancestorClass) 
    }
})

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
            // 
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