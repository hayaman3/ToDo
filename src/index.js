import {notesUI, todayUI, weekUI, projectsUI} from './modules/UI'

const span = document.querySelector("span");

document.body.addEventListener("click", (e) => {
    let element = e.target
    let parentElementTag = element.parentElement.tagName.toLowerCase()

    switch(parentElementTag) {
        case "nav":
            showTab(element)
            break;
        case "p":
            notesEvents(element)
            break;
        default:
            console.log("alert")
      }
});

// change to more specific selector 
span.addEventListener("focusout", (event) => {
        console.log(event.target.innerText)
})

function showTab(e){
    toggleActive(e)
}

function toggleActive(element){
    let siblings = element.parentElement.children;
    for(let sib of siblings) {
        sib.classList.remove('active-nav')
    }
    element.classList.add("active-nav")
}

function notesEvents(element){
    let elementTag = element.tagName.toLowerCase();

    switch(elementTag){
        case "i":
            iTagEvents(element)
            break;
        case "span":
            break;
        default:
            console.log("switch at notesEvent index.js")
    }
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


