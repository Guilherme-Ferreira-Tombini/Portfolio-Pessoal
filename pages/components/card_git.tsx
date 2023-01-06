import styles from '../../styles/Card_git.module.css'
import { useState, useEffect } from "react";
import moment from 'moment';

export interface ProjetoData{
  id: number;
  name: string;
  language: string;
  pushed_at: any;
  html_url: string;
}

export default function Card_git() {
  moment.locale('pt-br');

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProjetoData[]>([]);

  const fetchAPI = async() =>{
     try {
     setLoading(true);
     const response = await fetch('https://api.github.com/users/Guilherme-Ferreira-Tombini/repos')
     const data = await response.json();
     setData(data)
     } catch (error) {
     console.log(error);
     } finally{
       setLoading(false);
     }
  }

  useEffect(() =>{
    fetchAPI()
  }, [])

  return (
    <div>
   {loading && !data &&
     <div className={styles.container}>
     <h5>Carregando Projetos.......</h5>
     </div>
   }
   <>
   {data && data.map(projeto =>{
     return(
      <div key={projeto.id} className={styles.container}>
        <div className={styles.part1}>
          <h1>{projeto.name}</h1>
          <a href={projeto.html_url}>{projeto.html_url}</a>
          </div>

        <div className={styles.part2}>
          <div className={styles.linguagem}>
            <div className={styles.bola}></div>
            <h2>{projeto.language}</h2>
          </div>
          <div className={styles.edicao}>
            <h2>Ultima edição: {moment(projeto.pushed_at).format('L')}</h2>
            </div>
        </div>

      </div>
     )
   })}
   </>
    </div>
  )
}