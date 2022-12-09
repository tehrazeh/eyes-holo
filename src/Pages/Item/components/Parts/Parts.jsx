import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setComponents } from "../../../../Redux/slices/itemsSlice"
import { link } from "../../../../utils/constants"
import styles from './Parts.module.scss'
import costImage from '../../../../Assets/Item/cost.png'

export const Parts = (props) => {
    const dispatch = useDispatch()
    const itemKey = Object.keys(props.item)[0] // key of the item (overwhelming_blink)
    const itemStats = props.item[itemKey] // object of item attributes: img, full name etc.
    const {itemComponents, itemRecipe} = useSelector((state) => state.item) // get the array of components of the item
    const componentElements = itemComponents.map((component, index) => { // array of component images
        return <div key={index}>
          <div className = {styles.costBlock}>
          <img  className = {styles.costImage} src = {costImage} alt ='cost'/>
          <p>{component?.cost}</p>
          </div>
          <Link to={'/Items/' + component?.id} >
            <img className={styles.componentImage} src={link + component?.img} alt='component'></img>
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
    <div className={styles.container}>
      <p>Item Components:</p> 
      <div className={styles.container_items}>{componentElements}
        {itemRecipe && <div>
          <div className = {styles.costBlock}>
            <img  className = {styles.costImage} src = {costImage} alt ='cost'/>
            <p>{itemRecipe.cost}</p>
          </div>
        <img src={link + itemRecipe.img} alt='recipe'></img>
        </div>}
      </div> 
  </div>
  )
}

export default Parts