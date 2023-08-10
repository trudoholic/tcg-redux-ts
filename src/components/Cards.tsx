import * as React from 'react'
import useCards from "../hooks/useCards";

export default function Cards() {
  const {
    cardItems,
    handleAddOne,
    handleAddOneAsync,
    handleAddMany,
    handleUpdate,
    handleRemove,
    waiting,
  } = useCards()

  return (
    <div className="card">
      <button onClick={handleAddOne}>
        AddOne
      </button>
      <button disabled={waiting} onClick={handleAddOneAsync}>
        {waiting? "Wait...": "AddAsync"}
      </button>
      <button onClick={handleAddMany}>
        AddMany
      </button>
      <button onClick={handleUpdate}>
        Update
      </button>
      <button onClick={handleRemove}>
        Remove
      </button>
      {cardItems.length
        ? <ul>{cardItems}</ul>
        : <div>No cards!</div>
      }
    </div>
  )
}