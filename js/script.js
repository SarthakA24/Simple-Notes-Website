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

function fetchNotes() {
    let request = new XMLHttpRequest();
    request.onload = () => {
        let notesData = JSON.parse(request.response);
        Object.values(notesData).forEach(note => {
            let div = document.createElement("div");
            div.setAttribute("id", "noteCard");
            var notesContainer = document.querySelector(".container");
            noteList.push(note);
            notesContainer.appendChild(div).innerHTML =
                `
                    <div class="noteId" style="display:none;">${note.id}</div>
                    <div class="noteTitle">Note Title - ${note.title}</div>
                    <br>
                    <div class="noteContent">Note Contents - ${note.content}</div>
                    <br>
                    <button class="btn" onclick="deleteNote(this)">Delete Note</button>
                `;
        });
    }
    request.open("GET", "http://localhost:3001/notes");
    request.send();
}

function toggleView() {
    let toggleStyle = document.querySelector("#note-container");
    if (toggleStyle.style.display == 'flex') {
        toggleStyle.style.display = 'grid'
    } else {
        toggleStyle.style.display = 'flex';
    }
}
