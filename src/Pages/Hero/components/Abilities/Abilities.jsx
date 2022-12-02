import styles from '../../Hero.module.scss'
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
        return <div>Zagruzka...😎</div>
      }

    const abilities = heroAbilities?.map((ability, index) => { // get the abilities
        return <div className={styles.abilityBlock} key={index}>
          <div className={styles.abilityBlock_top}>
            <img src={link + ability.img} alt='ability' />
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
              <span>{ability.dmg_type}</span>
            </div>}
          </div>  
          <div className={styles.abilityBlock_bottom}>
            { ability?.desc && <div>
              <p>Description</p>
              <span>{ability.desc}</span>
            </div>}
            { ability?.lore && <div>
              <p>Lore</p>
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