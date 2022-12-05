import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../../Redux/slices/itemsSlice'
import { itemQualities } from '../../../../utils/constants'
import QualityBlocks from './qualityBlocks/QualityBlocks'
import styles from './Items.module.scss'
import { setSearchValue } from '../../../../Redux/slices/filterItemsSlice'
const Items = () => {
  
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.item)
  const {searchValue} = useSelector(state => state.filterItem)
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
    <div>
      <input type='text' value={searchValue} onChange={(e) => {
        dispatch(setSearchValue(e.target.value))
      }}></input>
    <div className={styles.itemsContainer}>
      {itemBlocks}
      </div>
    </div>
  )
}


export default Items