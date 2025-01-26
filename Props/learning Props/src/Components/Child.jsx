import React from 'react'

function Child(props) {
  return (
    <>
    <input type="text" onChange={(e)=> props.setName(e.target.value)} />
 <p> {props.title}: {props.name}</p>
 </>
  )
}

export default Child