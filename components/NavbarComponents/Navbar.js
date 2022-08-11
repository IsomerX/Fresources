import React, { useState } from 'react'
import Head from 'next/head'
import NavBarSearch from './NavBarSearch'
const Navbar = (props) => {
    const subjects = props.proppedSubjects
    const [navbarActive, setNavbarActive] = useState(true)

    const subjectBoxButtons = subjects.map((subject) => {
        return (
            <div key={subject} className='flex flex-col items-center w-full '>
                <button className='text-center p-4 w-full mx-auto'>
                    {subject}
                </button>
            </div>
        )
    })

    const toggleNavbarHandler = () => {
        setNavbarActive(!navbarActive)
        props.setNavbarShow(!navbarActive)
    }

    return (
        <div className='bg-white flex flex-col gap-6 p-4 rounded-lg border-2 border-black shadow-primary-magenta h-5/6'>
            <Head>
                <link
                    href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'
                    rel='stylesheet'
                />
            </Head>
            <div className='flex justify-between'>
                <div className={
                    navbarActive ? 'block' : 'hidden'} >
                    <div>logo</div>
                    <button>Freesources</button>
                </div>
                <button className='bg-white border-type-1 w-12 rounded-lg px-2 pr-1' onClick={toggleNavbarHandler}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <NavBarSearch className={navbarActive ? 'block' : 'hidden'} />
            <div className='flex flex-col items-center w-full border-type-2 rounded-lg h-1/2 overflow-auto gap-1'>
                {subjectBoxButtons}
            </div>
            <div>about us</div>
            <div>join whatsapp</div>
        </div>
    )
}

export default Navbar
