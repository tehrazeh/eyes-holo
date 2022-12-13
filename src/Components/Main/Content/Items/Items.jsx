import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../../Redux/slices/itemsSlice'
import { itemQualities } from '../../../../utils/constants'
import QualityBlocks from './qualityBlocks/QualityBlocks'
import styles from './Items.module.scss'
import { setSearchValue, clearSearchValue } from '../../../../Redux/slices/filterItemsSlice'
const Items = () => {
  
  const dispatch = useDispatch()
  const { status } = useSelector(state => state.item)
  const {searchValue} = useSelector(state => state.filterItem)
  const itemBlocks = itemQualities.map((quality) => {
    return <QualityBlocks itemQuality={quality} key={quality}/>
  })
  useEffect(() => {
    if (status !== 'loaded') {
      dispatch(fetchItems())
    }   
  }, [dispatch, status])

  if (status === 'loading') {
    return <>Loading...</>
  }
  return (
    <div>
      <div className={styles.inputContainer}>
        <img className={styles.searchIcon} src={require(`../../../../Assets/Input/search.png`)}
          alt='search' />
        <input
          value={searchValue}
          onChange={(event) => dispatch(setSearchValue(event.target.value))}
          placeholder="Search Item..." />
        {searchValue &&
          <img className={styles.clearIcon} src={require(`../../../../Assets/Input/clear.png`)}
            alt='clear' onClick={() => dispatch(clearSearchValue())} />}
      </div>
    <div className={styles.itemsContainer}>
      {itemBlocks}
      </div>
    </div>
  )
}


export default Items