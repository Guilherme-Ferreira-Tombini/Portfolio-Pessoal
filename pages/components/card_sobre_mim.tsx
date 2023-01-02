import styles from '../../styles/CardSobre.module.css'
import Image from 'next/image'

export default function Card_sobre_mim() {
  return (
    <div className={styles.container}>
      <p>Eu sou Guilherme Ferreira Tombini, atualmente tenho 17 anos de idade e comecei a gostar de programação a partir do ano de 2019 com programas basicos de programação, principalmente o Scratch.<br/>
        No ano de 2020, comecei a estudar o ensino medio integrado em informatica do Instituto Federal de Mato Grosso do Sul (IFMS), aprendendo o Front-end e Back-end para a construção de sites até o final do ano de 2022.<br/>
        Agora, depois de formado, pretendo melhorar minhas habilidades no Front-end, a parte que mais gosto de fazer, para fazer projetos mais sufisticados.</p>
        <Image src="/minha_imagem.jpg" width="300px" height="350px"/>
    </div>
  )
}