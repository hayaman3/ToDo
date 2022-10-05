const head = `<h1>Projects</h1>`;

const inputPopup = `<div>
    <input type="text" />
    <div>
        <button>Add</button>
        <button>Cancel</button>
    </div>
</div>`;

let projectsSectionContent = `
    ${head}

    ${inputPopup}
`;
const ancestorClass = "#add-project-handler"

const showPopupButton = document.querySelector(`${ancestorClass} .show`);
const popup = document.querySelector(`${ancestorClass} .popup`);
const textInput = document.querySelector(`${ancestorClass} .input`);
const saveTextInputButton = document.querySelector(`${ancestorClass} .save`);
const exitPopupButton = document.querySelector(`${ancestorClass} .cancel`)

showPopupButton.addEventListener("click", (event) => {
    showPopupButton.classList.toggle("hide");
    popup.classList.toggle("hide");
});

saveTextInputButton.addEventListener("click", (event) => {
    showPopupButton.classList.toggle("hide");
    popup.classList.toggle("hide");
    // saveTextInput(textInput.value);
    // textInput.value = "";
    console.log(textInput.value)
});

exitPopupButton.addEventListener("click", (event) => {
    showPopupButton.classList.toggle("hide");
    popup.classList.toggle("hide");
    textInput.value = "";
});

export { projectsSectionContent };
