(()=>{"use strict";const e=(e,t)=>({lineContent:`\n        <div class="note-line">\n            <i class="fa-regular fa-circle"></i>\n            <input type="text" class="edit-text" value="${t}">\n            <input type="date" class="date">\n            <i class="fa-solid fa-trash-can"></i>\n        </div>\n    `,getPriorityColor:e=>{switch(e){case"high":return"red";case"medium":return"yellow";case"low":return"green";default:return"grey"}}}),t=e(0,"Lorem ipsum dolor sit amet"),n=e(0,"consectetur adipiscing elit");let s=`   ${t.lineContent}\n    ${n.lineContent}\n    <button id="add-note" class="show">\n        <i class="fa-solid fa-plus"></i> Add Note\n    </button>\n    <div id="input-note-popup" class="input-popup hide popup">\n        <input id="input-note" class="input-text input" type="text"/>\n        <div id="input-buttons">\n            <button id="save-input-button" class="green-button save">Save</button>\n            <button id="cancel-input-button" class="red-button cancel">Cancel</button>\n        </div>\n    </div>\n`;const c=document.querySelector("main > section"),o=(document.getElementById("notes-nav").classList.add("active-nav"),c.className="",c.classList.add("notes-section"),c.innerHTML=s,document.querySelector("section.notes-section"));console.log(o);const i=document.querySelector("main > section");function a(e,t){i.className="",i.classList.add(e),i.innerHTML=t}document.querySelector(".basic-notes-nav").addEventListener("click",(e=>{switch(function(e){let t=e.parentElement.children;for(let e of t)e.classList.remove("active-nav");e.classList.add("active-nav")}(e.target),e.target.id){case"notes-nav":a("notes-section",s);break;case"today-nav":a("today-section","\n    \n    <h1>Today</h1>\n\n");break;case"week-nav":a("today-section","\n    \n    <h1>This Week</h1>\n\n")}})),document.querySelector(".projects-nav").addEventListener("click",(e=>{!function(e,t){const n=document.querySelector(".projects-nav .show"),s=document.querySelector(".projects-nav .popup"),c=document.querySelector(".projects-nav .input"),o=document.querySelector(".projects-nav .save"),i=document.querySelector(".projects-nav .cancel");switch(e.id){case n.id:n.classList.toggle("hide"),s.classList.toggle("hide");break;case o.id:n.classList.toggle("hide"),s.classList.toggle("hide"),console.log(c.value);break;case i.id:n.classList.toggle("hide"),s.classList.toggle("hide")}}(e.target)}))})();