import React, { useState } from "react";
import { useHistory } from "react-router";

function SearchAccordion({ show, handleShow }) {
  const history = useHistory();
  const [input, setInput] = useState("");
  const handleAction = () => {
    history.push(`/search/name/${input}`);
    handleShow()
    setInput('')
  };
  return (
    <div className={`panel ${show && "active"}`}>
      <div className={`search-accordion`}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleAction}>Buscar</button>
      </div>
    </div>
  );
}

export default SearchAccordion;
