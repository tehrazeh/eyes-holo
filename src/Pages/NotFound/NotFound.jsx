import topImg from '../../Assets/NotFound/top.png'
import bottomImg from '../../Assets/NotFound/bottom.png'
import styles from './NotFound.module.scss'
export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
        <img className={styles.topImage} src={topImg} alt='top'/>
        <p>Something went wrong {`:(`}</p>
        <img className={styles.bottomImage} src={bottomImg} alt='bottom'/>
    </div>
  )
}
