import { useGameState } from './hooks/useGameState'
import { useJokers }    from './hooks/useJokers'
import { useTarot }     from './hooks/useTarot'

import MainMenu       from './components/Menu/MainMenu'
import GameOverScreen from './components/GameOver/GameOverScreen'
// import GameBoard from './components/Game/GameBoard'

function App() {
  const game   = useGameState()
  const jokers = useJokers()
  const tarot  = useTarot()

  if (game.screen === 'menu') {
    return (
      <MainMenu
        onStart={game.startGame}
      />
    )
  }

  if (game.screen === 'gameover') {
    return (
      <GameOverScreen
        score={game.score}
        round={game.round}
        onRestart={game.resetGame}
      />
    )
  }

  // parte front: descomentar GameBoard cuando Adriana lo tenga listo
  return (
    // <GameBoard
    //   hand          = {game.hand}
    //   score         = {game.score}
    //   targetScore   = {game.targetScore}
    //   round         = {game.round}
    //   lives         = {game.lives}
    //   deckLeft      = {game.deck.length}
    //   difficulty    = {game.difficulty}
    //   selected      = {game.selected}
    //   onSelect      = {game.toggleSelect}
    //   onPlayHand    = {game.playHand}
    //   onDiscard     = {game.discard}
    //   onSkip        = {game.skip}
    //   onRestart     = {game.resetGame}
    //   activeJokers  = {jokers.active}
    //   pendingJokers = {jokers.pending}
    //   onOfferJokers = {jokers.offerJokers}
    //   onChooseJoker = {jokers.chooseJoker}
    //   activeTarot   = {tarot.active}
    //   onApplyTarot  = {tarot.applyTarot}
    //   onDismissTarot= {tarot.dismissTarot}
    // />

<div style={{ padding: '2rem', color: 'white' }}>
  <h2>Ronda {game.round}</h2>
  <p>Puntaje: {game.score} / {game.targetScore}</p>
  <p>Vidas: {game.lives}</p>
  <p>Cartas en mazo: {game.deck.length}</p>

  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0' }}>
    {game.hand.map(card => (
      <div
        key={card.id}
        onClick={() => game.toggleSelect(card.id)}
        style={{
          padding: '1rem',
          border: game.selected.includes(card.id) ? '2px solid yellow' : '2px solid white',
          borderRadius: '8px',
          cursor: 'pointer',
          background: game.selected.includes(card.id) ? '#333' : 'transparent',
        }}
      >
        {card.value} {card.suit[0].toUpperCase()}
      </div>
    ))}
  </div>

  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
    <button onClick={game.playHand}>Jugar mano</button>
    <button onClick={game.discard}>Descartar</button>
    <button onClick={game.skip}>Skip ronda</button>
    <button onClick={game.resetGame}>Reiniciar</button>
  </div>

  {game.selected.length > 0 && (
    <p style={{ marginTop: '1rem', color: 'yellow' }}>
      Seleccionadas: {game.selected.length} cartas
    </p>
  )}
  {/* Prueba de jokers */}
<div style={{ marginTop: '1rem', borderTop: '1px solid white', paddingTop: '1rem' }}>
  <p>Jokers activos: {jokers.active.length === 0 ? 'ninguno' : jokers.active.map(j => j.name).join(', ')}</p>
  
  {jokers.pending.length === 0 ? (
    <button onClick={jokers.offerJokers}>Ofrecer jokers</button>
  ) : (
    <div>
      <p>Elige un joker:</p>
      {jokers.pending.map(j => (
        <button
          key={j.id}
          onClick={() => jokers.chooseJoker(j.id)}
          style={{ marginRight: '1rem' }}
        >
          {j.name} — {j.description}
        </button>
      ))}
    </div>
  )}
</div>
</div>
  )
}

export default App