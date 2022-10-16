let noteList = [];

let view = "grid"; //default view is grid-view

function saveNote(title, content) {
    var note = {
        'title': title,
        'content': content
    }
    var length = noteList.push(note);
    console.log(length);
    let node = document.createElement('p');
    const successMessage = document.createTextNode("Note created Successfully!!");
    node.appendChild(successMessage);
    document.getElementsByClassName("accordion-body")[0].appendChild(node).style.color='green';
}

function deleteNote() {
    
}

function clearFields() {
    
}

function fetchNotes() {
    
}

function loadNoteData() {
    
}

function updateNoteData(note) {
    
}

function createNoteCard(note) {
    
}

function toggleView() {
    
}
