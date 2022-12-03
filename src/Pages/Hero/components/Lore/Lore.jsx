import styles from './Lore.module.scss'
import { useHeroLore } from '../../../../utils/hooks/useHeroLore'
import loreImg from '../../../../Assets/Hero/lore.png'

const Lore = (props) => {
  const hero = props.hero
  const lore = useHeroLore(hero?.name)
  if (!lore) return <div>Zagruzka...</div>
  return (
    <div className={styles.lore}>
      <div>
        <img src={loreImg} />
        <p>Lore</p>
      </div>
      <div>
        {lore}
      </div>

    </div>
  )
}

export default Lore
