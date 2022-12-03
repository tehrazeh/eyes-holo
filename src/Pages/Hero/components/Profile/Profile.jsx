import styles from './Profile.module.scss'
import { link, attributeFullName } from '../../../../utils/constants'

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
                {roles}
            </div>
        </div>
    )
}

export default Profile
