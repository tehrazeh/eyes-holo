import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes } from '../../../../Redux/slices/heroesSlice'
import { setSearchValue, clearSearchValue } from '../../../../Redux/slices/filterHeroesSlice'
import HeroBlockByAttribute from './attributeBlocks/HeroBlockByAttribute'
import styles from './Heroes.module.scss'

const Heroes = () => {
  const {status, link} = useSelector((state) => state.hero) // get state from slice
  const searchValue = useSelector((state) => state.filterHero.searchValue)
  const dispatch = useDispatch() // for reducer callbacks
  const [attributes] = useState(['str', 'agi', 'int']) // attributes of heroes

  // const [searchValue, setSearchValue] = useState('')

  // render block of heroes for each attributes
  const heroBlocks = attributes.map(attribute => {
      return <HeroBlockByAttribute attribute={attribute} link={link} key={attribute}/>
    })


  useEffect(() => { // fetch heroes effect
      dispatch(fetchHeroes())
  }, [dispatch])

  if (status === 'loading') { // waiting for a response, or page was refreshed
    return <>Zagruzka...😎</>
  }
  return (
    <div className={styles.heroBlocks}>
      <div className={styles.heroBlocks_header}>
        <div className={styles.heroBlocks_header_inputContainer}>
          <img className={styles.searchIcon} src={require(`../../../../Assets/Input/search.png`)}
          alt='search' />
          <input 
            value={searchValue}
            onChange={(event) => dispatch(setSearchValue(event.target.value))}
          placeholder="Search Hero..."/>
          {searchValue && 
          <img className={styles.clearIcon} src={require(`../../../../Assets/Input/clear.png`)}
          alt='clear'  onClick={() => dispatch(clearSearchValue())}/>}
        </div>      
        {/* <span>all heroes</span> */}
      </div>
      {heroBlocks}
    </div>
  )
}

export default Heroes