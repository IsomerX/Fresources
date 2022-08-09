import React from 'react'
import { useState } from 'react'

const RatingPageButton = () => {
    const [isLiked, setIsLiked] = useState({
        active: false,
        counter: 0,
    })

    const changeHandler = () => {
        if (isLiked.active) {
            setIsLiked({
                active: false,
                counter: isLiked.counter - 1,
            })
        }
        else {
            setIsLiked({
                active: true,
                counter: isLiked.counter + 1,
            })
        }
    }
    return (
        <button
            className={`${isLiked.active
                    ? 'rounded-md bg-blue-200 px-4 text-center hover:bg-blue-400'
                    : 'rounded-md bg-gray-200 px-4 text-center hover:bg-gray-400'
                }`}
            onClick={changeHandler}
        >
            {`upvotes: ${isLiked.counter}`}
        </button>
    )
}

export default RatingPageButton
