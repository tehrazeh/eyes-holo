import styles from './Lore.module.scss'
import { useHeroLore } from '../../../../utils/hooks/useHeroLore'

const Lore = (props) => {
    const hero = props.hero
    const lore = useHeroLore(hero?.name)
    if (!lore) return <div>Zagruzka...</div>
  return (
    <div className={styles.lore}>
          <p>Lore</p>
          {lore}
        </div>
  )
}

export default Lore
