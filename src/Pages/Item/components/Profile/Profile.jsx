import styles from './Profile.module.scss'
import { link } from '../../../../utils/constants'

const Profile = ({ itemStats }) => {
    return (
        <div className={styles.itemProfile}>
            <div className={styles.itemProfile_top}>
                <img className={styles.itemImage}
                src={link + itemStats.img} alt='item icon' />
                <div className={styles.itemProfile_top_stats}>
                    <p>{itemStats.dname}</p>
                    { itemStats.cost > 0 &&
                    <div>
                        <img className={styles.cost} src={require('../../../../Assets/Item/cost.png')} alt='cost' />
                        <span>{itemStats.cost}</span>
                    </div>
                    }
                    <div className={styles.cooldown}>
                        {itemStats.mc && <div>
                            <div className={styles.cooldown_imgBlock}>
                                <img src={require('../../../../Assets/Item/mc.png')} alt='mana' />
                                <p className={styles.tooltip}>Mana Cost</p>
                            </div>
                            <span>{itemStats.mc}</span>
                        </div>}
                        {itemStats.cd && <div><div className={styles.cooldown_imgBlock}>
                            <img src={require('../../../../Assets/Item/cd.png')} alt='cooldown' />
                            <p className={styles.tooltip}>Cooldown</p>
                        </div>
                            <span>{itemStats.cd}</span>
                        </div>}
                    </div>
                </div>
            </div>
            <div className={styles.lore}>
                <div>
                    <img src={require('../../../../Assets/Hero/lore.png')} alt='lore'/>
                    <p>Lore</p>
                </div>
                <div>
                    {itemStats.lore ? itemStats.lore : 
                    'Mysterious artifact, history of origin is unknown...'
                    }
                </div>
            </div>

        </div>
    )
}

export default Profile