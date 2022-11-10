import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes } from '../../../../Redux/slices/heroesSlice'

const Heroes = () => {
  const {heroes, status, link} = useSelector((state) => state.hero)
  const dispatch = useDispatch()

  // const heroElements = []
  // for (let hero in heroes) {
  //   heroElements.push(<img key={heroes[hero].id} src={link + heroes[hero].img} alt='hero icon'/>)
  // }
    const heroElements = heroes.map(hero => {
      return <img key={hero.id} src={link + hero.img} alt='hero icon'/>
    })

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