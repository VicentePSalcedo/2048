import React from 'react'
import '../css/tile.css'

function Tile({
    value
}) {
  return (
    <div className="tile">
        {value}
    </div>
  )
}

export default Tile