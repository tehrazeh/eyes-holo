import styles from './Stats.module.scss'
import { useMemo } from 'react'
import { attributeFullName } from '../../../../utils/constants'
const Stats = (props) => {
    const hero = props.hero
    const heroAttributes = useMemo(() => {
        const result = []
        for (let attr in attributeFullName) {
            result.push(
                <div key={attr} className={styles.attributeStat}>
                    <img className={
                        attr === hero?.primary_attr ? styles.activeAttribute : styles.attributeImg
                    } src={require(`../../../../Assets/Attributes/${attr}.png`)} alt='attribute'></img>
                    <span>{attributeFullName[attr]}: {hero?.[`base_${attr}`]}</span>
                    <span>{`(Gain ${hero?.[`${attr}_gain`]} / lvl)`}</span>
                </div>
            )
        }
        return result
    }, [hero])
    return (
        <div className={styles.stats}>
            <div className={styles.statsBlock}>
                <div>
                <img src={require('../../../../Assets/Stats/attack.png')}/>
                <h2>Attack</h2>
                </div>
                <div>
                    <span>Damage: {hero.base_attack_min} - {hero.base_attack_max}</span>
                    <span>Attack speed: 115 {`(1.13 / s)`}</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/defense.png')}/>
                    <h2>Defense</h2>
                </div>
                <div>
                    <span>Armor : 10</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/mobility.png')}/>
                    <h2>Mobility</h2>
                </div>
                <div>
                    <span>Move speed: {hero.move_speed}</span>
                    <span>Legs: {hero.legs}</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/hp.png')}/>
                    <h2>Health / Mana</h2>
                </div>
                <div>
                    <span>Health: 620</span>
                    <span>Mana: 300</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/attributes.png')}/>
                    <h2>Attributes</h2>
                </div>
                {heroAttributes}
            </div>
        </div>
    )
}

export default Stats
