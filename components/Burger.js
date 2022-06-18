import { useState } from 'react'

import styles from '../styles/navbar.module.css'

export default function Burger() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <svg onClick={() => setOpen(open => !open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            {
                open &&
                <ul className={styles.mobileNav} onClick={() => setOpen(false)}>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            }
        </>
    )
}