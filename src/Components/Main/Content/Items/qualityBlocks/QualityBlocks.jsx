import { useSelector } from "react-redux"
import { selectItemsByQuality } from "../../../../../Redux/slices/itemsSlice"
import { Link } from "react-router-dom"
import { link } from "../../../../../utils/constants"

const QualityBlocks = (props) => {

  const items = useSelector(selectItemsByQuality(props.itemQuality))
  const itemElements = items.map((item) => {
    return <Link to={'/Items/' + item.id} key={item.id}>
    <img src={link + item.img} alt='item' />
  </Link>
  })
  return (
    <div>{itemElements}</div>
  )
}

export default QualityBlocks