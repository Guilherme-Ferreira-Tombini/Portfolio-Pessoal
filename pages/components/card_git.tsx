import styles from '../../styles/Card1.module.css'
import { useState, useEffect } from "react";

export default function Card_git() {
 
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

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
    <div className={styles.container}>
   {loading && !data &&
     <h5>Carregando Projetos.......</h5>
   }
    </div>
  )
}