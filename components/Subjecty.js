import React, { useState } from 'react'
// import './styles.css';

function Subject(props) {
    const subjects = {
        Notes: ['notes-1', 'notes-2'],
        Assignments: ['assig-1', 'assig-2'],
        Books: ['books-1', 'books-2'],
        PYQs: ['pyq-1', 'pyq-2'],
        Experiments: ['exp-1', 'exp-2'],
        Playlist: ['play-1', 'play-2'],
    }

    const [isActive, setIsActive] = useState('Notes')

    const buttons = Object.keys(subjects).map((subject, index) => {
        return (
            <button
                onClick={() => setIsActive(subject)}
                className='btn mx-8 text-2xl text-neutral-500	 hover:text-gray-600   focus:text-white mb-2'
                key={subject}
            >
                {subject}
            </button>
        )
    })

    return (
        <>
            <div
                style={{
                    width: props.shift,
                    marginLeft: props.margin,
                    transition: 'all 0.5s ease',
                }}
                className='h-screen bg-babli items-center'
            >
                <div className='mx-auto text-center pt-20 mb-5'>
                    <p className='text-4xl pb-7 font-bold text-white'>
                        Subject
                    </p>
                    {buttons}
                </div>

                {subjects[isActive].map((note, index) => {
                    return (
                        <div
                            className='py-5 my-3 rounded-lg  text-white border  drop-shadow-lg mx-auto max-w-screen-sm	 text-center text-2xl  bg-blue-900  hover:bg-bablu cursor-pointer '
                            key={note}
                        >
                            {note}
                            {/* <button className=' self-center ml-2 '><svg width="24" height="24"  ><path d="M12 4 3 15h6v5h6v-5h6z" className="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#666" fill="none" stroke-linejoin="round"></path></svg></button> */}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Subject
