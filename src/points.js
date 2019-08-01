import React from 'react'

export default function Points({ score }) {
  return (
    <div>
      <h3 className="score">Score X : <span style={{ color: 'red' }}>{score.X}</span> , O : <span style={{ color: 'blue' }}>{score.O}</span></h3>
    </div>
  )
}