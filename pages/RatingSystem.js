import React from 'react'
import RatingPageButton from '../components/RatingPageButton'
import dataSet from '../dataset'

const RatingSystem = () => {
    const topic = dataSet;


    const subjectCard = Object.keys(topic).map((subject, index) => {
        return (
            <div className=' w-100 border shadow-lg rounded-xl bg-purple-400' key={subject}>
                <div className='flex justify-center items-center text-center text-xl' key={subject + index}>
                    {subject}
                </div>
                <div className='flex flex-col items-center bg-purple-200 p-2 divide-y divide-slate-600 justify-center px-4'>
                    {topic[subject].map((note, index) => {
                        return (
                            <div className='w-full flex justify-between p-2' key={note} >
                                <div className='text-center'>
                                    {note}
                                </div>
                                <div className='text-center'>
                                    { }<RatingPageButton />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })
    return (
        <div className='sm:block sm:p-4 md:grid grid-cols-3 gap-4 md:p-4 w-screen h-screen'>
            {subjectCard}
        </div>
    )
}

export default RatingSystem 