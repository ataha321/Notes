const notes=[
    "&#127823;Pick up mom at 9:30 at Meijer!",
    "&#127848;Surprise party for Chelsea!",
    "&#127774;Planning for the summer!",
    "&#127813;&#127814;&#129361;Grocery Shopping for the weekend!",
    "&#9757;Complete CIT312's homework assignment!",
    "&#127869;Dinner with Emily at 6:30 Saturday!",
  ];
  
const highlightNoteStyles = {
  Priority: "background-color: #228B22",
  Agent: "background-color: #DC143C",
  ASAP: "background-color: #FFA500",
  Later: "background-color: #87CEFA",
};

function createNote() {
    let matchedSetNotes = $("#note p");
    let noteNumber = parseInt($("#id_noteNumberToCreate").val());
    let noteContent = $("#id_freeform").val();
    let note = $(`<p class ="noteContent">${noteContent}</p>`);
    let lastNote = matchedSetNotes.eq(noteNumber - 1);
    if (matchedSetNotes.length == 0 || noteNumber > matchedSetNotes.length) 
        note.appendTo($("#note"));
    else {  
        lastNote.before(note);
    }
}

const randomfillNote = () => {
  let rnd = Math.floor(Math.random() * notes.length);
  let newNote = notes[rnd];
  $("#id_freeform").val(newNote);
};

//Highlight Note
const highlightNote = () => {
  
  let noteNum = $("#id_highlightNote").val();
  noteNum = parseInt(noteNum);
  let highlightSelected = $("#id_highlight").val();

  let noteStylingProperty = highlightNoteStyles[highlightSelected].split(":")[0];
  console.log(noteStylingProperty);

  let noteStylingAttribute = highlightNoteStyles[highlightSelected].split(":")[1];
  console.log(noteStylingAttribute);

  let note = $("p:nth-child(" + noteNum + ")");
  note.css(noteStylingProperty, noteStylingAttribute);
};
  
  //ADD  ICON
  const addSmiley = (before) => {
    let noteNum = before
      ? $("#id_smileybefore").val()
      : $("#id_smileyafter").val();
    noteNum -= 1;
    let wantedNote = $("#note p:eq(" + noteNum + ")");
    console.log("XXX", wantedNote.text());
    if (before) $("<span>&#128540;</span>").prependTo(wantedNote);
    else $("<span>&#128540;</span>").appendTo(wantedNote);
  }

 // DETACH
let detachedNote;
const temporarilyRemove = () => {
  //Find the note to be removed
  let noteNum = $("#id_noteNumberToDetach").val();
  noteNum = parseInt(noteNum) - 1;
  let note = $("#note p:eq(" + noteNum + ")");
  detachedNote = note.detach();
};

// APPEND
const restoreNote = () => {
  $("#note").append(detachedNote);
};


// REMOVE
const removeNote = () => {
  //Find the note to be removed
  let noteNum = $("#id_noteNumberToRemove").val();
  noteNum = parseInt(noteNum) - 1;
  let note = $("#note p:eq(" + noteNum + ")");
  note.remove();
};

// APPEND
const fillAll = () => {
  notes.forEach(function (note) {
    $("#note").append($(`<p class="noteContent">${note}</p>`));
  });

};


//EMPTY
const getRidOfNote = () => {
    // Clear out all child elements from the specified container
    $("#note").empty();
  };


const animation =() => {
  $("#mysteryanimate_em").click(function () {
    $("#note")
      .fadeTo(1000, 0.5)
      .fadeTo(1000, 0.8)
      .fadeTo(1000, 1);
  });
}