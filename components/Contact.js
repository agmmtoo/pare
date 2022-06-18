import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.span}>
                <input type='text' placeholder='First name' />
                <input type='text' placeholder='Last name' />
            </div>
            <input type='email' placeholder='E-mail' />
            <textarea placeholder='Your message' rows='4' />
            <button type='submit'>Send</button>
        </form>
    )
}