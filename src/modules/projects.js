const head = 
`<h1>Projects</h1>`

const addProjectButton = 
    `<button id="add-project">
        <i class="fa-solid fa-plus"></i> Add Project
    </button>`

const inputPopup = 
`<div>
    <input type="text"/>
    <div>
        <button>Add</button>
        <button>Cancel</button>
    </div>
</div>`

let projectsSectionContent =`
    ${head}
    
    ${inputPopup}
`

let projectsNav =
`
${addProjectButton}
`

export {projectsSectionContent,projectsNav}