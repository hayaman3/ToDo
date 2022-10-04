const head = `<h1>Projects</h1>`;

const inputPopup = `<div>
    <input type="text"/>
    <div>
        <button>Add</button>
        <button>Cancel</button>
    </div>
</div>`;

let projectsSectionContent = `
    ${head}

    ${inputPopup}
`;
const projectsNav = document.querySelector(".projects-nav");

projectsNav.addEventListener("click", (event) => {
  let element = event.target;
  let ancestorClass = ".projects-nav";
  if (element.id === "add-project") {
    showInputForm(element, ancestorClass);
  }
});

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
      //
      console.log(textInput.value);
      break;
    case cancelInput.id:
      showPopup.classList.toggle("hide");
      popup.classList.toggle("hide");
      break;
    default:
      break;
  }
}

export { projectsSectionContent };
