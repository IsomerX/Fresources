import React, { useState } from 'react'
import SubjectPageBody from '../components/SubjectPageComponents/SubjectPageBody'
import SubjectPageHeader from '../components/SubjectPageComponents/SubjectPageHeader'
// import './styles.css';

function Subject() {
    const [notes, setNotes] = useState(true)
    const [assig, setAssig] = useState(false)
    const [book, setBook] = useState(false)
    const [pyq, setPyq] = useState(false)
    const [exp, setExp] = useState(false)
    const [play, setPlay] = useState(false)

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
    const dataSet = [
        {
            notes: [
                'notes1',
                'notes2',
                'notes3',
                'notes4',
                'notes5',
                'notes6',
                'notes7',
                'notes8',
                'notes9',
                'notes10',
            ],
        },
        {
            assig: [
                'assig1',
                'assig2',
                'assig3',
                'assig4',
                'assig5',
                'assig6',
                'assig7',
                'assig8',
                'assig9',
                'assig10',
            ],
        },
        {
            book: [
                'book1',
                'book2',
                'book3',
                'book4',
                'book5',
                'book6',
                'book7',
                'book8',
                'book9',
                'book10',
            ],
        },
        {
            pyq: [
                'pyq1',
                'pyq2',
                'pyq3',
                'pyq4',
                'pyq5',
                'pyq6',
                'pyq7',
                'pyq8',
                'pyq9',
                'pyq10',
            ],
        },
        {
            exp: [
                'exp1',
                'exp2',
                'exp3',
                'exp4',
                'exp5',
                'exp6',
                'exp7',
                'exp8',
                'exp9',
                'exp10',
            ],
        },
        {
            play: [
                'play1',
                'play2',
                'play3',
                'play4',
                'play5',
                'play6',
                'play7',
                'play8',
                'play9',
                'play10',
            ],
        },
    ]
    return (
        <>
            <SubjectPageHeader />
            <SubjectPageBody dataSet={dataSet} />
        </>
    )
}

export default Subject
