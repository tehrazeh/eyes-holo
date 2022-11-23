import styles from './HeroesHeader.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue, clearSearchValue, setRoleFilter } from '../../../../../Redux/slices/filterHeroesSlice'

 const HeroesHeader = () => {
    const dispatch = useDispatch()
    const { rolesFilter, searchValue } = useSelector((state) => state.filterHero)
  return (
    <div className={styles.header}>
        {/* INPUT */}
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

        {/* ROLES */}
        <div className={styles.header_rolesContainer}>
            <button className={
                rolesFilter['Carry'] ? styles.header_rolesContainer_activeButton
                 : styles.header_rolesContainer_inactiveButton}
                onClick={() => dispatch(setRoleFilter('Carry'))}>
                <img src={require(`../../../../../Assets/Roles/carry.png`)} alt='carry'/>
            </button>
            <button className={
                rolesFilter['Support'] ? styles.header_rolesContainer_activeButton
                 : styles.header_rolesContainer_inactiveButton}
                 onClick={() => dispatch(setRoleFilter('Support'))}>
                <img src={require(`../../../../../Assets/Roles/support.png`)} alt='support'/>
            </button>
            
        </div>
      </div>
  )
}

export default HeroesHeader
