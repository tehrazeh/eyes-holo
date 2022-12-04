import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchItems, selectItemById, setComponents } from '../Redux/slices/itemsSlice'

const Item = () => {
  const { id } = useParams() // id from the search bar
  const item = useSelector(selectItemById(id)) // selector that returns array with 1 object of matched item

  const { link, status, itemRecipe } = useSelector((state) => state.item) // status of the api request, based on this we display error or result
  const components = useSelector((state) => state.item.itemComponents) // get the array of components of the item
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

  useEffect(() => {
    if (itemStats) { // item attributes loaded, get the components
      dispatch(setComponents({ componentNames: itemStats.components,
         itemCost: itemStats.cost, itemName: itemStats.dname }))
    } else if (!itemStats) { // no item attributes, fetch info about item
      dispatch(fetchItems())
    }
  }, [itemStats, dispatch])


  if (status === 'loading') { // loading, either page was refreshed or waiting for request
    return <>Zagruzka...😎</>
  }

  return (
    <div>
      {/* { itemStats?.qual && <div>Quality: {itemStats.qual}</div>} */}
      <div>Item: {itemStats.dname}</div>
      <div>Cost: {itemStats.cost}</div> 
      <div>Components: {componentElements} 
        {itemRecipe && <div><p>{itemRecipe.cost}</p>
            <img src={link + itemRecipe.img} alt='recipe'></img>
        </div>}
      </div>
    </div>
  )
}


export default Item
