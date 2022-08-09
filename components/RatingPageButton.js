import React from 'react'
import { useState } from 'react'

const RatingPageButton = () => {

    const [isLiked, setIsLiked] = useState({
        active: true,
        value: Number(false)
    })


    const changeHandler = () => {
        setIsLiked((prevState) => {
            return { ...prevState, active: !prevState.active, value: Number(!prevState.value) }
        })
    }
    return (
        <button
            className={`${isLiked.active ? 'rounded-md bg-blue-200 px-4 text-center hover:bg-blue-400' : 'rounded-md bg-gray-200 px-4 text-center hover:bg-gray-400'}`}
            onClick={changeHandler}>
            {`upvotes: ${isLiked.value}`}
        </button>
    )
}

export default RatingPageButton 