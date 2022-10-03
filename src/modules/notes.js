const section = document.querySelector("main > section");

const note = (() => {
  section.classList.add("notes-section");

  const addNoteButton = `
            <button id="add-note" class="show">
                <i class="fa-solid fa-plus"></i> Add Note
            </button>
        `;
  const inputPopup = 
    `
      <div id="input-note-popup" class="input-popup hide popup">
          <input id="input-note" class="input-text input" type="text"/>
          <div id="input-buttons">
              <button id="save-input-button" class="green-button save">Save</button>
              <button id="cancel-input-button" class="red-button cancel">Cancel</button>
          </div>
      </div>
    `

  function loopLocalStorage(){
    let noteLine = ``
    if(localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let value = localStorage.getItem(key)
        value = value.split(",")
        if(typeof value[1]=="undefined")value[1]=""
        
        if(key.includes("note")){
          //if text is an array or not change date value="2018-07-22"
          const lineTemplate =
          `
            <div class="note-line" id=${key}>
                <i class="fa-regular fa-circle"></i>
                <input type="text" class="edit-text" value="${value[0]}">
                <input type="date" class="date" value="${value[1]}">
                <i class="fa-solid fa-trash-can"></i>
            </div>
          `
          noteLine = noteLine + lineTemplate
        }
      }
      return noteLine 
    }else{
      return ""
    }

  };


  let noteContent = `
    ${loopLocalStorage()}
    ${addNoteButton}
    ${inputPopup}
  `;

  section.innerHTML = noteContent;

  return {
    // htmlContent,
    noteContent
  };
})();


const noteSection = document.querySelector("section.notes-section");

noteSection.addEventListener("click", (event) => {
  let element = event.target;
  let elementTag = element.tagName.toLowerCase();
  switch (elementTag) {
    case "i":
      iTagEvents(element);
      break;
    case "button":
      const ancestorClass = ".notes-section";
      showInputForm(element, ancestorClass);
      break;
    default:
  }
});

noteSection.addEventListener("change", (event) => {
  let element = event.target;
  if(element.classList.contains("input-text"))return;
  if(element.classList.contains("edit-text")){
    //
    console.log(element.value + " edit");
  }
  if(element.classList.contains("date")) {
    const key = element.parentElement.id
    let value=""
    if(!element.value){
      value = element.previousElementSibling.value
    }else{
      value = element.previousElementSibling.value+","+element.value
    }
    localStorage.setItem(key,value)
  }
});

function iTagEvents(element) {
  switch (element.className) {
    case "fa-regular fa-circle-check":
      element.nextElementSibling.classList.remove("checked-note");
      element.className = "";
      element.classList.add("fa-regular", "fa-circle");
      break;
    case "fa-regular fa-circle":
      element.nextElementSibling.classList.add("checked-note");
      element.className = "";
      element.classList.add("fa-regular", "fa-circle-check");
      break;
    case "fa-solid fa-trash-can":
      deleteFromLocalStorage(element)
      element.parentElement.remove();
      break;
    default:
      console.log("switch at iTagEvents index.js");
  }
}

function deleteFromLocalStorage(element){
  let key = element.parentElement.id
  localStorage.removeItem(key)
}

//change name? and be used by nav and projects-nav
function showInputForm(element, ancestorClass) {
  const showPopup = document.querySelector(`${ancestorClass} .show`);
  const popup = document.querySelector(`${ancestorClass} .popup`);
  const textInput = document.querySelector(`${ancestorClass} .input`);
  const saveInput = document.querySelector(`${ancestorClass} .save`);
  const cancelInput = document.querySelector(`${ancestorClass} .cancel`);

  switch (element.id) {
    case showPopup.id:
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      break;
    case saveInput.id:
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      saveTextInput(textInput.value);
      textInput.value = ''
      break;
    case cancelInput.id:
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      break;
    default:
      break;
  }
}

function saveTextInput(inputValue) {
  let key = idGenerator("note")
  localStorage.setItem(key,inputValue)

  let newNodeContent = 
    `  
      <i class="fa-regular fa-circle"></i>
      <input type="text" class="edit-text" value="${inputValue}">
      <input type="date" class="date">
      <i class="fa-solid fa-trash-can"></i>
    `
  let newNode = document.createElement("div")
  newNode.classList.add("note-line")
  newNode.id = key
  newNode.innerHTML = newNodeContent

  const button = document.getElementById("add-note");
  const parentDiv = button.parentNode
  parentDiv.insertBefore(newNode, button);

}


const idGenerator = (key) => {
  let date = new Date();
  return key+date.getTime();
}

let notesSectionContent = note.noteContent;
export { notesSectionContent };
