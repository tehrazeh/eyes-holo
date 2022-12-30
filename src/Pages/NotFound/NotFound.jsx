import topImg from '../../Assets/NotFound/top.png'
import bottomImg from '../../Assets/NotFound/bottom.png'
import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'
export const NotFound = ({error,resetErrorBoundary}) => {
  return (
    <div className={styles.wrapper}>
        <img className={styles.topImage} src={topImg} alt='top'/>
        <div className={styles.wrapper_error}>
        <p>Something went wrong {`:(`}</p>
        {error && <button onClick={resetErrorBoundary}><Link to='/'>Click to Fix</Link></button>}
        </div>
        <img className={styles.bottomImage} src={bottomImg} alt='bottom'/>
    </div>
  )
}
