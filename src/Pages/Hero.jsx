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
    if (hero) {
      dispatch(fetchAllAbilities(hero.name))
    } else if (!hero) {
       dispatch(fetchHeroes())
    }
  }, [hero, dispatch])

  const abilityImages = heroAbilities.map((ability, index) => {
    return <img key={index}src={link + ability.img} alt='ability'/>
  })


  if (statusHero === 'loading' || status === 'loading') { // loading, either page was refreshed or waiting for request  
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
