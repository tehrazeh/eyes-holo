import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes, selectHeroByAttribute } from '../../../../Redux/slices/heroesSlice'
import HeroBlockByAttribute from './attributeBlocks/HeroBlockByAttribute'
import styles from './Heroes.module.scss'

const Heroes = () => {
  const {status, link} = useSelector((state) => state.hero) // get state from slice
  const dispatch = useDispatch() // for reducer callbacks
  const [attributes] = useState(['str', 'agi', 'int']) // attributes of heroes


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
      {heroBlocks}
    </div>
  )
}

export default Heroes