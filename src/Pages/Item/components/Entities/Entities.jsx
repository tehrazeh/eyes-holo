import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setEntities } from "../../../../Redux/slices/itemsSlice"
import { link } from "../../../../utils/constants"

export const Entities = (props) => {
    const dispatch = useDispatch()
    const itemKey = Object.keys(props.item)[0] // key of the item (overwhelming_blink)
    const entities = useSelector((state) => state.item.itemEntities)
    const entityElements = entities.map((entity, index) => { // array of entity images
        return <div key={index}><p>{entity?.cost}</p>
          <Link to={'/Items/' + entity?.id} >
            <img src={link + entity?.img} alt='entity'></img>
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
        <div>Part of: {entityElements}</div> 
  )
}

export default Entities