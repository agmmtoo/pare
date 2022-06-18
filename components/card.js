import styles from '../styles/Card.module.css'

export default function Card({ title, p, a, src, alt }) {
    return (
        <div className={styles.card}>
            <div>
                <h2>{title}</h2>
                <p>{p}</p>
                <a href='#price'>{a}</a>
            </div>
            
            <img src={src} alt={alt} />
        </div>
    )
}