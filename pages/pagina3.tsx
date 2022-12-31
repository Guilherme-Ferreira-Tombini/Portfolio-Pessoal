import styles from '../styles/Home.module.css'
import Header from './components/cabecario';
import Card2 from './components/card2';
import Footer from './components/footer'
import CardGit from './components/card_git'

export default function Pagina3() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
            <Card2 />
            <CardGit/>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}