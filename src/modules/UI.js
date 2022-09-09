import {notesContent} from './notes.js'

const section = document.getElementsByTagName("section")[0];

// const notes = document.getElementById("notes");
// const today = document.getElementById("today");
// const week = document.getElementById("week");
// const projects = document.getElementById("rojects");

// notes.addEventListener("click", showNotes)

function UI(){
    section.className = "";
    section.classList.add("notes")
    section.innerHTML = notesContent;
}

// function showNotes(){

// }



export {UI}