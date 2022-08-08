import React, { useState } from 'react';
// import './styles.css';

function Subject() {

    const [notes, setNotes] = useState(true);
    const [assig, setAssig] = useState(false);
    const [book, setBook] = useState(false);
    const [pyq, setPyq] = useState(false);
    const [exp, setExp] = useState(false);
    const [play, setPlay] = useState(false);

    const Assignment = () => {
        setAssig(true)
        setNotes(false)
        setBook(false)
        setPyq(false)
        setExp(false)
        setPlay(false)
    }
    const Note = () => {
        setAssig(false)
        setNotes(true)
        setBook(false)
        setPyq(false)
        setExp(false)
        setPlay(false)
    }
    const Book = () => {
        setAssig(false)
        setNotes(false)
        setBook(true)
        setPyq(false)
        setExp(false)
        setPlay(false)
    }
    const Pyq = () => {
        setAssig(false)
        setNotes(false)
        setBook(false)
        setPyq(true)
        setExp(false)
        setPlay(false)
    }
    const Experiment = () => {
        setAssig(false)
        setNotes(false)
        setBook(false)
        setPyq(false)
        setExp(true)
        setPlay(false)
    }
    const Playlist = () => {
        setAssig(false)
        setNotes(false)
        setBook(false)
        setPyq(false)
        setExp(false)
        setPlay(true)
    }
    const All = () => {
        setAssig(true)
        setNotes(true)
        setBook(true)
        setPyq(true)
        setExp(true)
        setPlay(true)
    }

    return (
        < >
            <div className="container my-3 ">
                <button onClick={All} className="btn mx-3">
                    All
                </button>
                <button onClick={Note} className="btn mx-3">
                    Notes
                </button>
                <button onClick={Assignment} className="btn mx-3">
                    Assignments
                </button>
                <button onClick={Book} className="btn mx-3">
                    Books
                </button>
                <button onClick={Pyq} className="btn mx-3">
                    Pyqs
                </button>
                <button onClick={Experiment} className="btn mx-3">
                    Experiments
                </button>
                <button onClick={Playlist} className="btn mx-3">
                    Playlist
                </button>
            </div>
            <div className="container text-center mw-80" >
                <div className={`py-2 my-2 w-100 border ${notes ? "shadow-sm" : "d-none"}`}>
                    <h3>notes -1</h3>

                </div>
                <div className={`py-2 my-2 w-100 border ${notes ? "shadow-sm" : "d-none"}`}>
                    <h3>notes-2</h3>

                </div>
                <div className={` py-2 my-2 w-100 border ${assig ? "shadow-sm" : "d-none"}`}>
                    <h3>assig -1</h3>

                </div>
                <div className={`py-2 my-2 w-100 border  ${assig ? "shadow-sm" : "d-none"}`}>
                    <h3>assig -2</h3>

                </div>
                <div className={`py-2 my-2 w-100 border  ${book ? "shadow-sm" : "d-none"}`}>
                    <h3>book-1</h3>

                </div>
                <div className={`py-2 my-2 w-100 border  ${book ? "shadow-sm" : "d-none"}`}>
                    <h3>book-2</h3>

                </div>
                <div className={` py-2 my-2 w-100 border ${exp ? "shadow-sm" : "d-none"}`}>
                    <h3>exp-1</h3>

                </div>
                <div className={`py-2 my-2 w-100 border  ${exp ? "shadow-sm" : "d-none"}`}>
                    <h3>exp-2</h3>

                </div>
                <div className={`py-2 my-2 w-100 border  ${pyq ? "shadow-sm" : "d-none"}`}>
                    <h3>pyq-1</h3>

                </div>
                <div className={`py-2 my-2 w-100 border  ${pyq ? "shadow-sm" : "d-none"}`}>
                    <h3>pyq-2</h3>

                </div>
                <div className={`py-2 my-2 w-100 border  ${play ? "shadow-sm" : "d-none"}`}>
                    <h3>play-1</h3>

                </div>
                <div className={` py-2 my-2 w-100 border ${play ? "shadow-sm" : "d-none"}`}>
                    <h3>play-2</h3>

                </div>
            </div>

        </>
    )
}

export default Subject;
