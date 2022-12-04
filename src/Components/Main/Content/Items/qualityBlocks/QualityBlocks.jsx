import { useSelector } from "react-redux"
import { selectItemsByQuality } from "../../../../../Redux/slices/itemsSlice"
import { Link } from "react-router-dom"
import { link } from "../../../../../utils/constants"
import styles from './QualityBlocks.module.scss'

const QualityBlocks = (props) => {

  const items = useSelector(selectItemsByQuality(props.itemQuality))
  const itemElements = items.map((item) => {
    return <div key={item.id} className={styles.element}><Link to={'/Items/' + item.id} key={item.id}>
    <img src={link + item.img} alt='item' />
    <p className={styles.element_title}>{item.dname}</p>
  </Link>
  </div>
  })
  return (
    <div className={`${styles.elementSection} ${styles[props.itemQuality]}`}>
      <div className={styles.elementTitle}>
        <img className={styles.rarityImg} src={require(`../../../../../Assets/Rarity/${props.itemQuality}.png`)}/>
        <span>{props.itemQuality}</span>
      </div>
      <div className={styles.elementsBlock}>
        {itemElements}
      </div>   
    </div>
  )
}

export default QualityBlocks