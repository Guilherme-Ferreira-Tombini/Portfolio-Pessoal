import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Cabecario.module.css'


export default function Cabecario() {

  const aparecer = () => {
    let btn = document.querySelector('#button') as HTMLLIElement
   
    btn.onclick = function () {
      let card = document.querySelector('#card') as HTMLLIElement
        if (card.style.display == 'none') card.style.display = 'block';
        else card.style.display = 'none';
    }
  };


  return (
    <>
    <div id="card" className={styles.card}>
      <div className={styles.menu2}>
        <h2><Link href="../pagina2" className={styles.pagina}>
          <a>Sobre mim</a>
        </Link></h2>
        <h2><Link href="../pagina3" className={styles.pagina}>
          <a>Projetos</a>
        </Link></h2>
        <h2><Link href="../pagina4" className={styles.pagina}>
          <a>Habilidades</a>
        </Link></h2>
      </div>
    </div>
    <div className={styles.cabecario}>
      <div className={styles.titulo}>
        <h1><Link href="/" className={styles.pagina}>
          <a>Portfólio Pessoal</a>
        </Link></h1>
      </div>
      
      <div className={styles.menu}>
        <h2><Link href="../pagina2" className={styles.pagina}>
          <a>Sobre mim</a>
        </Link></h2>
        <h2><Link href="../pagina3" className={styles.pagina}>
          <a>Projetos</a>
        </Link></h2>
        <h2><Link href="../pagina4" className={styles.pagina}>
          <a>Habilidades</a>
        </Link></h2>
      </div>

      <div className={styles.icon}>
       <button onClick={() => aparecer()} id="button" className={styles.botao}><Image id="img" src="/icone.png" width="40px" height="40px"/></button> 
      </div>
      </div>
      </>
  )
}