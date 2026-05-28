//configuracion logica de cartas del tarot

export const TAROT_CARDS = [
  {
    id: 'tarot_fool',
    name: 'El Loco',
    description: 'Resetea las cartas seleccionadas y da una mano nueva gratis',
    apply: (gameState) => ({
      ...gameState,
      hand: gameState.freshHand(),
      selected: [],
    }),
  },
  {
    id: 'tarot_magician',
    name: 'El Mago',
    description: 'Duplica el valor numérico de las cartas seleccionadas esta ronda',
    apply: (gameState) => ({
      ...gameState,
      hand: gameState.hand.map(card =>
        gameState.selected.includes(card.id)
          ? { ...card, numericValue: card.numericValue * 2 }
          : card
      ),
    }),
  },
  {
    id: 'tarot_wheel',
    name: 'La Rueda de la Fortuna',
    description: 'Suma 100 puntos al puntaje objetivo (lo hace más fácil de alcanzar)',
    apply: (gameState) => ({
      ...gameState,
      targetScore: gameState.targetScore - 100,
    }),
  },
  {
    id: 'tarot_star',
    name: 'La Estrella',
    description: 'Convierte todas las cartas seleccionadas a diamantes',
    apply: (gameState) => ({
      ...gameState,
      hand: gameState.hand.map(card =>
        gameState.selected.includes(card.id)
          ? { ...card, suit: 'diamonds' }
          : card
      ),
    }),
  },
  {
    id: 'tarot_strength',
    name: 'La Fuerza',
    description: 'Sube en 1 el valor numérico de todas las cartas en mano',
    apply: (gameState) => ({
      ...gameState,
      hand: gameState.hand.map(card => ({
        ...card,
        numericValue: card.numericValue + 1,
      })),
    }),
  },
  {
    id: 'tarot_hermit',
    name: 'El Ermitaño',
    description: 'Recupera una vida perdida',
    apply: (gameState) => ({
      ...gameState,
      lives: Math.min(gameState.lives + 1, gameState.maxLives),
    }),
  },
]