import styles from '../../styles/CardHab.module.css'
import Image from 'next/image'
import { useState } from "react";
import Card3 from './card3'

export default function Card_habilidades() {
  const [isCard1Open, setIsCard1Open] = useState(false);
  const [isCard2Open, setIsCard2Open] = useState(false);
  const [isCard3Open, setIsCard3Open] = useState(false);
  const [isCard4Open, setIsCard4Open] = useState(false);
  const [isCard5Open, setIsCard5Open] = useState(false);
  const [isCard6Open, setIsCard6Open] = useState(false);

  return (
    <>
    <div className={styles.container}>
      <div><a onClick={() =>isCard1Open ? setIsCard1Open(false) : setIsCard1Open(true)}><Image src="/figma.png" width="100px" height="100px"/></a></div>
      <div><a onClick={() => isCard2Open ? setIsCard2Open(false) : setIsCard2Open(true)}><Image src="/html-5.png" width="100px" height="100px"/></a></div>
      <div><a onClick={() => isCard3Open ? setIsCard3Open(false) : setIsCard3Open(true)}><Image src="/css-3.png" width="100px" height="100px"/></a></div>
      <div><a onClick={() => isCard4Open ? setIsCard4Open(false) : setIsCard4Open(true)}><Image src="/js.png" width="100px" height="100px"/></a></div>
      <div><a onClick={() => isCard5Open ? setIsCard5Open(false) : setIsCard5Open(true)}><Image src="/node-js.png" width="100px" height="100px"/></a></div>
      <div><a onClick={() => isCard6Open ? setIsCard6Open(false) : setIsCard6Open(true)}><Image src="/react.png" width="100px" height="100px"/></a></div>
    </div>

    <div className={styles.card} style={{ display: isCard1Open ? "block" : "none" }}>
      <Card3 texto='Aprendi a utilizar o Figma no ano de 2021, com as aulas de programação, ainda estou aprendendo melhor como utiliza-lo, mas já tenho um conhecimento sobre ele. Durante o ano de 2022 houve vezes que necessitei utilza-lo para fazer um projeto dos meus sites antes de programar.'/>
    </div>

    <div className={styles.card} style={{ display: isCard2Open ? "block" : "none" }}>
      <Card3 texto='Comecei a aprender sobre o Html no IFMS, lá eu aprendi toda a estrutura básica e juntar o HTML com o CSS e Java Script. Geralmente, quando desenvolvo em Html puro, eu utilizo a estrutura header, main e footer (para uma melhor organização).'/>
    </div>

    <div className={styles.card} style={{ display: isCard3Open ? "block" : "none" }}>
      <Card3 texto='O CSS eu aprendi junto com o Html, nele eu aprendi a como estilizar melhor os sites e ainda como deixá-los responsivos com o Media Queries, que geralmente uso quando quero que um site também seja acessado normalmente pelo celular, como é o caso desse portfólio.'/>
    </div>

    <div className={styles.card} style={{ display: isCard4Open ? "block" : "none" }}>
      <Card3 texto='O Java Script eu aprendi, inicialmente, para agir com coisas simples do html, como uma operação matemática ou a mexer com arrays. Logo depois, no ano de 2021, nos utilizamos o Express para a fabricação de rotas para os nossos sites a partir de um back-end separado, que gerava uma api para o Front-end. Além disso trabalhamos com objetos e com a utilização do JWT (JSON Web Token), mas em uma operação simples de cadastro e autenticação. No ano de 2022, comecei a estudar sobre PWA, que são basicamente uma versão hibrida entre as páginas da web regulares e um aplicativo móvel.'/>
    </div>

    <div className={styles.card} style={{ display: isCard5Open ? "block" : "none" }}>
      <Card3 texto='Com o Node.js, eu aprendi a realizar um Back-end que gera uma api para um Front-end conseguir consumir e junto a isso comecei a trabalhar com o Next que, na minha opinião, é ótimo para trabalhar, no caso desse site, eu utilizei o Next com o TypeScript. Além disso, com o estudo do Node.js, eu consegui aprender um pouco do React Native.'/>
    </div>

    <div className={styles.card} style={{ display: isCard6Open ? "block" : "none" }}>
      <Card3 texto='Eu aprendi sobre React no início do ano de 2022, trabalhando na plataforma Expo. Além de aprender um pouco sobre o básico do React Native, eu aprendi a utilização de navegação básica com o “react navigation/native” e o “react-native-vector-icons”, com eles consegui realizar um Java Script para a fabricação de rotas.'/>
    </div>
    </>
  )
}