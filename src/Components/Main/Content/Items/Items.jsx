import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../../Redux/slices/itemsSlice'
import { Link } from 'react-router-dom'

const Items = () => {
  const dispatch = useDispatch()
  const { items, status, link } = useSelector(state => state.item)

  const itemElements = []
  for (let item in items) {
    itemElements.push(<Link to={'/Items/' + items[item].id} key={items[item].id}>
      <img src={link + items[item].img} alt='item' />
    </Link>)
  }

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  if (status === 'loading') {
    return <>Zagruzka...😎</>
  }
  return (
    <div>{itemElements}</div>
  )
}


export default Items