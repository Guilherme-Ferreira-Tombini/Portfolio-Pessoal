import styles from '../styles/Home.module.css'
import Header from './components/cabecario';
import Card from './components/card1';
import Footer from './components/footer'

export default function Pagina2() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
          
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}