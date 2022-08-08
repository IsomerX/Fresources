import React from 'react'

const SubjectPageBody = (props) => {

    const dataSet = props.dataSet;
    console.log(dataSet.title)
    return (
        dataSet.map((individualData, index) => { <h1>Hello</h1> })
    )
}

export default SubjectPageBody 