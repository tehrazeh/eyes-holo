import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes } from '../../../../Redux/slices/heroesSlice'
import HeroBlockByAttribute from './attributeBlocks/AttributeBlocks'
import styles from './Heroes.module.scss'
import HeroesHeader from './heroesHeader/HeroesHeader'

const Heroes = () => {
  const {status} = useSelector((state) => state.hero) // get state from slice
  const dispatch = useDispatch() // for reducer callbacks
  const [attributes] = useState(['str', 'agi', 'int']) // attributes of heroes


  // render block of heroes for each attributes
  const heroBlocks = attributes.map(attribute => {
      return <HeroBlockByAttribute attribute={attribute} key={attribute}/>
    })


  useEffect(() => { // fetch heroes effect
    if (status !== 'loaded') { // to fetch heroes only if the filter state is empty
      dispatch(fetchHeroes())
    }
      
  }, [dispatch, status])

  if (status === 'loading') { // waiting for a response, or page was refreshed
    return <>Loading...</>
  }
  return (
    <div className={styles.heroBlocks}>
      <HeroesHeader />
      {heroBlocks}
    </div>
  )
}

export default Heroes