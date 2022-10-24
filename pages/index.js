import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderLogo from '../public/ody-full-logo.png'
import BannerLogo from '../public/ody-logo-words-01.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odyssey Barber Co.</title>
        <meta name="description" content="Barbershop in Piedmont, SC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className={styles.headerOuter}>
        <Image
          priority
          src={HeaderLogo}
          className={styles.headerLogo}
          height={100}
          width={100}
          alt=""
        />
      </div> */}

      <div className={styles.bannerOuter}>
      <Image
          priority
          src={BannerLogo}
          className={styles.bannerLogo}
          alt=""
        />
      </div>

      <div className={styles.messageOuter}>
        <h3>Scroll for booking.</h3>
        <h1>Full website coming soon...</h1>
      </div>

      <div className={styles.iframeContainer}>
        <h2>Booking</h2>
        <iframe className={styles.bookingIframe} src="https://squareup.com/appointments/book/c844892d-84cb-49a8-90cb-2a0307f9cc49/FHHJ79GYWCF9N/start"></iframe>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <p>&copy; 2022 Odyssey Barber Co.</p>
          </span>
        </a>
      </footer>
    </div>
  )
}
