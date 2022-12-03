import { dotaRoles } from "../../utils/constants"
import styles from './Roles.module.scss'
const Roles = () => {
  return (
    <div className={styles.rolesContainer}>
        {dotaRoles.map(role => {
            return <div key={role.name} className={styles.role}>
                <div className={styles.title}>
                    <img src={require(`../../Assets/Roles/${role.name.toLowerCase()}.png`)} alt='role'/>
                    <p>{role.name}</p>
                </div>
                <span>{role.description}</span>
            </div>
        })}
    </div>
  )
}

export default Roles
