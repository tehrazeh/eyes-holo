import { useSelector } from "react-redux"
import { selectItemsByQuality } from "../../../../../Redux/slices/itemsSlice"
import { Link } from "react-router-dom"
import { link } from "../../../../../utils/constants"
import styles from './QualityBlocks.module.scss'
import { useDebounce } from '../../../../../utils/hooks/useDebounce'
const QualityBlocks = (props) => {

  const items = useSelector(selectItemsByQuality(props.itemQuality))
  const { searchValue } = useSelector(state => state.filterItem)
  const activeSearchValue = useDebounce(searchValue, 200)


  // use reduce instead of map to end up having empty array if filter input
  // does not satisfy any elements. then check for length and not render if empty
  const itemElements = items.reduce((acc, item) => {
    if (item.dname.toLowerCase().includes(searchValue.toLowerCase())) { // active for debounce
      acc.push(
      <div key={item.id} className={styles.element}>
        <Link to={'/Items/' + item.id} key={item.id}>
          <img src={link + item.img} alt='item' />
          <p className={styles.element_title}>{item.dname}</p>
        </Link>
      </div>)
    }
    return acc
  }, [])

  return (
    <div className={`${styles.elementSection} ${styles[props.itemQuality]}`}>
      <div className={styles.elementTitle}>
        <img className={styles.rarityImg} src={require(`../../../../../Assets/Rarity/${props.itemQuality}.png`)} 
        alt ='rarity'/>
        <span>{props.itemQuality}</span>
      </div>
      { itemElements.length >= 1 ?
      <div className={styles.elementsBlock}>
        {itemElements}
      </div>
      : <p>...</p>
      }
    </div>
  )
}

export default QualityBlocks