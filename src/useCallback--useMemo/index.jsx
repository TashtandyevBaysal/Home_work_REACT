import React, { useCallback, useMemo } from 'react'

const ItemList = ({ items }) => {
  const handleItemClick = useCallback((index) => {
    console.log(index)
  }, [])

  const evenNumbers = useMemo(() => {
    return items.filter((item) => item % 2 === 0);
  }, [items])


  return (
    <div> 
      <ul>
        {evenNumbers.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList
