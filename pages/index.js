// import Head from 'next/head'
import Link from 'next/link'
import Subject from '../components/Subject'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Subject />
            <Link href={'/RatingSystem'}>
                <button className='bg-blue-300 rounded-lg p-4'>To rating system</button>
            </Link>
        </>
    )
}
