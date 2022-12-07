import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchItems, selectItemById, setComponents, setEntities } from '../Redux/slices/itemsSlice'

const Item = () => {
  const { id } = useParams() // id from the search bar
  const item = useSelector(selectItemById(id)) // selector that returns array with 1 object of matched item
  const { link, status, itemRecipe } = useSelector((state) => state.item) // status of the api request, based on this we display error or result
  const components = useSelector((state) => state.item.itemComponents) // get the array of components of the item
  const entities = useSelector((state) => state.item.itemEntities)
  const dispatch = useDispatch() // function for our reducer callbacks

  const itemKey = Object.keys(item)[0] // key of the item (overwhelming_blink)
  const itemStats = item[itemKey] // object of item attributes: img, full name etc.
  const componentElements = components.map((component, index) => { // array of component images
    return <div key={index}><p>{component?.cost}</p>
      <Link to={'/Items/' + component?.id} >
        <img src={link + component?.img} alt='component'></img>
      </Link>
    </div>
  })

  const entityElements = entities.map((entity, index) => { // array of entity images
    return <div key={index}><p>{entity?.cost}</p>
      <Link to={'/Items/' + entity?.id} >
        <img src={link + entity?.img} alt='entity'></img>
      </Link>
    </div>
  })

  useEffect(() => {
    if (itemStats) { // item attributes loaded, get the components and items that this item is part of
      dispatch(setComponents({ componentNames: itemStats.components,
         itemCost: itemStats.cost, itemName: itemStats.dname }))
      dispatch(setEntities(itemKey)) // get entities that have this item as a component
    } else if (!itemStats) { // no item attributes, fetch info about item
      dispatch(fetchItems())
    }
  }, [itemStats, itemKey, dispatch])


  if (status === 'loading') { // loading, either page was refreshed or waiting for request
    return <>Zagruzka...😎</>
  }

  return (
    <div>
      {/* { itemStats?.qual && <div>Quality: {itemStats.qual}</div>} */}
      <div>Item: {itemStats.dname}</div>
      <div>Cost: {itemStats.cost}</div> 
      { componentElements.length > 0 && <div>Components: {componentElements} 
        {itemRecipe && <div><p>{itemRecipe.cost}</p>
            <img src={link + itemRecipe.img} alt='recipe'></img>
        </div>}
      </div>}
      { entityElements.length > 0 && <div>Part of: {entityElements} 
        </div>}
    </div>
  )
}


export default Item
