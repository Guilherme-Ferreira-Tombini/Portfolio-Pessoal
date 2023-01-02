import styles from '../styles/Pagina2.module.css'
import Header from './components/cabecario';
import Card_sobre from './components/card_sobre_mim';
import Footer from './components/footer'

export default function Pagina2() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
          <Card_sobre/>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}