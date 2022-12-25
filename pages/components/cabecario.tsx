import styles from '../../styles/Cabecario.module.css'

export default function Cabecario() {
  return (
    <div className={styles.cabecario}>
      <div className={styles.titulo}>
        <h1>Portifolio Pessoal</h1>
      </div>
      <div className={styles.menu}>
        <h2>Sobre mim</h2>
        <h2>Projetos</h2>
        <h2>Habilidades</h2>
      </div>
    </div>
  )
}