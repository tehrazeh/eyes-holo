import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItems, selectItemById } from '../Redux/slices/itemsSlice'

 const Hero = () => {
  const { id } = useParams() // id from the search bar
  const item = useSelector(selectItemById(id))[0] // selector that returns array with 1 object of matched hero

  const status = useSelector((state) => state.item.status) // status of the api request, based on this we display error or result

  const dispatch = useDispatch() // function for our reducer callbacks

  if (status === 'loading') { // loading, either page was refreshed or waiting for request
    dispatch(fetchItems())
    return <>Zagruzka...😎</>
  }

  return (
    <div>
      {item.dname}
    </div>
  )
}

export default Hero
