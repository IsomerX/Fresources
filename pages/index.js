// import Head from 'next/head'
// import Subjecty from '../components/Subjecty'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Subjecty from '../components/Subjecty'
import React, { useState } from 'react'


export default function Home() {
    let [shift, setShift] = useState("100%");
    let [margin, setMargin] = useState("0");
    const [open, setOpen] = useState();
    const expand = () => {
        if (open == "") {
            setOpen("open")
            setShift("87%")
            setMargin('13%')
        } else {
            setOpen("")
            setShift("100%")
            setMargin('0%')


        }
    }
    return (
        <>
            <Navbar expand={expand} open={open} />
            <Subjecty shift={shift} margin={margin} />
        </>
    )
}
