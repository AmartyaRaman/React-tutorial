import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);

  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to edit");


  return (
    <Draggable nodeRef={nodeRef}>
      {editMode ? 
      <input value={val} onChange={e => setVal(e.target.value)} onDoubleClick={e => setEditMode(false)}/> 
      : 
      <h1 ref={nodeRef} onDoubleClick={e => setEditMode(true)}>{val}</h1>}
    </Draggable>
  );
};

export default Text;
