import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.interno}>

        <div className={styles.logo}>
          <div className={styles.titulo}>PP</div>
          <div className={styles.titulo2}>Portfolio Pessoal</div>

        </div>

        <div className={styles.contatos}>
          <div>Contato</div>
          <div className={styles.icons}>
            <a className={styles.imge} href="https://www.linkedin.com/in/guilherme-ferreira-tombini-593015247/"><img src="/linkedin.png"></img></a>
            <a className={styles.imge} href=""><img src="/discord.png"></img></a>
            <a className={styles.imge} href=""><img src="/email.png"></img></a>
            <a className={styles.imge} href=""><img src="/instagram.png"></img></a>
          </div>
        </div>

        <div className={styles.texto}>
          <div className={styles.cop}>© 2022 Guilherme Ferreira Tombini</div>
        </div>
      </div>
    </footer>
  )
}