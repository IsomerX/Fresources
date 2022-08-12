import React from 'react'

const GlassSearch = () => {
    return (
        <div className='w-full block p-4 rounded-xl font-bold text-2xl search-glass shadow-glass shadow-[rgba(255,255,255,0.50)] z-10 relative'>
            <form>
                <label
                    htmlFor='default-search'
                    className='mb-2 text-sm font-medium  sr-only '
                >
                    Search
                </label>
                <div className='relative'>
                    <div className='flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none'>
                        <svg
                            aria-hidden='true'
                            className='w-6 h-6 text-gray-500'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            ></path>
                        </svg>
                    </div>
                    <input
                        type='search'
                        id='default-search'
                        className='pl-16 w-full rounded-lg font-bold text-2xl bg-transparent'
                        placeholder='Search for a topic'
                        required=''
                    ></input>
                </div>
            </form>
        </div>
    )
}

export default GlassSearch
