import React, { useContext, useState } from 'react'
import noteContext from '../context/Notes/NoteContext'
const AddNote = (props) => {
    const context =useContext(noteContext)
    const [note,setNote]=useState({title:"",description:"",tag:""})

    const handleChange=(event)=>{
        setNote({...note,[event.target.name]:event.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault();
        context.addNote(note.title,note.description,note.tag)
        props.showAlert("Note added succesfully","success")
        setNote({title:"",description:"",tag:""})
      
    }

  return (
    <div className="container my-3">
        <h2>ADD A NOTE</h2>
        <div className="container my-3">
        <div class="mb-3">
  <label for="title" class="form-label">Title</label>
  <input type="text" class="form-control" id="title" name="title" value={note.title} onChange={handleChange} placeholder="Add your Title" minLength={3} required/>
</div>
<div class="mb-3">
  <label for="tag" class="form-label">Tag</label>
  <input type="text" class="form-control" id="tag" name="tag" value={note.tag} onChange={handleChange} placeholder="Add your Tag"  required/>
</div>
<div class="mb-3">
  <label for="description" class="form-label">Example textarea</label>
  <textarea class="form-control" id="description" name="description" value={note.description} onChange={handleChange}  rows="3" minLength={3} required></textarea>
</div>
<button type="submit" disabled={note.title.length<3 || note.description.length<3} class="btn btn-primary" onClick={handleClick}>Add Note</button>
</div>
</div>
  )
}

export default AddNote
