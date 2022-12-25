import styles from '../styles/Home.module.css'
import Header from './components/cabecario';
import Card from './components/card1';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Card />
      </main>
    </div>
  )
}