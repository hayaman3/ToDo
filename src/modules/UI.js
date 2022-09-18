import {notesContent} from './notes.js'
import {todayContent} from './today.js'
import {weekContent} from './week.js'
import {projectsContent} from './projects.js'

const section = document.getElementsByTagName("section")[0];


function notesUI(){
    section.className = "";
    section.classList.add("notes-section")
    section.innerHTML = notesContent;
}

function todayUI(){
    section.className = "";
    section.classList.add("today-section")
    section.innerHTML = todayContent;
}

function weekUI(){
    section.className = "";
    section.classList.add("today-section")
    section.innerHTML = weekContent;
}

function projectsUI(){
    section.className = "";
    section.classList.add("projects-section")
    section.innerHTML = projectsContent;
}

const defaultUI = (() => {
    const notes = document.getElementById("notes-nav");
    notes.classList.add("active-nav");
    section.className = "";
    section.classList.add("notes-section")
    section.innerHTML = notesContent;
})();

export {notesUI, todayUI, weekUI, projectsUI}
