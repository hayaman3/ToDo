import {notesContent} from './notes.js'
import {todayContent} from './today.js'
import {weekContent} from './week.js'
import {projectsContent} from './projects.js'

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

function projectsUI(){
    section.className = "";
    section.classList.add("projects-section")
    section.innerHTML = projectsContent;
}



// export {notesUI, todayUI, weekUI, projectsUI,changeSection}
// export {changeSection}
