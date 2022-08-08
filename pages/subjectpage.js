import React, { useState } from 'react'
import SubjectPageBody from '../components/SubjectPageComponents/SubjectPageBody'
import SubjectPageHeader from '../components/SubjectPageComponents/SubjectPageHeader'
// import './styles.css';

function Subject() {
    const [userInput, setUserInput] = useState({
        notes: true,
        assig: false,
        book: false,
        pyq: false,
        exp: false,
        play: false,
    })

    const Assignment = () => {
        setUserInput({
            ...userInput,
            assig: true,
            notes: false,
            book: false,
            pyq: false,
            exp: false,
            play: false,
        })
    }
    const Note = () => {
        setUserInput({
            ...userInput,
            notes: true,
            assig: false,
            book: false,
            pyq: false,
            exp: false,
            play: false,
        })
    }
    const Book = () => {
        setUserInput({
            ...userInput,
            notes: false,
            assig: false,
            book: true,
            pyq: false,
            exp: false,
            play: false,
        })
    }
    const Pyq = () => {
        setUserInput({
            ...userInput,
            notes: false,
            assig: false,
            book: false,
            pyq: true,
            exp: false,
            play: false,
        })
    }
    const Experiment = () => {
        setUserInput({
            ...userInput,
            notes: false,
            assig: false,
            book: false,
            pyq: false,
            exp: true,
            play: false,
        })
    }
    const Playlist = () => {
        setUserInput({
            ...userInput,
            notes: false,
            assig: false,
            book: false,
            pyq: false,
            exp: false,
            play: true,
        })
    }
    const All = () => {
        setUserInput({
            ...userInput,
            notes: true,
            assig: true,
            book: true,
            pyq: true,
            exp: true,
            play: true,
        })
    }

    return (
        <>
            <SubjectPageHeader />
            <SubjectPageBody dataSet={dataSet} />
        </>
    )
}

export default Subject
