import React, { useState } from 'react'
// import './styles.css';

function Subject() {
    const subjects = {
        notes: ['notes-1', 'notes-2'],
        assig: ['assig-1', 'assig-2'],
        books: ['books-1', 'books-2'],
        pyq: ['pyq-1', 'pyq-2'],
        exp: ['exp-1', 'exp-2'],
        play: ['play-1', 'play-2'],
    }

    const [isActive, setIsActive] = useState('notes')

    const buttons = Object.keys(subjects).map((subject, index) => {
        return (
            <button
                onClick={() => setIsActive(subject)}
                className='btn mx-3'
                key={subject}
            >
                {subject}
            </button>
        )
    })

    console.log(isActive)

    return (
        <>
            {buttons}
            {subjects[isActive].map((note, index) => {
                return (
                    <div
                        className='py-2 my-2 w-100 border shadow-sm'
                        key={note}
                    >
                        {note}
                    </div>
                )
            })}
        </>
    )
}

export default Subject
