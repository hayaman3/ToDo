import {notesUI, todayUI, weekUI, projectsUI} from './modules/UI'


//refractor
const span = document.querySelector("span");
const inputPopup = document.getElementById("input-note-popup")
const addNote = document.getElementById("add-note")

const noteSection = document.querySelector("section.notes-section")

const notesNav = document.getElementById("notes-nav")
const todayNav = document.getElementById("today-nav")
const weekNav = document.getElementById("week-nav")

notesNav.addEventListener("click", (e) => {
    toggleActiveNav(e.target);
    notesUI();
})

todayNav.addEventListener("click", (e) => {
    toggleActiveNav(e.target);
    todayUI();
})

weekNav.addEventListener("click", (e) => {
    toggleActiveNav(e.target);
    weekUI();
})

noteSection.addEventListener("click", (event) => {
    let element = event.target;
    let elementTag = element.tagName.toLowerCase()
    console.log(elementTag)
    // switch(elementTag){
    //     case "i":
    //         iTagEvents(element)
    //         break;
    //     case "button":
    //     default:
    // }
})

noteSection.addEventListener("input", (event) => {
    let element = event.target

    console.log(element.value)
})



function notesEvents(element){
    let elementTag = element.tagName.toLowerCase();
    console.log(element)
    switch(elementTag){
        case "i":
            iTagEvents(element)
            break;
        case "input":
            changeDate(element);
            break;
        case "input":
            changeDate(element);
            break;
        default:
            console.log("switch at notesEvent index.js")
    }
}


//     if(element.id=="add-project"){
//         //pop input prompt

//     }

// })



// document.body.addEventListener("click", (e) => {
//     let element = e.target
//     let classList = element.classList
//     



//     if(element.id=="add-project"){
//         const but = document.createElement("button")
//         but.innerText = "This";
//         const projdiv = document.getElementsByClassName("projects-nav")[0]
//         projdiv.appendChild(but);
//     }

//     if(element.id=="add-note"){
//         element.classList.add("hide");
//         // className to classList
//         inputPopup.className = "";
//         inputPopup.classList.add("flex")
//     }
//     if(element.id=="add-input-button"){
//         console.log("save and add")
//     }
//     if(element.id=="cancel-input-button"){
//         inputPopup.className = "";
//         inputPopup.classList.add("hide")
//         addNote.className = "";
//     }
// });



function toggleActiveNav(element){
    let siblings = element.parentElement.children;
    for(let sib of siblings) {
        sib.classList.remove('active-nav')
    }
    element.classList.add("active-nav")
}


function changeDate(element){
    console.log(element)
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


