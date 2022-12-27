import styles from '../../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.interno}>

        <div className={styles.logo}>
          <div className={styles.titulo}>PP</div>
          <div className={styles.titulo2}>Portfólio Pessoal</div>

        </div>

        <div className={styles.contatos}>
          <div>Contato</div>
          <div className={styles.icons}>
            <a className={styles.imge} href="https://www.linkedin.com/in/guilherme-ferreira-tombini-593015247/"><Image src="/linkedin.png" width="40px" height="40px"/></a>
            <a className={styles.imge} href="https://discord.gg/Z94yXG5a43"><Image src="/discord.png" width="40px" height="40px"/></a>
            <a className={styles.imge} href="mailto:ge55544@gmail.com"><Image src="/email.png" width="40px" height="40px"/></a>
            <a className={styles.imge} href="https://www.instagram.com/guilhermetombini/"><Image src="/instagram.png" width="40px" height="40px"/></a>
          </div>
        </div>

        <div className={styles.texto}>
          <div className={styles.cop}>© 2022 Guilherme Ferreira Tombini</div>
        </div>
      </div>
    </footer>
  )
}