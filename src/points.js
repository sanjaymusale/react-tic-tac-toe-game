import React from 'react'

export default function Points({ winner, points }) {
  let Xpoint, Opoint
  if (winner) {
    if (winner.winner === 'X')
      Xpoint = winner.Xpoint
    if (winner.winner === 'O')
      Opoint = winner.Opoint
  }
  console.log('innerwinner', winner)
  console.log('innerpoints', points)
  return (
    <div>
      <h3 class="score">Score X : <span style={{ color: 'red' }}>{Xpoint ? points.X + 1 : points.X}</span> , O : <span style={{ color: 'blue' }}>{Opoint ? points.O + 1 : points.O}</span></h3>
    </div>
  )
}