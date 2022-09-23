import {notesUI, todayUI, weekUI, projectsUI,changeSection} from './modules/UI'

// import {notesContent} from './modules/notes.js'


const projectsNav = document.querySelector(".projects-nav")


projectsNav.addEventListener("click", (event) =>{
    let element = event.target
    let ancestorClass = ".projects-nav"
    addButton(element,ancestorClass)    
})




function addButton(element,ancestorClass){
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



// function toggleActiveNav(element){
//     let siblings = element.parentElement.children;
//     for(let sib of siblings) {
//         sib.classList.remove('active-nav')
//     }
//     element.classList.add("active-nav")
// }

// function iTagEvents(element){
//     switch(element.className){
//         case "fa-regular fa-circle-check":
//             element.nextElementSibling.classList.remove("checked-note");
//             element.className = "";
//             element.classList.add("fa-regular","fa-circle");
//             break;
//         case "fa-regular fa-circle":
//             element.nextElementSibling.classList.add("checked-note");
//             element.className = "";
//             element.classList.add("fa-regular","fa-circle-check");
//             break;
//         case "fa-solid fa-trash-can":
//             element.parentElement.remove();
//             //remove from storage
//         default:
//             console.log("switch at iTagEvents index.js")
//     }
// }
