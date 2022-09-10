import {notesUI} from './modules/UI'

const notes = document.getElementById("notes");
const today = document.getElementById("today");
const week = document.getElementById("week");
const projects = document.getElementById("projects");

const nav = [notes,today,week,projects]

document.body.addEventListener("click", (e) => {
    let parentElement = e.target.parentElement.tagName.toLowerCase()

    switch(parentElement) {
        case "nav":
            showTab(e)
            break;
        case "p":
            notesEvents(e)
            break;
        default:
            console.log("alert")
      }
});

function showTab(e){
    toggleActive(e)
}

function notesEvents(e){
    let element = e.target.tagName.toLowerCase();
    switch(element){
        case "i":
            console.log(e.target)
            e.target.className = "";
            e.target.classList.add("fa-regular","fa-circle-check");
            break;
        case "span":
            break;
        default:
            console.log("alert2")
    }
}

function toggleActive(e){
    e.target.classList.add("active")
    nav.forEach(element => {if(e.target != element){
        element.classList.remove("active")
    }})
}


// UI()