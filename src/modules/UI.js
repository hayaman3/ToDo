import {notesContent} from './notes.js'

const section = document.getElementsByTagName("section")[0];


function notesUI(){
    section.className = "";
    section.classList.add("notes")
    section.innerHTML = notesContent;
      // const p = document.createElement("p");
    // p.classList.add("note-detail")

}


const defaultUI = (() => {
    const notes = document.getElementById("notes");
    notes.classList.add("active");
    section.className = "";
    section.classList.add("notes")
    section.innerHTML = notesContent;
})();

export {notesUI}

// let notesContent = `
//     <p class="note-detail">
//         <button><i class="fa-regular fa-circle"></button></i>
//         <span>  Details</span>
//         <input type="date" class="date">
//         <button class="delete-note"><i class="fa-solid fa-trash-can"></i></button>
//     </p>

//     <button id="add-note"><i class="fa-solid fa-plus"></i> Add Note</button>
// `