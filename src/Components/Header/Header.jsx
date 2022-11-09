import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.Header}>
        <NavLink to='/'>
        <button>EYES HOLO</button>
        </NavLink>    
        <NavLink to='/Heroes'>
        <button>Heroes</button>
        </NavLink>
        <NavLink to='/Items'>
        <button>Items</button>
        </NavLink>
        
        </div>
    )
}

export default Header