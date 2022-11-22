import styles from './HeroesHeader.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue, clearSearchValue } from '../../../../../Redux/slices/filterHeroesSlice'

 const HeroesHeader = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.filterHero.searchValue)
  return (
    <div className={styles.header}>
        <div className={styles.header_inputContainer}>
          <img className={styles.searchIcon} src={require(`../../../../../Assets/Input/search.png`)}
          alt='search' />
          <input 
            value={searchValue}
            onChange={(event) => dispatch(setSearchValue(event.target.value))}
          placeholder="Search Hero..."/>
          {searchValue && 
          <img className={styles.clearIcon} src={require(`../../../../../Assets/Input/clear.png`)}
          alt='clear'  onClick={() => dispatch(clearSearchValue())}/>}
        </div>      
        {/* <span>all heroes</span> */}
      </div>
  )
}

export default HeroesHeader
