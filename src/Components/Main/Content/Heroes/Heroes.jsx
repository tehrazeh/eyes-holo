import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes, selectHeroByAttribute } from '../../../../Redux/slices/heroesSlice'

const Heroes = () => {
  const {heroes, status, link} = useSelector((state) => state.hero)
  const dispatch = useDispatch()
  // const agilityHeroes = useSelector(selectHeroByAttribute('agi'))

    const heroElements = heroes.map(hero => {
      return <Link to={'/hero/' + hero.id} key={hero.id}><img src={link + hero.img} alt='hero icon'/></Link>
    })
    // const heroElementsAgility = agilityHeroes.map(hero => {
    //   return <img key={hero.id} src={link + hero.img} alt='hero icon'/>
    // })

  useEffect(() => {
      dispatch(fetchHeroes())
  }, [dispatch])

  if (status === 'loading') {
    return <>Zagruzka...😎</>
  }
  return (
    <div>
      <div>{heroElements}</div>
    </div>
  )
}

export default Heroes