(()=>{"use strict";const e=e=>({lineContent:`\n        <div class="note-line">\n            <i class="fa-regular fa-circle"></i>\n            <input type="text" class="edit-text" value="${e}">\n            <input type="date" class="date">\n            <i class="fa-solid fa-trash-can"></i>\n        </div>\n    `});e("Lorem ipsum dolor sit amet"),e("consectetur adipiscing elit");let t='   \n    \n    <button id="add-note" class="show">\n        <i class="fa-solid fa-plus"></i> Add Note\n    </button>\n    <div id="input-note-popup" class="input-popup hide popup">\n        <input id="input-note" class="input-text input" type="text"/>\n        <div id="input-buttons">\n            <button id="save-input-button" class="green-button save">Save</button>\n            <button id="cancel-input-button" class="red-button cancel">Cancel</button>\n        </div>\n    </div>\n';const s=document.querySelector("main > section"),n=(document.getElementById("notes-nav").classList.add("active-nav"),s.className="",s.classList.add("notes-section"),s.innerHTML=t,document.querySelector("section.notes-section"));n.addEventListener("click",(e=>{let t=e.target;switch(t.tagName.toLowerCase()){case"i":!function(e){switch(e.className){case"fa-regular fa-circle-check":e.nextElementSibling.classList.remove("checked-note"),e.className="",e.classList.add("fa-regular","fa-circle");break;case"fa-regular fa-circle":e.nextElementSibling.classList.add("checked-note"),e.className="",e.classList.add("fa-regular","fa-circle-check");break;case"fa-solid fa-trash-can":e.parentElement.remove();default:console.log("switch at iTagEvents index.js")}}(t);break;case"button":!function(e,t){const s=document.querySelector(".notes-section .show"),n=document.querySelector(".notes-section .popup"),c=document.querySelector(".notes-section .input"),a=document.querySelector(".notes-section .save"),o=document.querySelector(".notes-section .cancel");switch(e.id){case s.id:s.classList.toggle("hide"),n.classList.toggle("hide");break;case a.id:s.classList.toggle("hide"),n.classList.toggle("hide"),function(e){let t=document.querySelector(".notes-section").childElementCount-1;localStorage.setItem(t,e)}(c.value);break;case o.id:s.classList.toggle("hide"),n.classList.toggle("hide")}}(t)}})),n.addEventListener("change",(e=>{let t=e.target;t.classList.contains("input-text")||(t.classList.contains("edit-text")&&console.log(t.value+" edit"),t.classList.contains("date")&&console.log(t.value+" date"))}));const c=document.querySelector("main > section");function a(e,t){c.className="",c.classList.add(e),c.innerHTML=t}document.querySelector(".basic-notes-nav").addEventListener("click",(e=>{switch(function(e){let t=e.parentElement.children;for(let e of t)e.classList.remove("active-nav");e.classList.add("active-nav")}(e.target),e.target.id){case"notes-nav":a("notes-section",t);break;case"today-nav":a("today-section","\n    \n    <h1>Today</h1>\n\n");break;case"week-nav":a("today-section","\n    \n    <h1>This Week</h1>\n\n")}})),document.querySelector(".projects-nav").addEventListener("click",(e=>{let t=e.target;console.log(t.id),"add-project"===t.id&&function(e,t){const s=document.querySelector(".projects-nav .show"),n=document.querySelector(".projects-nav .popup"),c=document.querySelector(".projects-nav .input"),a=document.querySelector(".projects-nav .save"),o=document.querySelector(".projects-nav .cancel");switch(e.id){case s.id:s.classList.toggle("hide"),n.classList.toggle("hide");break;case a.id:s.classList.toggle("hide"),n.classList.toggle("hide"),console.log(c.value);break;case o.id:s.classList.toggle("hide"),n.classList.toggle("hide")}}(t)}))})();