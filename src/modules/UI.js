const content = document.getElementById("main")
const element = document.createElement("div")

function UI(){
    // element.className = "";
    // element.classList.add("shop")
    let trial = new Date();
    element.innerHTML = `
        ${trial}
    `;
    content.appendChild(element)
}
export{ UI }