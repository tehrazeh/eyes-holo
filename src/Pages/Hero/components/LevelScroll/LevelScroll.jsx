import { setHeroLvl } from '../../../../Redux/slices/heroStatsSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './LevelScroll.module.scss'
import { link } from '../../../../utils/constants'
import { useEffect } from 'react'

const LevelScroll = ({hero}) => {

    const dispatch = useDispatch()
    const {currentLvl} = useSelector((state) => state.heroStats)

    // to refresh hero level if the user clicks on another page and chooses another hero
    useEffect(() => {
      dispatch(setHeroLvl(1))
    }, [dispatch]) 

  return (
    <div className={styles.range}>
    <img src={link + hero.icon} alt='hero icon' />
    <input className={styles.range_scroll} type='range'
     min={1} max={30} step={1} value={currentLvl}
     onChange={(e) => dispatch(setHeroLvl(e.target.valueAsNumber))}/>
    <span>Level {currentLvl}</span>
  </div>
  )
}

export default LevelScroll
