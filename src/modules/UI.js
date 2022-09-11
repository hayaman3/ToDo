import {notesContent} from './notes.js'

const section = document.getElementsByTagName("section")[0];


function notesUI(){
    const notes = document.getElementById("notes");
    notes.classList.add("active-nav");
    section.className = "";
    section.classList.add("notes")
    section.innerHTML = notesContent;
}

function todayUI(){

}

function weekUI(){

}

function projectsUI(){

}

const defaultUI = (() => {
    const notes = document.getElementById("notes");
    notes.classList.add("active-nav");
    section.className = "";
    section.classList.add("notes")
    section.innerHTML = notesContent;
})();

export {notesUI, todayUI, weekUI, projectsUI}
