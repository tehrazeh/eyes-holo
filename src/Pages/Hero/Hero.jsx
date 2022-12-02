import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchHeroes, selectHeroById } from '../../Redux/slices/heroesSlice'
import styles from './Hero.module.scss'
import { link } from '../../utils/constants'
import Stats from './components/Stats/Stats'
import Profile from './components/Profile/Profile'
import Abilities from './components/Abilities/Abilities'
import Lore from './components/Lore/Lore'

const Hero = () => {
  const { id } = useParams() // id from the search bar
  const hero = useSelector(selectHeroById(id))[0] // selector that returns array with 1 object of matched hero
  const statusHero = useSelector((state) => state.hero.status) // status of the api request, based on this we display error or result
  const dispatch = useDispatch() // function for our reducer callbacks
  useEffect(() => {
    if (!hero) { // hero did not load, we need to fetch the hero first
      dispatch(fetchHeroes())
    }
  }, [hero, dispatch]) // hook dependent on hero

  if (statusHero === 'loading') { // wait for hero to load
    return <div>Zagruzka...😎</div>
  }

  return (
    <div className={styles.Container}>
      <div className={styles.header}>
        <Link to='/Heroes'>Heroes </Link>{' > '}
        <img src={link + hero.icon} alt='hero icon' />
      </div>
      <div className={styles.hero_overview}>
        <Profile hero={hero}/>
        <Stats hero={hero}/>
        <Lore hero={hero}/>
      </div>
      <Abilities hero={hero} />
    </div>
  )
}

export default Hero
