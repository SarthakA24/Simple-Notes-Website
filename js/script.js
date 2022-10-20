let noteList = [];

let view = "grid"; //default view is grid-view

function saveNote(title, content) {
    if (noteList.length == 0) {
        var noteId = 1;
    } else {
        var noteId = noteList[noteList.length - 1].id + 1;
    }
    var noteTitle = document.getElementById("title").value;
    var noteContent = document.getElementById("content").value;
    if (noteTitle == "" || noteContent == "") {
        alert("Fields should not be left blank!!");
    } else {
        let noteObject = {
            "id": noteId,
            "title": noteTitle,
            "content": noteContent
        }
        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3001/notes");
        request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(noteObject));
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
    div.setAttribute("class", "noteCard");
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
    addDeleteButton();
}

function addDeleteButton() {
    const buttonNodes = document.querySelectorAll(".noteCard");
    if (noteList.length == 1) {
        var buttonNode = buttonNodes[0];
    } else {
        var buttonNode = buttonNodes[buttonNodes.length-1];
    }
    let button = document.createElement('button');
    button.setAttribute("class","btn");
    buttonNode.appendChild(button);
    let buttonText = document.createTextNode("Delete Note");
    button.appendChild(buttonText);
}

function loadNoteData() {

}

function updateNoteData(note) {

}

function createNoteCard(note) {

}

function toggleView() {
    let toggleStyle = document.querySelector("#note-container");
    if (toggleStyle.style.display == 'flex') {
        toggleStyle.style.display = 'grid'
    } else {
        toggleStyle.style.display = 'flex';
    }
}
