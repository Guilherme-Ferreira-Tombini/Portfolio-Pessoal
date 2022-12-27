import styles from '../styles/Home.module.css'
import Header from './components/cabecario';
import Card from './components/card1';
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
            <div className={styles.espaco}>
              <Card titulo="Seja bem-vindo ao meu portfólio" paragrafo="Aqui você pode ver um pouco sobre mim e ver as tecnologias que geralmente utilizo para minhas aplicações Front-end e Back-end"/>
            </div>
          </main>
        </div>
      </div>
      <Footer />
      
    </>
  )
}