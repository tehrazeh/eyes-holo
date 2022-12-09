import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.Header}>
        <div className={styles.logo}>
            <NavLink to='/'>
            <img src={process.env.PUBLIC_URL + '/logo.png'}/>
            </NavLink>
        </div>
        <div className={styles.buttons}>    
            <NavLink to='/Heroes'>
            <button>Heroes</button>
            </NavLink>
            <NavLink to='/Items'>
            <button>Items</button>
            </NavLink>
        </div>
        </div>
    )
}

export default Header