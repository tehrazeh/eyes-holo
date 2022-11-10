import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../../Redux/slices/itemsSlice'

 const Items = () => {
  const dispatch = useDispatch()
  const { items, status, link} = useSelector(state => state.item)

  // const itemElements = []
  // for (let item in items) {
  //   itemElements.push(<img key={items[item].id} src={link + items[item].img} alt='item'/>)
  // }
  const itemElements = items.map(item => {
    return <img key={item.id} src={link + item.img} alt='item'/>
  })

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