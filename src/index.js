import {UI} from './modules/UI'



const notes = document.getElementById("notes");
const today = document.getElementById("today");
const week = document.getElementById("week");
const projects = document.getElementById("projects");

notes.addEventListener("click", show)
today.addEventListener("click", show)
week.addEventListener("click", show)
projects.addEventListener("click", show)


const nav = [notes,today,week,projects]

function active(element){

}


function show(e){
    e.target.classList.add("active")
    for(let i=0;i<nav.length;i++){
        if(e.target != nav[i]){
            nav[i].classList.remove("active")
        }
    }
}



UI()
