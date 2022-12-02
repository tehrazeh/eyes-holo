import styles from '../../Hero.module.scss'
import { attributeFullName } from '../../../../utils/constants'
const Stats = (props) => {
    const hero = props.hero
    let heroAttributes = []
    for (let attr in attributeFullName) {
        heroAttributes.push(
            <div key={attr}>
                <img className={
                    attr === hero?.primary_attr ? styles.activeAttribute : styles.attributeImg
                } src={require(`../../../../Assets/Attributes/${attr}.png`)} alt='attribute'></img>
                <span>{hero?.[`base_${attr}`]} {`(Gain ${hero?.[`${attr}_gain`]} / lvl)`}</span>
            </div>
        )
    }
    return (
        <div className={styles.hero_overview_stats}>
            <div className={styles.statsBlock}>
                <h2>Attack</h2>
                <div>
                    <span>Damage: {hero.base_attack_min} - {hero.base_attack_max}</span>
                    <span>Attack speed: 115 {`(1.13 / s)`}</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <h2>Defense</h2>
                <div>
                    <span>Armor : 10</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <h2>Mobility</h2>
                <div>
                    <span>Move speed: {hero.move_speed}</span>
                    <span>Legs: {hero.legs}</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <h2>Health / Mana</h2>
                <div>
                    <span>Health: 620</span>
                    <span>Mana: 300</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <h2>Attributes</h2>
                {heroAttributes}
            </div>
        </div>
    )
}

export default Stats
