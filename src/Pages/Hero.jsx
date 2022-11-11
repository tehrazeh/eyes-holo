import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchHeroes, selectHeroById } from '../Redux/slices/heroesSlice'

 const Hero = () => {
  const { id } = useParams() // id from the search bar
  const hero = useSelector(selectHeroById(id))[0] // selector that returns array with 1 object of matched hero

  const status = useSelector((state) => state.hero.status) // status of the api request, based on this we display error or result

  const dispatch = useDispatch() // function for our reducer callbacks

  if (status === 'loading') { // loading, either page was refreshed or waiting for request
    dispatch(fetchHeroes())
    return <>Zagruzka...😎</>
  }

  return (
    <div>
      {hero.localized_name}
    </div>
  )
}

export default Hero
