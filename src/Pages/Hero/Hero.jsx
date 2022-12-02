import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchHeroes, selectHeroById } from '../../Redux/slices/heroesSlice'
import styles from './Hero.module.scss'
import { link } from '../../constants'
import Stats from './components/Stats/Stats'
import Profile from './components/Profile/Profile'
import Abilities from './components/Abilities/Abilities'

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
      {/* OVERVIEW */}
      <div className={styles.hero_overview}>
        <Profile hero={hero}/>
        <Stats hero={hero}/>
        <div className={styles.hero_overview_lore}>
          Lore:
          "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General.
          {/* In battle after battle he proved his worth through gory deed. His rise through the ranks was 
          helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign
           of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever
            brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory,
             Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his
              troops now numbered zero. Of course, many had died in battle, but a significant number had also
               fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters
                not a whit to Axe, who knows that a one-man army is by far the best." */}
        </div>
      </div>
      <Abilities hero={hero} />
    </div>
  )
}

export default Hero
