import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItems, selectItemById } from '../../Redux/slices/itemsSlice'
import Description from './components/Description/Description'
import Entities from './components/Entities/Entities'
import Parts from './components/Parts/Parts'
import Profile from './components/Profile/Profile'
import styles from './Item.module.scss'

const Item = () => {
  const { id } = useParams() // id from the search bar
  const item = useSelector(selectItemById(id)) // selector that returns array with 1 object of matched item
  const { status } = useSelector((state) => state.item) // status of the api request, based on this we display error or result
  const itemKey = Object.keys(item)[0] // key of the item (overwhelming_blink)
  const itemStats = item[itemKey] // object of item attributes: img, full name etc.
  const dispatch = useDispatch() // function for our reducer callbacks


  useEffect(() => {
    if (!itemStats) { // no item attributes, fetch info about item
      dispatch(fetchItems())
    }
  }, [itemStats, dispatch])


  if (status === 'loading') { // loading, either page was refreshed or waiting for request
    return <>Zagruzka...😎</>
  }

  return (
    <div className={styles.itemContainer}>
      <Profile itemStats={itemStats}/>
      <Description itemStats={itemStats}/>
      <Parts item={item} />
      {/* <Entities item={item} /> */}
    </div>
  )
}


export default Item
