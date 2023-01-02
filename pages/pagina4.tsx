import styles from '../styles/Home.module.css'
import Header from './components/cabecario';
import Card_Hab from './components/card_habilidades';
import Footer from './components/footer'

export default function Pagina4() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
          <Card_Hab/>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}