import styles from './Profile.module.scss'
import { link, attributeFullName } from '../../../../utils/constants'
import { Link } from 'react-router-dom'

const Profile = (props) => {
    const hero = props.hero
    const roles = hero?.roles?.map((role, index) => { // get the roles of the hero
        return <span key={index} className={styles.role}>{role}</span>
      })
    return (
        <div className={styles.profile}>
            <img src={link + hero?.img} alt='hero' />
            <div>
                <h2>{hero.localized_name}</h2>
                <p className={styles[hero?.primary_attr]}>Primary: {attributeFullName[hero?.primary_attr]}</p>
                <p>Attack type: 
                    <img className={styles.attackType}
                    src={require(`../../../../Assets/Hero/${hero?.attack_type.toLowerCase()}.png`)} />
                    {hero?.attack_type}
                </p>
                <div className={styles.rolesTitle}>
                    <p>Roles</p>
                    <Link to='/Roles'><img src={require(`../../../../Assets/Misc/info.png`)}/></Link>
                </div>
                {roles}
                
            </div>
        </div>
    )
}

export default Profile
