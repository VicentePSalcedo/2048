import React from 'react'
import Tile from './Tile'
import '../css/grid.css'

function Grid({size}) {
  return (
    <div className="grid">
        <Tile value={2}/>
        <Tile value={2}/>
        <Tile value={2}/>
        <Tile value={2}/>

    </div>
  )
}

export default Grid