import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setComponents } from "../../../../Redux/slices/itemsSlice"
import { link } from "../../../../utils/constants"

export const Parts = (props) => {
    const dispatch = useDispatch()
    const itemKey = Object.keys(props.item)[0] // key of the item (overwhelming_blink)
    const itemStats = props.item[itemKey] // object of item attributes: img, full name etc.
    const {itemComponents, itemRecipe} = useSelector((state) => state.item) // get the array of components of the item
    const componentElements = itemComponents.map((component, index) => { // array of component images
        return <div key={index}><p>{component?.cost}</p>
          <Link to={'/Items/' + component?.id} >
            <img src={link + component?.img} alt='component'></img>
          </Link>
        </div>
    })

    useEffect(() => {
        dispatch(setComponents({ componentNames: itemStats.components, // get the components of item, if any
            itemCost: itemStats.cost, itemName: itemStats.dname }))
    }, [dispatch, itemStats])


    if (componentElements.length < 1) {
        return null
    }

  return (
    <div>Components: {componentElements} 
        {itemRecipe && <div><p>{itemRecipe.cost}</p>
        <img src={link + itemRecipe.img} alt='recipe'></img>
    </div>}
  </div>
  )
}

export default Parts