//menu temporal para probar logica 
function MainMenu({ onStart }) {
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>Not-Balatro</h1>
      <button onClick={() => onStart('normal')}>Jugar</button>
    </div>
  )
}

export default MainMenu