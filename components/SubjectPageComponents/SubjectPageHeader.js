import React from 'react'

const SubjectPageHeader = () => {
    const buttonHeaders = ['All', 'Assignment', 'Notes', 'Books', 'PYQs', 'Experiments', 'Playlists']

    return (
        <div className="container my-3 ">
            {
                buttonHeaders.map((buttonHeader, index) => {
                    return (
                        <button key={index} className="mx-2">
                            {buttonHeader}
                        </button>
                        // <button key={index} className="mx-2" onClick={() => {
                        //     switch (buttonHeader) {
                        //         case 'All':
                        //             All();
                        //             break;
                        //         case 'Assignment':
                        //             Assignment();
                        //             break;
                        //         case 'Notes':
                        //             Note();
                        //             break;
                        //         case 'Books':
                        //             Book();
                        //             break;
                        //         case 'PYQs':
                        //             Pyq();
                        //             break;
                        //         case 'Experiments':
                        //             Experiment();
                        //             break;
                        //         case 'Playlists':
                        //             Playlist();
                        //             break;
                        //         default:
                        //             break;
                        //     }
                        // }}>{buttonHeader}</button>
                    )
                })
            }
        </div>
    )
}

export default SubjectPageHeader