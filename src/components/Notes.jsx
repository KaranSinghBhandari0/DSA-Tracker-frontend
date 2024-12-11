import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function Notes() {
  const { toogleNotes, setToogleNotes, quesId, prevData, saveNotes } = useContext(UserContext);
  const [formData, setFormData] = useState("");

  useEffect(() => {
    setFormData(prevData || "");
  }, [prevData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNotes(quesId, formData);
  };

  return (
    <div>
      {toogleNotes && (
        <>
          <div className="overlay" onClick={() => setToogleNotes(false)} ></div>
            <form className="Notes" onSubmit={handleSubmit}>
                <i className="fa-solid fa-circle-xmark" onClick={() => setToogleNotes(false)} ></i>
                <h5>Notes</h5>
                <textarea name="notes" id="notes" value={formData} onChange={(e) => setFormData(e.target.value)} ></textarea>
                <button className="btn btn-primary" type="submit">
                Save
                </button>
            </form>
        </>
      )}
    </div>
  );
}
