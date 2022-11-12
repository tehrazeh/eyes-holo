import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes, selectHeroByAttribute } from '../../../../Redux/slices/heroesSlice'

const Heroes = () => {
  const {status, link} = useSelector((state) => state.hero) // get state from slice
  const dispatch = useDispatch() // for reducer callbacks


    // get heroes array of a certain attribute
    const agilityHeroes = useSelector(selectHeroByAttribute('agi'))
    const intellectHeroes = useSelector(selectHeroByAttribute('int'))
    const strengthHeroes = useSelector(selectHeroByAttribute('str'))

    const constructHeroGroup = (heroesArray) => {
        return heroesArray.map(hero => {
          return <Link to={'/Heroes/' + hero.id} key={hero.id}><img src={link + hero.img} alt='hero icon'/></Link>
        })
    }

    const heroElements = constructHeroGroup(intellectHeroes)
    // const heroElements = heroes.map(hero => {
    //   return <Link to={'/hero/' + hero.id} key={hero.id}><img src={link + hero.img} alt='hero icon'/></Link>
    // })

  useEffect(() => { // fetch heroes effect
      dispatch(fetchHeroes())
  }, [dispatch])

  if (status === 'loading') { // waiting for a response, or page was refreshed
    return <>Zagruzka...😎</>
  }
  return (
    <div>
      <div>{heroElements}</div>
    </div>
  )
}

export default Heroes