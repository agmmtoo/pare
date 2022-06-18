import styles from '../styles/priceCard.module.css'

export default function PriceCard({ name, number }) {
    return (
        <div className={styles.outerWrapper}>
            <div className={styles.wrapper}>
                <h3>{name}</h3>
                <div>$<span>{number}</span>/month</div>
                <button>Subscribe</button>
                <a>Detail</a>
            </div>
        </div>
    )
}