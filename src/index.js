import {notesUI, todayUI, weekUI, projectsUI} from './modules/UI'


//refractor
const span = document.querySelector("span");
const inputPopup = document.getElementById("input-note-popup")
const addNote = document.getElementById("add-note")


const nav = document.querySelector("nav")
const section = document.querySelector("section")

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


// const nav2 = document.querySelector(".basic-notes-nav")
// nav2.addEventListener("click", (e) => {
//         // showTab(e.target)
//         // toggleActiveSection(e.target)
//         console.log(e.target)
//     })
// nav.children[0].addEventListener("click", (e) => {
//     showTab(e.target)
//     toggleActiveSection(e.target)
// })

// nav.children[2].addEventListener("click", (e) => {
//     let element = e.target
//     if(element.id=="add-project"){
//         const but = document.createElement("button")
//         but.innerText = "This";
//         const projdiv = document.getElementsByClassName("projects-nav")[0]
//         projdiv.appendChild(but);
//     }
//     console.log(element.innerText)
// })
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


function toggleActiveNav(element){
    let siblings = element.parentElement.children;
    for(let sib of siblings) {
        sib.classList.remove('active-nav')
    }
    element.classList.add("active-nav")
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


