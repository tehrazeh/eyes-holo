import { useDispatch } from "react-redux"
import styles from './RoleButton.module.scss'
import { setRoleFilter } from '../../../../../../Redux/slices/filterHeroesSlice'

export const RoleButton = (props) => {
    const dispatch = useDispatch()
  return (
    <div className={styles.role}>
          <button className={
            props.roleData.isActive ? styles.role_activeButton
              : styles.role_inactiveButton}
            onClick={() => dispatch(setRoleFilter(props.role))}>
            <img src={require(`../../../../../../Assets/Roles/${props.role.toLowerCase()}.png`)}
             alt={props.role.toLowerCase()}/>
          </button>
          <div className={styles.role_tooltip}>
            <h4>{props.role}</h4>
            <span>{props.roleData.description}</span>
          </div>
        </div>
  )
}

export default RoleButton
