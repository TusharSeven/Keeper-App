import Zoom from "@material-ui/core/Zoom";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [isExpand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expansion() {
    setExpand(true);
  }
  return (
    <div>
      <form className="create-note">
        <input
          onClick={expansion}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {isExpand ? (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpand ? 3 : 1}
          />
        ) : null}
        <Zoom in={isExpand ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
