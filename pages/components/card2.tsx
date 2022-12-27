import styles from '../../styles/Card2.module.css'

export default function Card2(props) {
  return (
    <div className={styles.container}>
      <h2>{props.paragrafo}</h2>
    </div>
  )
}