import styles from './Main.module.scss'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div className={styles.homeContainer}>
            <p>Welcome to <b>eyes holo</b></p>
        <p>Discover new details about Dota 2 heroes and items</p>
        <img src={process.env.PUBLIC_URL + '/logo.png'}/>
        <div className={styles.buttons}>    
            <Link to='/Heroes'>
            <button className={styles.pulse}>Heroes</button>
            </Link>
            <Link to='/Items'>
            <button className={styles.pulse}>Items</button>
            </Link>
        </div>
        </div>
    )
}


export  default Main