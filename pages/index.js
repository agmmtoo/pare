import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cardStyles from '../styles/Card.module.css'

// imgs
import heroImage from '../assets/hero-image.png'
import healthCheck from '../assets/pethealthcheck.jpg'
import vaccinating from '../assets/vaccinating.jpg'
import ownerEducation from '../assets/ownereducation.jpg'
import pupHealthCheck from '../assets/pup-health-check.png'

// components
import Card from '../components/card'
import PriceCard from '../components/PriceCard'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pare</title>
        <meta name="description" content="Care for your pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <section>
          <div className={styles.heroSection}>

            <div>
              <h1 className={styles.sectionTitle}>
                <span>Health Care</span> for your pet.
              </h1>
              <p>
                Have your pet ever fallen ill and you found
                yourself don&apos;t know what to do?

                You can&apos;t ask them either since they can&apos;t
                talk.
              </p>
              <a href='#pricing'>Well, no more</a>
              <button type='button' className={styles.heroBtn}>Subscribe today</button>
            </div>

            <img src={heroImage.src} alt='pet being sick' />

          </div>
        </section>

        <section id='services' className={cardStyles.cardWrapper}>
          <h1 className={styles.sectionTitle}>
            Our <span>Services</span>
          </h1>
          <p className={styles.sectionP}>A brief portion of what we do.</p>
          <Card
            title='Health Check'
            p='Detecting issues early to reduce their impact on wellbeing and health'
            a='Learn more'
            src={pupHealthCheck.src}
            alt='pet health check'
          />

          <Card
            title='Vacinating'
            p='Safeguarding security by reducing the risk of disease, infection and harm.'
            a='Learn more'
            src={vaccinating.src}
            alt='pet health check'
          />

          <Card
            title='Owner Education'
            p='Informing owners about key elements required to care for the pet.'
            a='Learn more'
            src={ownerEducation.src}
            alt='educating owner'
          />

        </section>

        <section id='pricing'>
          <h1 className={styles.sectionTitle}>
            Pricing <span>Plans</span>
          </h1>
          <p className={styles.sectionP}>The right price for you, whoever you are.</p>
          <div className={styles.pricing}>
            <PriceCard
              name='Standard'
              number='79'
            />
            <PriceCard
              name='Essential'
              number='149'
            />
            <PriceCard
              name='Premium'
              number='289'
            />
          </div>

        </section>

        <section id='contact'>
          <h1 className={styles.sectionTitle}>
            <span>Contact</span> Us
          </h1>
          <p className={styles.sectionP}>Couldn&apos;t pick up something? Let us know!</p>
          <Contact />
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </>
  )
}
