import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchItems, selectItemById, setComponents } from '../Redux/slices/itemsSlice'

 const Hero = () => {
  const { id } = useParams() // id from the search bar
  const item = useSelector(selectItemById(id)) // selector that returns array with 1 object of matched item

  const {link, status} = useSelector((state) => state.item) // status of the api request, based on this we display error or result
  const components = useSelector((state) => state.item.itemComponents) // get the array of components of the item
  const dispatch = useDispatch() // function for our reducer callbacks
  

  const itemKey = Object.keys(item)[0] // key of the item (overwhelming_blink)
  const itemAttributes = item[itemKey] // object of item attributes: img, full name etc.

  const componentElements = components.map(component => { // array of component images
    return <Link to={'/Items/' + component.id} key={component.id}>
      <img src={link + component.img} alt='component'></img>
      </Link>
  })

  useEffect(() => {
    if (itemAttributes) { // item attributes loaded, get the components
      dispatch(setComponents(itemAttributes.components))
    } else if (!itemAttributes) { // no item attributes, fetch info about item
      dispatch(fetchItems())
    }
  }, [itemAttributes, dispatch])


  if (status === 'loading') { // loading, either page was refreshed or waiting for request
    return <>Zagruzka...😎</>
  }

  return (
    <div>
      <div>Item: {itemAttributes.dname}</div>
      <div>Components: {componentElements}</div>
    </div>
  )
}


export default Hero
