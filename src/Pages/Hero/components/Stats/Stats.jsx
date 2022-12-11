import styles from './Stats.module.scss'
import { useMemo } from 'react'
import { attributeFullName } from '../../../../utils/constants'
import { useSelector } from 'react-redux'
import { calculateHealth, calculateMana,
        calculateAttribute, calculateDamage,
        calculateArmor, calculateAttackSpeed } from '../../../../utils/statCalculations'
const Stats = (props) => {
    const hero = props.hero
    const {currentLvl} = useSelector((state) => state.heroStats)
    const heroAttributes = useMemo(() => {
        const result = []
        for (let attr in attributeFullName) {

            result.push(
                <div key={attr} className={styles.attributeStat}>
                    <img className={
                        attr === hero?.primary_attr ? styles.activeAttribute : styles.attributeImg
                    } src={require(`../../../../Assets/Attributes/${attr}.png`)} alt='attribute'></img>
                    <span>{attributeFullName[attr]}  
                    : {calculateAttribute(
                        hero?.[`base_${attr}`],
                        hero?.[`${attr}_gain`],
                        currentLvl
                    )}
                    </span>
                    <span>{`(Gain ${hero?.[`${attr}_gain`]} / lvl)`}</span>
                </div>
            )
        }
        return result
    }, [hero, currentLvl])
    return (
        <div className={styles.stats}>
            <div className={styles.statsBlock}>
                <div>
                <img src={require('../../../../Assets/Stats/attack.png')} alt='attack'/>
                <h2>Attack</h2>
                </div>
                <div>
                    <span>Damage: {calculateDamage(
                        hero?.[`base_${hero?.primary_attr}`],
                        hero?.[`${hero?.primary_attr}_gain`],
                        hero.base_attack_min,
                        currentLvl
                        )} - {calculateDamage(
                            hero?.[`base_${hero?.primary_attr}`],
                            hero?.[`${hero?.primary_attr}_gain`],
                            hero.base_attack_max,
                            currentLvl
                            )}</span>
                    <span>Attack speed: {calculateAttackSpeed(
                            hero.base_agi,
                            hero.agi_gain,
                            currentLvl,
                            hero.attack_rate,
                    )} s</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/defense.png')} alt='defence'/>
                    <h2>Defense</h2>
                </div>
                <div>
                    <span>Armor : {calculateArmor(hero.base_armor, hero.base_agi,
                         hero.agi_gain, currentLvl)}</span>
                    <span>Magic Resist : {hero.base_mr}%</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/mobility.png')} alt='mobility'/>
                    <h2>Mobility</h2>
                </div>
                <div>
                    <span>Move speed: {hero.move_speed}</span>
                    <span>Legs: {hero.legs}</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/hp.png')} alt='hp and mana'/>
                    <h2>Health / Mana</h2>
                </div>
                <div>
                    <span>Health: {calculateHealth(hero.str_gain, currentLvl, hero.base_str)}</span>
                    <span>Mana: {calculateMana(hero.int_gain, currentLvl, hero.base_int)}</span>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div>
                    <img src={require('../../../../Assets/Stats/attributes.png')} alt='attrbts'/>
                    <h2>Attributes</h2>
                </div>
                {heroAttributes}
            </div>
        </div>
    )
}

export default Stats
