import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setEntities } from "../../../../Redux/slices/itemsSlice"
import { link } from "../../../../utils/constants"
import styles from '../Parts/Parts.module.scss'
import costImage from '../../../../Assets/Item/cost.png'

export const Entities = (props) => {
    const dispatch = useDispatch()
    const itemKey = Object.keys(props.item)[0] // key of the item (overwhelming_blink)
    const entities = useSelector((state) => state.item.itemEntities)
    const entityElements = entities.map((entity, index) => { // array of entity images
        return <div key={index}>
          <div className = {styles.costBlock}>
          <img  className = {styles.costImage} src = {costImage} alt ='cost'/>
          <p>{entity?.cost}</p>
          </div>
          <Link to={'/Items/' + entity?.id} >
            <img className={styles.componentImage} src={link + entity?.img} alt='entity'></img>
          </Link>
        </div>
    })

    useEffect(() => {
        dispatch(setEntities(itemKey))
    }, [dispatch, itemKey])

    if (entityElements.length < 1) {
        return null
    }

  return (
        <div className={styles.container}>
          <p>Part of:</p>
          <div className={styles.container_items}>
            {entityElements}
          </div> 
        </div> 
  )
}

export default Entities