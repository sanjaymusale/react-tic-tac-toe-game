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
      <h3>Score X : {Xpoint ? points.X + 1 : points.X}, O : {Opoint ? points.O + 1 : points.O}</h3>
    </div>
  )
}