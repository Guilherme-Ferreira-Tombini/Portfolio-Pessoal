import styles from '../styles/Pagina3.module.css'
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
            <div className={styles.espaco}>
            <CardGit/>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}