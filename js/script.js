let noteList = [];

let view = "grid"; //default view is grid-view

function saveNote(title, content) {
    let node = document.createElement('p');
    const successMessage = document.createTextNode("Note created Successfully!!");
    const errorMessage = document.createTextNode("Incorrect Entries!!");
    if (title == "" || content == "") {
        node.appendChild(errorMessage);
        document.getElementsByClassName("accordion-body")[0].appendChild(node).style.color = 'red';
    } else {
        var note = {
            'title': title,
            'content': content
        }
        node.appendChild(successMessage);
        document.getElementsByClassName("accordion-body")[0].appendChild(node).style.color = 'green';
        noteList.push(note);
        fetchNotes();
    }
}

function deleteNote() {

}

function clearFields() {

}

function fetchNotes() {
    if (noteList.length == 1) {
        var note = noteList[0];
    } else {
        var note = noteList[noteList.length - 1];
    }
    let div = document.createElement('div');
    div.setAttribute("class", "noteCard")
    let paragraph = document.querySelector(".container");
    paragraph.appendChild(div);
    let noteTitle = document.createElement('h2');
    let noteTitleNode = document.createTextNode(note.title);
    noteTitle.appendChild(noteTitleNode);
    div.appendChild(noteTitle);
    let p = document.createElement('p');
    let noteContent = document.createTextNode(note.content);
    p.appendChild(noteContent);
    div.appendChild(p);
}

function loadNoteData() {

}

function updateNoteData(note) {

}

function createNoteCard(note) {

}

function toggleView() {

}
