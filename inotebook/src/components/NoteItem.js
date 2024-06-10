import React, { useContext } from 'react'
import noteContext from '../context/Notes/NoteContext';


const NoteItem = (props) => {
    const context =useContext(noteContext)
    const {note, updateNote} =props;
  return (
    <div className="col-md-3">
    <div class="card my-4" >
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
    <p class="card-text">{note.description}</p>
    <i class="fa-solid fa-trash mx-2" onClick={()=>{
        context.deleteNote(note._id);
        props.showAlert("Note Deleted Successfully","success")
    }}></i>
    <i class="fa-solid fa-pen-nib mx-2" onClick={()=>{
      updateNote(note);
      
    }}></i>
    
  </div>
</div>
</div>
  )
}

export default NoteItem
