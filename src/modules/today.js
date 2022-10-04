function getTodayContent() {
  let noteLine = `<h1>Today</h1>`;

  if (localStorage.length == 0) return "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let value = localStorage.getItem(key).split(",");

    if (typeof value[1] == "undefined") value[1] = "";

    let date = new Date(value[1]);

    if (isToday(date)) {
      const lineTemplate = `
        <div class="note-line" id=${key}>
            <i class="fa-regular fa-circle"></i>
            <input type="text" class="edit-text" value="${value[0]}">
            <input type="date" class="date" value="${value[1]}">
            <i class="fa-solid fa-trash-can"></i>
        </div>
      `;
      noteLine = noteLine + lineTemplate;
    }
  }
  return noteLine;
}

const isToday = (date) => new Date().toDateString() === date.toDateString();

export { getTodayContent };

// let today = new Date()
// console.log(today)
// today = today.toDateString()
// console.log(today)
// console.log(new Date(element.value).toDateString()==today)

// const noteSection = document.querySelector("section.notes-section");

// noteSection.addEventListener("click", (event) => {
// let element = event.target;
// let elementTag = element.tagName.toLowerCase();
// switch (elementTag) {
//     case "i":
//     iTagEvents(element);
//     break;
//     case "button":
//     const ancestorClass = ".notes-section";
//     showInputForm(element, ancestorClass);
//     break;
//     default:
// }
// });

// noteSection.addEventListener("change", (event) => {
// let element = event.target;
// if(element.classList.contains("input-text"))return;
// if(element.classList.contains("edit-text")){
//     //
//     console.log(element.value + " edit");
// }
// if(element.classList.contains("date")) {
//     const key = element.parentElement.id
//     let value=""
//     if(!element.value){
//     value = element.previousElementSibling.value
//     }else{
//     value = element.previousElementSibling.value+","+element.value
//     }
//     localStorage.setItem(key,value)
// }
// });
