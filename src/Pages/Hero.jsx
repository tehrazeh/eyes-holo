import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchHeroes, selectHeroById } from '../Redux/slices/heroesSlice'
import { fetchAllAbilities } from '../Redux/slices/abilitiesSlice'
import styles from './Pages Styles/Hero.module.scss'
import { useState } from 'react'

const Hero = () => {
  const { id } = useParams() // id from the search bar
  const hero = useSelector(selectHeroById(id))[0] // selector that returns array with 1 object of matched hero
  const statusHero = useSelector((state) => state.hero.status) // status of the api request, based on this we display error or result
  const { statusAbilities, heroAbilities, link } = useSelector((state) => state.ability)
  const [roles, setRoles] = useState([])
  const dispatch = useDispatch() // function for our reducer callbacks

  useEffect(() => {
    if (hero) { // hero did load, we can fetch the abilities
      dispatch(fetchAllAbilities(hero.name)) // get the abilities of the hero
      setRoles(hero.roles.map((role, index) => { // get the roles of the hero
        return <span key={index} className={styles.role}>{role}</span>
      }))

    } else if (!hero) { // hero did not load, we need to fetch the hero first
      dispatch(fetchHeroes())
    }
  }, [hero, dispatch]) // hook dependent on hero

  const abilities = heroAbilities.map((ability, index) => { // get the abilities
    return <div className={styles.abilityBlock} key={index}>
      <div className={styles.abilityBlock_top}>
        <img src={link + ability.img} alt='ability' />
        <div className={styles.abilityBlock_top_stats}>
          <div>
            <p>Cooldown</p>
            <span>{ability.cd ? ability.cd.toString().split(',').join(' / ') : 'N/A'}</span>
          </div>
          <div>
            <p>Manacost</p>
            <span>{ability.mc ? ability.mc.toString().split(',').join(' / ') : 'N/A'}</span>
          </div>
        </div>
        {ability?.dmg_type && <div className={styles.abilityBlock_top_dmg}>
          <p>Damage Type</p>
          <span>{ability.dmg_type}</span>
        </div>}
      </div>  
      <div className={styles.abilityBlock_bottom}>
        <div>
          <p>Description</p>
          <span>{ability.desc}</span>
        </div>
        { ability?.lore && <div>
          <p>Lore</p>
          <span>{ability.lore}</span>
        </div>}
      </div>
    </div>
  })





  if (statusAbilities === 'loading' || statusHero === 'loading') { // loading, either page was refreshed or waiting for request  
    return <>Zagruzka...😎</>
  }

  return (
    <div className={styles.Container}>
      <div className={styles.header}>
        <Link to='/Heroes'>Heroes </Link>{'>'}
        <img src={link + hero.icon} alt='hero icon' />
      </div>
      <div className={styles.hero_overview}>
        <div className={styles.hero_overview_description}>
          <img src={link + hero.img} alt='hero' />
          <div>
            <h2>{hero.localized_name}</h2>
            <p>Primary Attribute: {hero.primary_attr}</p>
            {roles}
          </div>
        </div>
        <div className={styles.hero_overview_stats}>
          <div className={styles.hero_overview_stats_attack}>
            <div>
              <h2>Attack</h2>
              <span></span>
            </div>
          </div>
          <div className={styles.hero_overview_stats_defense}>
            <div>
              <h2>Defense</h2>
              <span></span>
            </div>
          </div>
          <div className={styles.hero_overview_stats_mobility}>
            <div>
              <h2>Mobility</h2>
              <span></span>
            </div>
          </div>
          <div className={styles.hero_overview_stats_hpAndMana}>
            <div>
              <h2>Health / Mana</h2>
              <span></span>
            </div>
          </div>
          <div className={styles.hero_overview_stats_attributes}>
            <div className={styles.hero_overview_stats_attributes_str}>
            <div>
              <img src={require('../Assets/Attributes/str.png')} alt='attribute'></img>
              <span></span>
            </div>
            </div>
            <div className={styles.hero_overview_stats_attributes_agi}>
              <img src={require('../Assets/Attributes/agi.png')} alt='attribute'></img>
              <span></span>
            </div>
            <div className={styles.hero_overview_stats_attributes_int}>
              <img src={require('../Assets/Attributes/int.png')} alt='attribute'></img>
              <span></span>
            </div>
          </div>       
        </div>
        <div className={styles.hero_overview_lore}>
          Lore:
          "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General.
          In battle after battle he proved his worth through gory deed. His rise through the ranks was 
          helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign
           of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever
            brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory,
             Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his
              troops now numbered zero. Of course, many had died in battle, but a significant number had also
               fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters
                not a whit to Axe, who knows that a one-man army is by far the best."
        </div>
      </div>
      <div className={styles.abilities}>{abilities}</div>
    </div>
  )
}

export default Hero
