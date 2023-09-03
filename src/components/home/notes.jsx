import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, removeNote } from '../../noteSlice';


function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const [inputValue, setInputValue] = useState('');

  const handleAddNote = () => {
    if (inputValue) {
      dispatch(addNote({ id: Date.now(), text: inputValue }));
      setInputValue('');
    }
  };

  const handleRemoveNote = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes?.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleRemoveNote(note.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </>
  );
}

export default Notes;