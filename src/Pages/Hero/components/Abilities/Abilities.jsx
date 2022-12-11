import styles from './Abilities.module.scss'
import { link } from '../../../../utils/constants'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllAbilities } from '../../../../Redux/slices/abilitiesSlice'
export const Abilities = (props) => {
    const hero = props.hero
    const dispatch = useDispatch()
    const {heroAbilities, statusAbilities} = useSelector((state) => state.ability)
    useEffect(() => {
        dispatch(fetchAllAbilities(hero?.name))
    }, [hero, dispatch])

    if (statusAbilities === 'loading') {
        return <div>Loading...</div>
      }

    const abilities = heroAbilities?.map((ability, index) => { // get the abilities
        return <div className={styles.abilityBlock} key={index}>
          <div className={styles.abilityBlock_top}>
            <div className={styles.abilityBlock_top_image}>
              <div className={styles.tooltip}>{ability.dname}</div>
              <img src={link + ability.img} alt='ability' />
            </div>
            <div className={styles.abilityBlock_top_stats}>
              <div>
                <p>Cooldown</p>
                <span>{ability.cd ? ability.cd.toString().split(',').join(' / ') : 'N/A'}</span>
              </div>
              <div>
                <p>Manacost</p>
                <span>{ability.mc ? ability.mc.toString().split(',').join(' / ') : 'N/A'}</span>
              </div>
            </div>
            {ability?.dmg_type && <div className={styles.abilityBlock_top_dmg}>
              <p>Damage Type</p>
              <div>
              <img className={styles.utilityIcon} 
              src={require(`../../../../Assets/Damage/${ability.dmg_type.toLowerCase()}.png`)} alt='type'/>
              <span>{ability.dmg_type}</span>
              </div>
            </div>}
          </div>  
          <div className={styles.abilityBlock_bottom}>
            { ability?.desc && <div>
              <div className={styles.title}>
                <img className={styles.utilityIcon} 
                src={require(`../../../../Assets/Hero/description.png`)} alt='description'/>
                <p>Description</p>
              </div>
              <span>{ability.desc}</span>
            </div>}
            { ability?.lore && <div>
              <div className={styles.title}>
                <img className={styles.utilityIcon} 
                src={require(`../../../../Assets/Hero/lore.png`)} alt='lore'/>
                <p>Lore</p>
              </div>
              <span>{ability.lore}</span>
            </div>}
          </div>
        </div>
      })
  return (
    <div className={styles.abilities}>{abilities}</div>
  )
}

export default Abilities