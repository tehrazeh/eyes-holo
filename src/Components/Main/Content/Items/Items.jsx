import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../../Redux/slices/itemsSlice'
import { itemQualities } from '../../../../utils/constants'
import QualityBlocks from './qualityBlocks/QualityBlocks'
import styles from './Items.module.scss'
const Items = () => {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.item)
  
  const itemBlocks = itemQualities.map((quality) => {
    return <QualityBlocks itemQuality={quality} key={quality}/>
  })
  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  if (status === 'loading') {
    return <>Zagruzka...😎</>
  }
  return (
    <div className={styles.itemsContainer}>
      {itemBlocks}
      </div>
  )
}


export default Items