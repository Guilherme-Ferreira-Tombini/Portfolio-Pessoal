import styles from '../../styles/Card3.module.css'

export interface Data{
    texto: string;
  }

export default function Card3(props: Data) {
  return (
    <div className={styles.container}>
      <h3>{props.texto}</h3>
    </div>
  )
}