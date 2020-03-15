import React from 'react'

const ItemPage = (props) => (
  <div>
    <p>This is portfolio item id: {props.match.params.id}</p>
  </div>
)

export default ItemPage