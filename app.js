console.log('Welcome to notes app. This is app.js');
showNotes();

// If user adds a note, add it to the localStorage
let addNote = document.getElementById('submit-btn');
let searchTxt = document.getElementById('searchTxt');
let searchBtn = document.getElementById('seach-btn');

addNote.addEventListener('click', (e) => {
    let addTxt = document.getElementById('add-txt');

    // console.log(addTxt.value);
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    console.log(notesObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = '';

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }

    html = '';
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard mx-2 my-2 card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">
          ${element}
        </p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>`
    })

    let notesElm = document.getElementById('notes');

    if (notesObj.length !== 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add A Note" section above to add notes.`
    }
}

function deleteNote(index) {
    console.log('deleting this particular note');
    // when the user clicks on the delete note button: the following action takes place:
    // pop that message from notesObj and also set the new localStorage and then  invoke the showNotes func()
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    console.log(notesObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

searchTxt.addEventListener('input', () => {
    let inputVal = searchTxt.value.toLowerCase();

    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        console.log(typeof cardTxt);

        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})

searchBtn.addEventListener('click', () => {
    let inputVal = searchTxt.value.toLowerCase();

    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        console.log(typeof cardTxt);

        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})