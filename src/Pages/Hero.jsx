import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchHeroes, selectHeroById } from '../Redux/slices/heroesSlice'
import { fetchAllAbilities } from '../Redux/slices/abilitiesSlice'

const Hero = () => {
  const { id } = useParams() // id from the search bar
  const hero = useSelector(selectHeroById(id))[0] // selector that returns array with 1 object of matched hero
  const statusHero = useSelector((state) => state.hero.status) // status of the api request, based on this we display error or result
  const {status, heroAbilities, link } = useSelector((state) => state.ability)
  const dispatch = useDispatch() // function for our reducer callbacks
  useEffect(() => {
    if (hero) { // hero did load, we can fetch the abilities
      dispatch(fetchAllAbilities(hero.name))
    } else if (!hero) { // hero did not load, we need to fetch the hero first
       dispatch(fetchHeroes())
    }
  }, [hero, dispatch]) // hook dependent on hero

  const abilityImages = heroAbilities.map((ability, index) => { // get the ability images
    return <img key={index}src={link + ability.img} alt='ability'/>
  })


  if (status === 'loading' || statusHero === 'loading') { // loading, either page was refreshed or waiting for request  
    return <>Zagruzka...😎</>
  }

  return (
    <div>
      {hero.localized_name}
      <div>{abilityImages}</div>
    </div>
  )
}

export default Hero
