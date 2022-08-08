// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/subjectpage">
                <button className="p-4 bg-blue-400 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Demo Button to travel to subject page</button>
            </Link>
        </>
    )
}
