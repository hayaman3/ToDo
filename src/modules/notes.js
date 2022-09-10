const form = `
    <form>
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">JavaScript</label>
    </form>
`

let notesContent = `
    <p class="note-line">
        <i class="fa-regular fa-circle"></i>
        <span id="note-detail">  Details</span>
        <input type="date" class="date">
        <button class="delete-note"><i class="fa-solid fa-trash-can"></i></button>
    </p>
        <p class="note-line">
        <i class="fa-regular fa-circle"></i>
        <span id="note-detail">  Details2</span>
        <input type="date" class="date">
        <button class="delete-note"><i class="fa-solid fa-trash-can"></i></button>
    </p>

    <button id="add-note"><i class="fa-solid fa-plus"></i> Add Note</button>
`

// function notesUI(){

// }

export {notesContent}

/* <p class="note-detail">
<i class="fa-regular fa-circle-check"></i></i>
<span style="text-decoration: line-through;">  Details</span>
<input type="date" class="date">
<button><i class="fa-solid fa-trash-can"></i></button>
</p> */