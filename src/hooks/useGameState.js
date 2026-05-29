//logica de estado del juego, inicializa partidas, controla rondas, vidas y puntajes, y procesa acciones 

import { useReducer, useCallback } from 'react'
import { createShuffledDeck, dealHand, replaceCards } from '../utils/deckUtils.js'
import { calculateScore } from '../utils/scoreCalc.js'
import { getTargetScore } from '../utils/difficultyUtils.js'

const HAND_SIZE = 8
const MAX_LIVES = 3

const initialState = {
  screen:       'menu',
  round:        1,
  lives:        MAX_LIVES,
  score:        0,        // se reinicia cada ronda
  targetScore:  0,
  hand:         [],
  selected:     [],
  deck:         [],
  activeJokers: [],
  difficulty:   'normal',
}

function gameReducer(state, action) {
  switch (action.type) {

    case 'START_GAME': {
      const difficulty = action.difficulty ?? 'normal'
      const fullDeck = createShuffledDeck()
      const { hand, remainingDeck: deck } = dealHand(fullDeck, HAND_SIZE)
      return {
        ...initialState,
        screen: 'playing',
        difficulty,
        hand,
        deck,
        targetScore: getTargetScore(1, difficulty),
      }
    }

    case 'RESET_GAME':
      return { ...initialState }

    case 'TOGGLE_SELECT': {
      const id = action.id
      const selected = state.selected.includes(id)
        ? state.selected.filter((x) => x !== id)
        : [...state.selected, id]
      return { ...state, selected }
    }

    case 'PLAY_HAND': {
  if (state.selected.length === 0) return state
  const playedCards = state.hand.filter((c) => state.selected.includes(c.id))
  const gained = calculateScore(playedCards, action.activeJokers || [])
  const newScore = state.score + gained.total
  const { newHand: hand, remainingDeck: deck } = replaceCards(state.hand, state.selected, state.deck)

  if (newScore >= state.targetScore) {
    const nextRound = state.round + 1
    return {
      ...state,
      round:       nextRound,
      score:       0,
      targetScore: getTargetScore(nextRound, state.difficulty),
      hand,
      deck,
      selected:    [],
    }
  }

  const lives = state.lives - 1

  if (lives <= 0) {
    return {
      ...state,
      screen:   'gameover',
      score:    newScore,
      lives:    0,
      hand,
      deck,
      selected: [],
    }
  }

  return {
    ...state,
    score:    newScore,
    lives,
    hand,
    deck,
    selected: [],
  }
}



    case 'DISCARD': {
      if (state.selected.length === 0) return state
      const { newHand: hand, remainingDeck: deck } = replaceCards(state.hand, state.selected, state.deck)
      return { ...state, hand, deck, selected: [] }
    }

    case 'SKIP': {
      const nextRound = state.round + 1
      return {
        ...state,
        round:       nextRound,
        score:       0,
        targetScore: getTargetScore(nextRound, state.difficulty),
        selected:    [],
      }
    }

    default:
      return state
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  const startGame    = useCallback((difficulty) => dispatch({ type: 'START_GAME', difficulty }), [])
  const resetGame    = useCallback(() => dispatch({ type: 'RESET_GAME' }), [])
  const toggleSelect = useCallback((id) => dispatch({ type: 'TOGGLE_SELECT', id }), [])
  const playHand = useCallback((activeJokers) => dispatch({ type: 'PLAY_HAND', activeJokers }), [])   
  const discard      = useCallback(() => dispatch({ type: 'DISCARD' }), [])
  const skip         = useCallback(() => dispatch({ type: 'SKIP' }), [])

  return {
    ...state,
    startGame,
    resetGame,
    toggleSelect,
    playHand,
    discard,
    skip,
  }
}

export default useGameState