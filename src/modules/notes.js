const contentConstructor = (priority, text) => {
    const getPriorityColor = (priority) => {
        switch(priority) {
            case "high":
                return "red"
                break;
            case "medium":
                return "yellow"
                break;
            case "low":
                return "green"
                break;
            default:
                return "grey"
          }
    }
    const lineContent = `
        <p class="note-line">
            <i class="fa-regular fa-circle"></i>
            <span id="note-detail" contenteditable="true">${text}</span>
            <input type="date" class="date">
            <i class="fa-solid fa-trash-can"></i>
        </p>
    `
    return { lineContent, getPriorityColor};
};

const example1 = contentConstructor("high", "Lorem ipsum dolor sit amet");
const example2 = contentConstructor("medium", "consectetur adipiscing elit")

// loop through saved data
// function notesContent(){
    
// }

let notesContent =`
    ${example1.lineContent}
    ${example2.lineContent}
    <button id="add-note"><i class="fa-solid fa-plus"></i> Add Note</button>
`

const form =`
    <form>
        <input type="radio" id="html" name="priority" value="high">
        <label for="high">high</label>
        <input type="radio" id="css" name="priority" value="medium">
        <label for="medium">medium/label>
        <input type="radio" id="javascript" name="priority" value="low">
        <label for="low">low</label>
    </form>
`

export {notesContent}

/* <p class="note-detail">
<i class="fa-regular fa-circle-check"></i></i>
<span style="text-decoration: line-through;">  Details</span>
<input type="date" class="date">
<button><i class="fa-solid fa-trash-can"></i></button>
</p> */