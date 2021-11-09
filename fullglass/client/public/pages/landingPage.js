



export default function Home() {
    const router = useRouter();

    return(
        <div className={StyleSheet.container}>
            <Head>
        <title>Full Glass</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <h1>Full Glass</h1>
        </div>
        <div className={styles.info_box}>
          <h2>Experience the beauty of wine</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <h5>full glass</h5>
      </footer>
        </div>
    )
}