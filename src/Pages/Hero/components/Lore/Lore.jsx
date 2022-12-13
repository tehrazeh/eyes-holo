import styles from './Lore.module.scss'
import { useHeroLore } from '../../../../utils/hooks/useHeroLore'
import loreImg from '../../../../Assets/Hero/lore.png'
import { useState, useEffect } from 'react'
import useWidth from '../../../../utils/hooks/useWidth'
import visibleImg from '../../../../Assets/Misc/visible.png'
import hiddenImg from '../../../../Assets/Misc/hidden.png'

const Lore = (props) => {
  const hero = props.hero
  const lore = useHeroLore(hero?.name)
  const {width} = useWidth()
  const [visibility, setVisibility] = useState(true)
  useEffect(() => { // hide lore on the first render if small screen
    if (width < 930) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }, [])
  if (!lore) return <div>Loading...</div>
  return (
    <div className={styles.lore}>
      <div className={styles.lore_title}>
        <img src={loreImg} alt='lore'/>
        <p>Lore</p>
        <button className={styles.visibility} onClick={() => {
          setVisibility(!visibility)
        }}>
          <img src={visibility? visibleImg : hiddenImg} alt='toggle'/>
        </button>
      </div>
      <div className={visibility ? styles.visible : styles.invisible}>
        {lore}
      </div>
    </div>
  )
}

export default Lore
