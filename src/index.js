import {notesUI, todayUI, weekUI, projectsUI} from './modules/UI'


//refractor
const span = document.querySelector("span");
const inputPopup = document.getElementById("input-note-popup")
const addNote = document.getElementById("add-note")


const nav = document.querySelector("nav")
const section = document.querySelector("section")

nav.children[0].addEventListener("click", (e) => {
    showTab(e.target)
    toggleActiveSection(e.target)
})

nav.children[2].addEventListener("click", (e) => {
    let element = e.target
    if(element.id=="add-project"){
        const but = document.createElement("button")
        but.innerText = "This";
        const projdiv = document.getElementsByClassName("projects-nav")[0]
        projdiv.appendChild(but);
    }
    console.log(element.innerText)
})
// nav.addEventListener("click", (e) => {
//     let element = e.target;
//     let classList = element.classList;
//     let first = element.firstElementChild
//     console.log(element.firstElementChild)
//     console.log(element.children[0])
//     // switch (key) {
//     //     case value:
            
//     //         break;
    
//     //     default:
//     //         break;
//     // }
//     // change 
//     if(classList.contains("note-nav-button")){
//         showTab(element)
//         toggleActiveSection(element)
//     }


//     if(element.id=="add-project"){
//         //pop input prompt

//     }

// })

section.addEventListener("click", (e) => {
    let element = e.target;
    // let classList = element.classList;


    notesEvents(element)

})

// document.body.addEventListener("click", (e) => {
//     let element = e.target
//     let classList = element.classList
//     let parentElementTag = element.parentElement.tagName.toLowerCase()



//     if(element.id=="add-project"){
//         const but = document.createElement("button")
//         but.innerText = "This";
//         const projdiv = document.getElementsByClassName("projects-nav")[0]
//         projdiv.appendChild(but);
//     }
//     switch(parentElementTag){
//         case "p":
//             notesEvents(element)
//             break;
//         default:
//     }
//     if(element.id=="add-note"){
//         element.classList.add("hide");
//         // className to classList
//         inputPopup.className = "";
//         inputPopup.classList.add("show")
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


// change to more specific selector 
span.addEventListener("focusout", (event) => {
        console.log(event.target.innerText)
})

function showTab(e){
    toggleActiveNav(e)
}

function toggleActiveNav(element){
    let siblings = element.parentElement.children;
    for(let sib of siblings) {
        sib.classList.remove('active-nav')
    }
    element.classList.add("active-nav")
}

function toggleActiveSection(element){
    console.log(element)
    switch(element.id){
        case "notes-nav":
            notesUI()
            break
        case "today-nav":
            todayUI()
            break
        case "week-nav":
            weekUI()
            break
        case "projects-nav":
            projectsUI()
            break
        default:
            console.log("switch at toggleActiveSection")
    }
}


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


