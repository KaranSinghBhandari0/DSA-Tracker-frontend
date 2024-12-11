import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

// Create the User Context
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const authToken = localStorage.getItem('authToken');
    const Backend_Url = 'https://dsa-tracker-backend.up.railway.app';
    const [totalQ , setTotalQ] = useState(0);

    const topics = ['Array', '2D Array', 'Strings', 'Sorting Algorithms', 'Maths', 'Bit Manipulation', 'Recursion', 'Backtracking', 'Linked List', 'Stack', 'Queue', 'Greedy Algorithms', 'Binary Tree', 'Binary Search Tree', 'Heap/Priority Queue', 'Hashing', 'Trie', 'Graphs', 'Dynamic Programming', 'Segment Trees'];

    // add new Ques
    const addNewQ = async ( title, difficulty, topic, link ) => {
        try {
            const res = await axios.post(`${Backend_Url}/ques/new`, {title, difficulty, topic, link, authToken});
            if (res.status === 200) {
                toast.success(res.data.msg);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "Question adding failed");
        }
    }

    // get Questions
    const getQuestions = async(topic,difficulty) => {
        try {
            const res = await axios.post(`${Backend_Url}/ques/category`, {difficulty, topic, authToken});
            if (res.status === 200) {
                setTotalQ(res.data.totalQuestions);
                return res.data.questions;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.msg || "failed to fetch Questions");
        }
    }

    // Mark or unmark Questions
    const markImportant = async (id) => {
        try {
            await axios.post(`${Backend_Url}/ques/mark`, { id, authToken });
        } catch (error) {
            console.log(error.response?.data?.msg || "Failed to mark question");
        }
    };

    // toogle Notes
    const [toogleNotes, setToogleNotes] = useState(false);
    const [quesId , setQuesId] = useState('');
    const [prevData , setPrevData] = useState('');
    const handleNotes = (quesId, prevData) => {
        setToogleNotes(true);
        setPrevData(prevData);
        setQuesId(quesId);
    };

    // save Notes
    const saveNotes = async (quesId , formData) => {
        try {
            const res = await axios.post(`${Backend_Url}/ques/save`, { quesId , formData, authToken });
            if (res.status === 200) {
                setToogleNotes(false);
                toast.success(res.data.msg);
            }
        } catch (error) {
            console.log(error.response?.data?.msg || "Failed to Save question");
        }
    };

    const [selectedTopic, setSelectedTopic] = useState('Array');
    const [difficulty, setDifficulty] = useState('Easy');

    return (
        <UserContext.Provider value={{ topics, addNewQ, getQuestions, markImportant, handleNotes, toogleNotes, setToogleNotes, quesId, prevData, saveNotes, selectedTopic, difficulty, setSelectedTopic, setDifficulty, totalQ}}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
