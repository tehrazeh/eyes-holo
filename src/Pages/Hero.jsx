import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchHeroes, selectHeroById } from '../Redux/slices/heroesSlice'

 const Hero = () => {
  const { id } = useParams()
  const hero = useSelector(selectHeroById(id))[0]
  const status = useSelector((state) => state.hero.status)
  const dispatch = useDispatch()

  if (status === 'loading') {
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
