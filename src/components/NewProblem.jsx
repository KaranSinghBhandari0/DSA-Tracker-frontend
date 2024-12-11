import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

export default function NewProblem({ toogleNew, setToogleNew }) {
    const { addNewQ, topics } = useContext(UserContext);

    const [title, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [topic, setTopic] = useState('');
    const [link, setLink] = useState('');

    // Handler for form submission
    const handleAddNewQ = (e) => {
        e.preventDefault();
        addNewQ(title, difficulty, topic, link);

        // Clear the form
        setTitle('');
        setDifficulty('');
        setTopic('');
        setLink('');

        // close modal
        setToogleNew(false);
    };

    return (
        <>
            {toogleNew && (
                <>
                    <div className="overlay" onClick={() => setToogleNew(false)}></div>
                    <form className="addNewProblem" onSubmit={handleAddNewQ}>
                        <i className="fa-solid fa-circle-xmark" onClick={() => setToogleNew(false)}></i>
                        <h5>Add New Problem</h5>

                        {/* Problem Title */}
                        <div>
                            <small>Problem Title</small>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        {/* Difficulty and Topic */}
                        <div className="d-flex gap-2 mt-3">
                            <select
                                className="form-select flex-fill"
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select Difficulty
                                </option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            <select
                                className="form-select flex-fill"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select Topic
                                </option>
                                {topics.map((t, index) => (
                                    <option key={index} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Problem Link */}
                        <div className="mt-3">
                            <small>Problem Link</small>
                            <input
                                type="text"
                                className="form-control"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">
                            Add
                        </button>
                    </form>
                </>
            )}
        </>
    );
}
