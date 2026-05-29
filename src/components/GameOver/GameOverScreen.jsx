//screen temporal para mostrar el puntaje final y ofrecer reiniciar el juego
function GameOverScreen({ score, round, onRestart }) {
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>Game Over</h1>
      <p>Ronda: {round}</p>
      <p>Puntaje: {score}</p>
      <button onClick={onRestart}>Reiniciar</button>
    </div>
  )
}

export default GameOverScreen