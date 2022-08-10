import React, { useState } from 'react'
import Head from 'next/head'
const Navbar = (props) => {
    const subjects =
        ['Subject-1', 'Subject-2', 'Subject-3', 'subject-4', 'subject-5', 'subject-6']

    const buttons = subjects.map((subject, index) => {
        return (
            <li key={subject}>
                <a href="#">
                    <i className='bx bx-book-open' ></i>
                    <span className="links_name">{subject}</span>
                </a>
                <span className="tooltip">{subject}</span>
            </li>


        )
    })
    return <div>
        <>

            <Head>
                <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
            </Head>
            <div className={`sidebar ${props.open} mx-auto`} >
                <div className="logo-details" >
                    <i className='bx bx-book-alt icon'></i>
                    <div className="logo_name">Fresources</div>
                    <i className='bx bx-menu' id="btn" onClick={props.expand}></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <i className='bx bx-search' ></i>
                        <input type="text" placeholder="Search..." />
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Home</span>
                        </a>
                        <span className="tooltip">Home</span>
                    </li>
                    {buttons}
                    <li>
                        <a href="#">
                            <i className='bx bxl-whatsapp' ></i>

                            <span className="links_name">Join Whatsapp Group</span>
                        </a>
                        <span className="tooltip">Join Whatsapp Group</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-group' ></i>
                            <span className="links_name">About Us</span>
                        </a>
                        <span className="tooltip">About Us</span>
                    </li>

                </ul>
            </div>

        </>
    </div >
}

export default Navbar
