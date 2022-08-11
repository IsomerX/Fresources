import React, { useState } from 'react'
import Head from 'next/head'
import NavBarSearch from './NavBarSearch'
const Navbar = (props) => {
    const subjects = [
        'Subject-1',
        'Subject-2',
        'Subject-3',
        'subject-4',
        'subject-5',
        'subject-6',
    ]

    return (
        <div className='h-full bg-white flex flex-col gap-6 p-4'>
            <Head>
                <link
                    href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'
                    rel='stylesheet'
                />
            </Head>
            <div className='flex justify-between'>
                <div>
                    <div>logo</div>
                    <button>Freesources</button>
                </div>
                <button>Hamburger</button>
            </div>
            <NavBarSearch />
            <div>subject box</div>
            <div>about us</div>
            <div>join whatsapp</div>
        </div>
    )
}

export default Navbar
