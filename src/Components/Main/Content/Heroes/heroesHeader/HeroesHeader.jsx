import styles from './HeroesHeader.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue, clearSearchValue } from '../../../../../Redux/slices/filterHeroesSlice'
import RoleButton from './roleButtons/RoleButton'

const HeroesHeader = () => {
  const dispatch = useDispatch()
  const { rolesFilter, searchValue } = useSelector((state) => state.filterHero)

  const roleButtons = []

  for (let role in rolesFilter) {
    // roleButtons.push(rolesFilter[role])
    roleButtons.push(<RoleButton key={role} role={role} roleData={rolesFilter[role]}/>)
  }

  return (
    <div className={styles.header}>
      {/* INPUT */}
      <div className={styles.header_inputContainer}>
        <img className={styles.searchIcon} src={require(`../../../../../Assets/Input/search.png`)}
          alt='search' />
        <input
          value={searchValue}
          onChange={(event) => dispatch(setSearchValue(event.target.value))}
          placeholder="Search Hero..." />
        {searchValue &&
          <img className={styles.clearIcon} src={require(`../../../../../Assets/Input/clear.png`)}
            alt='clear' onClick={() => dispatch(clearSearchValue())} />}
      </div>

      {/* ROLES */}
      <div className={styles.header_rolesContainer}>
        {roleButtons}
      </div>
    </div>
  )
}

export default HeroesHeader
