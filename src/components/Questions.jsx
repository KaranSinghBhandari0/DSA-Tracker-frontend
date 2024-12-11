import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Questions() {
    const [questions, setQuestions] = useState([]);

    const { getQuestions, markImportant, handleNotes, selectedTopic, difficulty, setDifficulty } = useContext(UserContext);

    useEffect(() => {
        const fetchQues = async () => {
            const res = await getQuestions(selectedTopic, difficulty);
            setQuestions(res);
        };
        fetchQues();
    }, [selectedTopic, difficulty]);

    const handleMarkImportant = (id) => {
        markImportant(id);

        // Update the local state to reflect the change
        setQuestions(prevQuestions => 
            prevQuestions.map(ques => 
                ques._id === id ? { ...ques, important: !ques.important } : ques
            )
        );
    };

    return (
        <div className="questions">
            <h3>{selectedTopic}</h3>
            
            <div className="difficulty mt-3">
                <button
                    onClick={() => setDifficulty('Easy')}
                    style={{ borderRight: 'none', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', backgroundColor: difficulty === "Easy" ? "rgb(131, 9, 246)" : "#3d3d3d" }} >
                    Easy
                </button>
                <button
                    onClick={() => setDifficulty('Medium')}
                    style={{ backgroundColor: difficulty === "Medium" ? "rgb(131, 9, 246)" : "#3d3d3d" }} >
                    Medium
                </button>
                <button
                    onClick={() => setDifficulty('Hard')}
                    style={{ borderLeft: 'none', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', backgroundColor: difficulty === "Hard" ? "rgb(131, 9, 246)" : "#3d3d3d" }} >
                    Hard
                </button>
            </div>

            {questions.length==0 ? <p style={{color: 'orange', marginTop: '0.5rem'}}>No Question Available</p> : 
                <>
                    {questions.map((ques, index) => (
                        <div key={index} className="Ques-Card">
                            <p>{index + 1}.</p>
                            <h6>{ques.title}</h6>
                            <a href={ques.link} target="_blank" rel="noopener noreferrer">Link</a>

                            <i className='fa-solid fa-star' onClick={() => handleMarkImportant(ques._id)} style={{ color: ques.important ? 'orange' : 'white' }} ></i>
                            <i className="fa-solid fa-note-sticky" onClick={() => handleNotes(ques._id, ques.notes)}
                            style={{ color: ques.notes==='' ? 'white' : 'pink' }}></i>
                        </div>
                    ))}
                </>   
            }
            
        </div>
    );
}
