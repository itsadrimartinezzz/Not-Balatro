function MainMenu({ onStart }) {
  return (
    <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
      <h1>Not-Balatro</h1>
      <p style={{ marginBottom: '1rem' }}>Elige dificultad:</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={() => onStart('easy')}>Fácil</button>
        <button onClick={() => onStart('normal')}>Normal</button>
        <button onClick={() => onStart('hard')}>Difícil</button>
      </div>
    </div>
  )
}

export default MainMenu