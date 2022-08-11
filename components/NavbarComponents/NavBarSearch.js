import React from 'react'

const NavBarSearch = () => {
    return (
        <div>
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border-t-2 border-r-4 border-b-4 border-l-2 border-black focus:border-t-2 focus:border-r-4 focus:border-b-4 focus:border-l-2 focus:border-black" placeholder="Search for a topic" required=""></input>
                </div>
            </form>

        </div>
    )
}

export default NavBarSearch