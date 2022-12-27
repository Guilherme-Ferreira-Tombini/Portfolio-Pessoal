import styles from '../styles/Home.module.css'
import Header from './components/cabecario';
import Card2 from './components/card2';
import Footer from './components/footer'

export default function Pagina3() {

  


  
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
            <Card2 paragrafo="Aqui estão os projetos que realizei que estão armazenados no Github" />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}