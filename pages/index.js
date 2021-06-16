import Head from 'next/head'

import styles from '../styles/Home.module.css'
import MediaQuery from 'react-responsive'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ITRE Driving Sim Helper Tool</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div>
        <MediaQuery query="(min-device-width: 1024px)" and query="(orientation: landscape)">
          <h1>Driving Simulator Host Helper Tool 1</h1>
          <style jsx>{`
            * {
              background: #4082eb;
              height: 100vh;
              width: 100vw;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              font-family: "Work Sans", sans-serif;
              font-weight: 400;
              text-align: center;
            }
            h1 {
              font-size: 1.75rem;
            }
          `}</style>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1023px)">
          <div>
            <h2>Your screen size is too small to use this web app</h2>
          </div>
          <style jsx>{`
            * {
              background: #cc0000;
              height: 100vh;
              width: 100vw;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              font-family: "Work Sans", sans-serif;
              font-weight: 400;
              text-align: center;
            }
            h2 {
              font-size: 1.75rem;
            }
          `}</style>
        </MediaQuery>
      </div>
    </div>
  )
}
