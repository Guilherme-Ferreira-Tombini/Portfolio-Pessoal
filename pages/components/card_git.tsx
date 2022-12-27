import styles from '../../styles/Card1.module.css'

export default function Card1(props) {
  return (
    <div className={styles.container}>
      <h2>{props.titulo}</h2>
      <p>{props.paragrafo}</p>
    </div>
  )
}