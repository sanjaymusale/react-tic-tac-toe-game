import React from 'react'

export default function Points({ score }) {
  return (
    <div className="score">
      {/* <h3 className="score">Score X : <span style={{ color: 'red' }}>{score.X}</span> , O : <span style={{ color: 'blue' }}>{score.O}</span></h3> */}
      <div><button>X</button><button>{score.X}</button></div>
      <div><button>O</button><button>{score.O}</button></div>
    </div>
  )
}